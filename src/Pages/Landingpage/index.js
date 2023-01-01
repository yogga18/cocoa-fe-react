import React from 'react';
import { MetaTags } from 'react-meta-tags';
import Footer from '../../Components/Footer';
import Hero from '../../Components/Hero';
import About from '../../Components/About';
import Faq from '../../Components/Faq/Faq.js';

const index = () => {
  return (
    <div
      style={{
        overflowX: 'hidden',
        overflowY: 'hidden',
      }}
    >
      <MetaTags>CCI - Landing Page</MetaTags>
      <Hero />
      <About />
      <Faq />
      <Footer />
    </div>
  );
};

export default index;
