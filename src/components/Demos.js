import React from 'react';
import clsx from 'clsx';
import styles from './Demos.modules.css';
import BrowserOnly from '@docusaurus/BrowserOnly';

import Translate, { translate } from '@docusaurus/Translate';


const DemoList = [
  {
    name: '芭芭农场',
    image: 'https://gw.alicdn.com/imgextra/i3/O1CN0183TDHE24v4CVdY957_!!6000000007452-2-tps-1170-2532.png',
    qrcode: 'https://gw.alicdn.com/imgextra/i2/O1CN01mIDamn249R0r7DBYx_!!6000000007348-2-tps-500-500.png',
    desc: '芭芭农场是一款淘宝APP上的“薅羊毛”游戏，用户只要定期“浇水施肥”，就能免费获得水果。',
    url: 'https://pages.tmall.com/wow/hdwk/act/2020nhj-single?disableNav=YES&HNnhs=true',
    github: ''
  },
  {
    name: '小流浪旅社',
    image: 'https://gw.alicdn.com/imgextra/i1/O1CN01kZkUFB1l6FYccR9TA_!!6000000004769-2-tps-1170-2532.png',
    qrcode: 'https://gw.alicdn.com/imgextra/i3/O1CN01qiWKYz1pKE6gTuHeP_!!6000000005341-2-tps-500-500.png',
    desc: '一款公益流浪猫狗救助游戏，通过玩家们的救助和够买行为，可以转化为救助站对宠物的真实救助行为。',
    url: 'https://m.duanqu.com/?_ariver_appid=13417847&_mp_code=tb&pha_active_page_key=game',
    github: ''
  },
  {
    name: '斗地主',
    image: 'https://gw.alicdn.com/imgextra/i4/O1CN01dCwFDD1mi5ttcLreF_!!6000000004987-2-tps-1170-2532.png',
    qrcode: 'https://gw.alicdn.com/imgextra/i4/O1CN01Vsc7oo1l9SKawnRFn_!!6000000004776-2-tps-500-500.png',
    desc: '淘宝也推出了使用Eva.js开发的斗地主游戏',
    url: 'https://pages.tmall.com/wow/z/hdwk/doudizhu/sX78ziQH2ar7ax6DKZF2-doudizhu?disableNav=YES',
    github: ''
  },
  {
    name: translate({ id: 'FlashArrowMan', message: 'FlashArrowMan' }),
    image: 'https://gw.alicdn.com/imgextra/i2/O1CN01VfSLyX1pVg0Zlowq9_!!6000000005366-0-tps-750-1617.jpg',
    qrcode: 'https://gw.alicdn.com/imgextra/i3/O1CN01rGjjGw1bVlSvh6EEq_!!6000000003471-2-tps-600-600.png',
    desc: 'Eva.js 官方开发的双人对战游戏，两个人在两个屏幕上相互无法看到对方，有着比较出色的可玩性。',
    url: 'http://eva.js.org/FlashArrowMan/',
    github: 'https://github.com/eva-engine/FlashArrowMan/'
  },
  {
    name: translate({ id: 'Space War', message: 'Space War' }),
    image: 'https://gw.alicdn.com/imgextra/i3/O1CN01qeF44421w2BreESRc_!!6000000007048-2-tps-644-1386.png',
    qrcode: 'https://gw.alicdn.com/imgextra/i3/O1CN01EhOXgu1ZzPsKWDvk9_!!6000000003265-2-tps-600-600.png',
    desc: '由作者 codetyphon 开发的射击小游戏。',
    url: 'https://codetyphon.github.io/eva-space-war/',
    github: 'https://github.com/codetyphon/eva-space-war/'
  },
  {
    name: translate({ id: 'Combo', message: 'Combo Watermanlon' }),
    image: 'https://gw.alicdn.com/imgextra/i2/O1CN01lUzMiG1eNvXCEWxEq_!!6000000003860-2-tps-644-1394.png',
    qrcode: 'https://gw.alicdn.com/imgextra/i1/O1CN01CTY5l91ricQwqurGH_!!6000000005665-2-tps-600-600.png',
    desc: '一夜爆红的合成大西瓜游戏，可以使用Eva.js快速开发一个',
    url: 'https://eva.js.org/watermelon/',
    github: 'https://eva.js.org/watermelon/'
  },
]




export default function Demos() {
  return (
    <section className={styles.users}>
      <div className={styles.title}>Demos</div>
      <div className="container">
        <div className="row">
          {DemoList.map(({ image, desc, url, github, qrcode }, i) => {
            return <div className={clsx('col col--4')} key={i}>
              <div className={styles.imgBox}>
                <div className={styles.panel}>
                  <a className={styles.url} href={url}>
                    <div className={styles.img} style={{ backgroundImage: `url(${image})` }}></div>
                    <div className={styles.desc}>{desc}</div>
                    <BrowserOnly>
                      {() => {
                        const ua = navigator.userAgent;

                        const ipad = ua.match(/(iPad).*OS\s([\d_]+)/),

                          isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),

                          isAndroid = ua.match(/(Android)\s+([\d.]+)/);

                        if (isIphone || isAndroid) {

                        } else {
                          return <div className={styles.qrcode}>
                            <img src={qrcode} />
                          </div>
                        }
                      }}
                    </BrowserOnly>
                  </a>
                  {github ? <a href={github} target="_blank"><div className={styles.github}></div></a> : null}
                </div>
              </div>
            </div>
          })}
        </div>
      </div>

    </section>
  );
}
