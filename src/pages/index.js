import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Translate, { translate } from '@docusaurus/Translate';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import Users from '../components/Users'
import Menu from '../components/Menu'
import Demos from '../components/Demos'
import About from '../components/About'


function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title"><Translate id="title">Eva.js</Translate></h1>
        <p className="hero__subtitle"><Translate id="tagline">A front-end game engine specifically for creating interactive game projects.</Translate></p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/tutorials/quickstart">
            <Translate id="quickstart">Quick Start</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  if (ExecutionEnvironment.canUseDom) {
    if (location.hash.indexOf('/tutorials') === 1 || location.hash.indexOf('/api') === 1) {
      location.replace(`/docs${location.hash.substring(1)}`)
    }
  }
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={translate({
        id: 'description',
        message: 'Eva.js is a front-end game engine specifically for creating interactive game projects.',
      })}>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <Users />
        <Menu />
        <Demos />
        <About />
      </main>
    </Layout>
  );
}
