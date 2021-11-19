import React from 'react';
import clsx from 'clsx';
import styles from './Menu.modules.css';
import Translate, { translate } from '@docusaurus/Translate';




const menu = [
  {
    "name": translate({ id: "Image", message: "Image" }),
    "image": "https://img.alicdn.com/imgextra/i4/O1CN01Xxj9QS1yU9EBOeuay_!!6000000006581-55-tps-26-25.svg"
  },
  {
    "name": translate({ id: "Text", message: "Text" }),
    "image": "https://img.alicdn.com/imgextra/i2/O1CN01r07j2E1nys1Sx4dwQ_!!6000000005159-55-tps-20-24.svg"
  },
  {
    "name": translate({ id: "Sprite", message: "Sprite" }),
    "image": "https://img.alicdn.com/imgextra/i2/O1CN01tM9ghF21pAFQgnsF8_!!6000000007033-55-tps-85-96.svg"
  },
  {
    "name": translate({ id: "Mask", message: "Mask" }),
    "image": "https://img.alicdn.com/imgextra/i1/O1CN01HhqCRo28oQvXprsQf_!!6000000007979-55-tps-60-50.svg"
  },
  {
    "name": translate({ id: "Graphics", message: "Graphics" }),
    "image": "https://img.alicdn.com/imgextra/i2/O1CN01xbVjUQ1tcKDi9H3e2_!!6000000005922-55-tps-66-59.svg"
  },
  {
    "name": translate({ id: "Particles", message: "Particles" }),
    "image": "https://img.alicdn.com/imgextra/i3/O1CN01A2Dm4c298aLwm9cU5_!!6000000008023-55-tps-86-82.svg"
  },
  {
    "name": translate({ id: "Sprite Animation", message: "Sprite Animation" }),
    "image": "https://img.alicdn.com/imgextra/i4/O1CN01bWLFVl1QkSOVVa4mM_!!6000000002014-55-tps-22-22.svg"
  },
  {
    "name": translate({ id: "Physics", message: "Physics" }),
    "image": "https://img.alicdn.com/imgextra/i1/O1CN018BEtOE1J2lIcfNYWh_!!6000000000971-55-tps-87-88.svg"
  },
  {
    "name": translate({ id: "Resource", message: "Resource" }),
    "image": "https://img.alicdn.com/imgextra/i2/O1CN013qb8pZ21uCbfoJWBZ_!!6000000007044-55-tps-62-62.svg"
  },
  {
    "name": translate({ id: "Spine", message: "Spine" }),
    "image": "https://gw.alicdn.com/imgextra/i3/O1CN01s09jix22TvV1N84I5_!!6000000007122-55-tps-22-59.svg"
  },
  {
    "name": translate({ id: "Lottie", message: "Lottie" }),
    "image": "https://img.alicdn.com/imgextra/i4/O1CN01EEK4aL1s3geKTHWMF_!!6000000005711-55-tps-41-41.svg"
  },
  {
    "name": translate({ id: "Transition", message: "Transition" }),
    "image": "https://img.alicdn.com/imgextra/i4/O1CN01SLAFDL23iPdx6qe5i_!!6000000007289-55-tps-96-60.svg"
  },
  {
    "name": translate({ id: "Scene", message: "Scene" }),
    "image": "https://img.alicdn.com/imgextra/i3/O1CN01NhByau1zXBT6bC3wz_!!6000000006723-55-tps-96-96.svg"
  },
  {
    "name": translate({ id: "Data", message: "Data" }),
    "image": "https://img.alicdn.com/imgextra/i1/O1CN01fz9bac1pFe97ipfPV_!!6000000005331-55-tps-128-122.svg"
  },
  {
    "name": translate({ id: "Component", message: "Component" }),
    "image": "https://img.alicdn.com/imgextra/i3/O1CN01IpM7xF1lrQLkDoCnc_!!6000000004872-55-tps-96-96.svg"
  }
]

const menu2 = [{
  name: 'Dragonbones',
  image: require('../../static/img/db.png').default
}, {
  name: 'Spine',
  image: require('../../static/img/spine.png').default
}, {
  name: 'Lottie',
  image: require('../../static/img/lottie.png').default
}]

export default function Menu() {
  return (
    <section className={styles.menu}>
      <div className="container">
        <div className={styles.title}><Translate id="2D Interaction Ability">2D Interaction Ability</Translate></div>
        <div className={styles.list}>
          {menu.map(({ image, name }, i) => {
            return <div className={styles.box} key={i}>
              <div className={styles.imgBox} >
                <img className={styles.img} src={image} />
              </div>
              <div>{name}</div>
            </div>
          })}
        </div>
        <div className={styles.title2}><Translate id="3rd">3rd Resource Support</Translate></div>
        <div className={styles.desc2}>{menu2.map(({ name }) => name).join('/')}</div>
        <div className={styles.list2}>
          {menu2.map(({ image }, i) => {
            return <div className={styles.imgBox2} key={i}>
              <img className={styles.img2} src={image} />
            </div>
          })}
        </div>
      </div>

    </section>
  );
}
