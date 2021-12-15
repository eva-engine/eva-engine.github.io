import React from 'react';
import clsx from 'clsx';
import styles from './Users.modules.css';

import Translate, {translate} from '@docusaurus/Translate';


const userList = [{
  image: require('../../static/img/users/tb.png').default
},
{
  image: require('../../static/img/users/tianmao.png').default
},
{
  image: require('../../static/img/users/zhifubao.png').default
},
{
  image: require('../../static/img/users/kaola.png').default
},
{
  image: require('../../static/img/users/cainiao.png').default
},
{
  image: require('../../static/img/users/youku.png').default
},
{
  image: require('../../static/img/users/hema.png').default
},
// {
//   image: require('../../static/img/users/meituan.png').default
// },
{
  image: require('../../static/img/users/yintai.png').default
},
{
  image: require('../../static/img/users/fz.png').default
},
{
  image: require('../../static/img/users/AE.png').default
},
{
  image: require('../../static/img/users/lazada.png').default
}]

export default function Users() {
  return (
    <section className={styles.users}>
      <div className={styles.title}><Translate id="users">Users</Translate></div>
      <div className="container">
        <div className={styles.list}>
          {userList.map(({ image }, i) => {
            return <div className={styles.imgBox} key={i}>
              <img className={styles.img} src={image} />
            </div>
          })}
        </div>
      </div>
    </section>
  );
}
