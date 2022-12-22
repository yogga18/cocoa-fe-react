import React from 'react';
// import Hero from '../../Components/Hero';
// import About from '../../Components/About';
// import Footer from '../../Components/Footer';

// GIF
import danyDance from '../../assets/gif/dany-daniela.gif';
import danyExcited from '../../assets/gif/dany_excited-the-warning.gif';

const index = () => {
  return (
    <div>
      <h1 className='text-center'>
        This website is under construction, we will be back soon
      </h1>

      <div className='d-flex justify-content-center align-baseline gap-3'>
        <img src={danyDance} alt='fancy dance' />
        <img src={danyExcited} alt='Excited' />
      </div>

      {/* <Hero />
      <About />
      <Footer /> */}
    </div>
  );
};

export default index;
