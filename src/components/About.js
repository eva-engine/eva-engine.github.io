import React from 'react';
import clsx from 'clsx';
import styles from './About.modules.css';

import Translate, { translate } from '@docusaurus/Translate';

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.title}><Translate id="about">About Us</Translate></div>
      <div className={styles.content}><Translate id="team">Taobao FED</Translate><br/><Translate id="slash lab">（Slash Lab）</Translate></div>
      <img src="https://gw.alicdn.com/imgextra/i2/O1CN01CXxaf81OR6Qa7TvFx_!!6000000001701-2-tps-156-156.png" />
      <div className={styles.content}>
      <Translate id="dingtalk">DingTalk Group：35686170</Translate><br/>
      <Translate id="mail">Email：mingfei.fmf@alibaba-inc.com</Translate>
      </div>
      <a className={styles.learnMore} target="_blank" href="https://www.yuque.com/eva/blog/dvxlpg"><Translate id="learnmore">Learn More</Translate> &gt;</a>
    </section>
  );
}
