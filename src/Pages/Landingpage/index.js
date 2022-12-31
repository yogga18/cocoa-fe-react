import React from 'react';
import Hero from '../../Components/Hero';
// import About from '../../Components/About';
import Footer from '../../Components/Footer';
import { MetaTags } from 'react-meta-tags';
import { Alert } from 'reactstrap';

const index = () => {
  return (
    <div>
      <MetaTags>CCI - Landing Page</MetaTags>
      <Alert color='danger' className='text-center my-5'>
        🚧 <b>This website is under construction, we will be back soon</b> 🚧
      </Alert>
      <Hero />
      <Footer />
    </div>
  );
};

export default index;
