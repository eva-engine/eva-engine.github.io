// src/theme/DocPage/index.js
import React from 'react';
import DocPage from '@theme-original/DocPage';
import ContactUs from '../../components/ContactUs';

export default function DocPageWrapper(props) {
  return (
    <>
      <DocPage {...props} />
      <ContactUs />
    </>
  );
}
