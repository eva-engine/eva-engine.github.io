# Eva.js Introduction

## What is Eva.js
Eva.js is a game engine that focuses on developing interactive game projects.

Eva.js provides the most commonly used and basic functions in the development of interactive game projects, making it easy to develop front-end interactive game.

Eva.js provides efficient game runtime and rendering capabilities, and can realize complex interactive game scenes.

Based on the ECS design pattern, Eva.js can freely expand engine functions and build a more prosperous ecosystem.


To learn about and start using Eva.js, please continue reading~


## Getting started
Eva.js is a front-end framework, users need to understand HTML/CSS/JS and other knowledge, currently Eva.js only has npm introduction method, developers need to use [node/npm](https://nodejs.org/)/ [webpack](https://webpack.js.org/) and other front-end tools.


Install Eva.js

```bash
npm i @eva/eva.js -S
```


In fact, you don’t need to look at the following concepts, just look at [playground](https://eva.alibaba-inc.com/playground/image) to start development. It is easier to understand the design concept of the engine after reading the following concepts, and the development is more Professional games.


## Concept

### Game

Game is the runtime carrier of the entire Eva.js project. Because Eva.js is a game framework that focuses on interactive game projects, this carrier is also called Game.

### GameObject

GameObject is an **object in the game**. In order to realize the plugging and unplugging of the game ability, some abilities can be added/removed/modified in real time. We designed the game object as a **can load any ability The container**, the newly initialized object does not have any capabilities. For example, a game object is an airplane, and it needs a picture of the airplane to display, we add the ability to display the picture to the game object, if it needs to move, it needs to add the ability to move.

### Components

Component can **endow the game object ability**, which is the pluggable ability mentioned above, usually only some data is stored on it. Each object can install multiple components to add corresponding capabilities, and usually components are only responsible for the objects they are bound to.

Eva.js officially provides many components related to rendering, animation, and data management, which can be directly used in the business. In daily simple game development, we will use **script components to implement some business logic**.

### Custom component

The capabilities of script components are similar to those of components, ** to implement some business logic**, but compared to components, script components provide a set of life cycle functions that can be operated through the game objects bound to the current component of this life cycle, for example Move the location, modify the properties of other components, etc. **It is recommended to use script components to develop business logic in game development.**

### System

System is usually used to read the data on the component and realize the corresponding ability of the component. It is usually installed before the game starts or when it is used. The core of Eva.js is a very lightweight runtime. , There is no default installation system, including the rendering system need to be installed manually. For example, there is only one image resource attribute on the image component, and the system will read the resource attribute and render the corresponding image on the canvas. Usually this step is not seen by the developer. The developer only needs to add the image component to achieve the image. Rendering.

### Plugins

A plugin is a combination of **component and system**, usually provided in the form of an npm package, and the system is usually installed before the game starts or when it is used. Components are used when adding capabilities to game objects.

![image.png](https://gw.alicdn.com/imgextra/i1/O1CN01fYzaFt1URSNYG3T7h_!!6000000002514-2-tps-1420-1208.png)

This is the system's lifecycle.

Let's [use Eva.js](/tutorials/quickstart) together.

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>