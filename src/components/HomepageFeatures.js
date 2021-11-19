import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';
import Translate, {translate} from '@docusaurus/Translate';

const FeatureList = [
  {
    title: translate({ id: 'Easy to Use', message: 'Easy to Use' }),
    Svg: require('../../static/img/easy.svg').default,
    description: (
      <>
        <Translate id="Easy to Use desc">Eva.js provides out-of-box game components for developers to use right away. Yes, it's simple and elegant!</Translate>
      </>
    ),
  },
  {
    title: translate({ id: 'High-performance', message: 'High-performance' }),
    Svg: require('../../static/img/performance.svg').default,
    description: (
      <>
        <Translate id="High-performance desc">Eva.js is powered by efficient runtime and rendering pipeline (Pixi.JS) which makes it possible to unleash the full potential of your device.</Translate>
      </>
    ),
  },
  {
    title: translate({ id: 'Scalability', message: 'Scalability' }),
    Svg: require('../../static/img/extension.svg').default,
    description: (
      <>
        <Translate id="Scalability desc">Thanks to the ECS(Entity-Component-System) structure, you can expand your needs by highly customizable APIs. The only limitation is your imagination!</Translate>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
