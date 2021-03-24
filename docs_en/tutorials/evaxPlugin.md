# Data Management

## Introduce

In react/vue, we often use redux/vuex for data management and maintain a unified set of data. Under the Eva.js system, we have designed a set of data management system called EVAX, **through EVAX we can maintain For a common data, components on multiple different objects may use the same data for logical operation. **

For example, the life value in the game will not only be displayed on the top of the person’s head, but the characters in the game will also display different forms according to the number of life values. We bind the EVAX component to the game object to perform a certain data Monitor, if the data changes, you can manipulate the data or events on other components of the current game object.

Eva.js does not rely heavily on EVAX to develop games, and can be used as needed.

## Create store

All data needs to be defined in advance, if it is not defined, it will not be monitored

```js
// Create Store
const store = {
  user: {
    name:'Mingfei',
    age: 18
  },
  items: [
    {
      id: 1,
      name: '20191111'
    }
  ]
}
```

## Initialize EVAX

```js
// Introduce the evax plugin
import {EvaXSystem, EvaX} from'@eva/plugin-evax'

// Create a game and pass it to the store
const game = new Game({
  autoStart: true, // optional
  frameRate: 60
})
const store = {a: 1}
const evaxSystem = new EvaXSystem({
  store // Here pass the defined store
})
game.addSystem(evaxSystem)

const evaxManager = new GameObject('evaxManager')
evaxManager.addComponent(
  new EvaX({
    events: {
      'store.a': () => {}
    }
  })
)

game.scene.addChild(evaxMangager)
```

## Monitor data changes

```js
// Add evax component
go.addComponent(
  new EvaX({
    events: {
      'store.user': {
        deep: true, // property changes under store.user will also trigger
        handler(store, oldStore) {
          console.log(this) // current component
        }
      },
      'store.user.age'(store, oldStore) {},
      'store.items.0'(store, oldStore) {
        // The attribute change under 0 will not be triggered, if you need to monitor, you need to set deep
      },
      'store.items.0.name'(store, oldStore) {
        // name change will trigger
      },
      popUp(arg1, arg2) {
        // This is an event, refer to the following event trigger
      }
    }
  })
)
```

###

## update data

### Update a single value

Directly modify the value on the object, if the value is the same as before, it will also trigger an event that listens for this value change

```js
store.user.name ='Cailun'
// or
evaxSystem.store.user.name ='Cailun'
```

### evax.updateStore Update all values

**Tip**: updateStore and forceUpdateStore will only trigger the change of the last layer of attributes.

Full coverage mode updates, compare content changes, the changed content will trigger the update,

```js
const newStore = {
  user: {
    name:'Cailun',
    age: 18
  }
}

evaxSystem.emit('evax.updateStore', newStore)
```

The above operation will trigger the update of `store.user.name` because the age has not changed

### evax.forceUpdateStore forces all values ​​to be updated

Full coverage mode update, all values ​​will be updated once, triggering the listening events of all properties

```js
const newStore = {
  user: {
    name:'Cailun',
    age: 18
  }
}
evaxSystem.emit('evax.forceUpdateStore', newStore)
```

The above operation will trigger the `store.user.name` and `store.user.age` data change events, even if there is no change

### Events trigger

Use the emit method to trigger an agreed event, the event **don't** use evax. at the beginning

```js
evaxSystem.emit('popUp', arg1, arg2, //...) // Event convention, event **do not** use evax. at the beginning
```

Monitoring method:

```js
// Add evax component
go.addComponent(
  new EvaX({
    events: {
      popUp(arg1, arg2) {}
    }
  })
)
```

## Usage

### Create a text

In this case, if the text on the Store changes, we modify the content of the text on the corresponding component

```js
// Create an object, the text component uses the name in the store
const go = new GameObject('go')
const txt = go.addComponent(new Text({ text:'' }))
```

1. Generally speaking, our business logic is written in the script component. When the EVAX component receives the time or data change, the method on the script component is called.
2. Hang some components that need to be modified, such as Text, on the properties of the script component for subsequent operations.

```js
// Create a custom component and put the method in the custom component
class AScriptComponent extends Component{
  static componentName:'AScriptComponent',
  start() {
    this.txt = this.gameObject.getComponent('Text')
    // Use evax in the component to bind the evax component first, get the evax object on the evax component, and perform event triggering and modification
    const evax = this.gameObject.getComponent('EvaX')
    this.evax = evax.evax
  },
  setName(store, oldStore) {
    txt.text = store.user.name // Set new text content
    setTimeout(()=>{
      this.evax.emit('animationDown') // Notify that the modification is complete, and other components will take over the changes, not in this case
      this.evax.store.age += 1 // other components will take over the changes, not in this case
    }, 1000)
  },
  popUp(store) {
    // Do event corresponding operations
  }
})

// Add custom components
const aScript = go.addComponent(new AScriptComponent)
```

Create an evax component, write the event that needs to be bound, and call the event on the custom component

```js
// Add evax component
go.addComponent(
  new EvaX({
    events: {
      'store.user.name'(store, oldStore) {
        // It is recommended to place the trigger method inside other custom components for use with subsequent scene editors
        go.getComponent(AScriptComponent).setName(store, oldStore)
      },
      'store.user.age'(store, oldStore) {
        // ...
      },
      popUp(...args) {
        go.getComponent(AScriptComponent).popUp(...args)
      }
    }
  })
)
```

<br/>
<br/>
<br/>
<br/>
<br/>