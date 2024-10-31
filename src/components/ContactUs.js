import React from 'react';
import './ContactUs.css';
import qrcode from "../../static/img/qrcode.jpg";
import Translate from "@docusaurus/Translate";

const FloatingDiv = () => {
  return (
    <div className="floating-div">
      <img src={qrcode} style={{ width: 100, height: 100 }} />

      {/* 可以在这里加入你想展示的内容 */}
      <Translate id="qrcode">If you have any questions or need our help with development, please scan the code to contact us.</Translate>
    </div>
  );
};

export default FloatingDiv;