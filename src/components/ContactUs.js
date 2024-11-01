import React, { useEffect, useState } from 'react';
import './ContactUs.css';
import qrcode from "../../static/img/qrcode.jpg";
import Translate from "@docusaurus/Translate";

const FloatingDiv = () => {
  // const [show, setShow] = useState(true)
  const [anim, setAnim] = useState(false)
  useEffect(() => {
    // 这里可以做一些初始化的操作
    setTimeout(() => {
      setAnim(true)
    }, 1000)
  }, []);
  // if (!show) return null
  console.log(anim)
  return (
    <div className={`floating-div  ${anim ? 'normal' : ''}`} onClick={() => {
      setAnim(true)
    }}>
      <img src={qrcode} style={{ width: 100, height: 100 }} />

      {/* 可以在这里加入你想展示的内容 */}
      <Translate id="qrcode">If you have any questions or need our help with development, please scan the code to contact us.</Translate>
      <div className="contact-close-btn" onClick={(e) => {
        e.preventDefault()
        e.stopPropagation()
        setAnim(false)
      }}>X</div>
    </div>
  );
};

export default FloatingDiv;