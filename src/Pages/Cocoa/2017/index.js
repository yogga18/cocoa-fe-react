import React from 'react';
import Kab2017 from './Kab2017';
import Prov2017 from './Prov2017';
import Story17 from './Story17';
import map_2017 from '../../../assets/img/2015_map.png';

const index = () => {
  return (
    <div>
      <h1 className='text-center'>
        Keadaan Komoditas Kakao di Indonesia pada tahun 2017
      </h1>
      <div className='d-flex justify-content-center align-baseline py-0 my-0'>
        <img src={map_2017} alt='map_2017' />
      </div>

      <div className='d-flex justify-content-center align-baseline mb-5'>
        <a
          href='https://2017-map.netlify.app'
          target='_blank'
          rel='noreferrer noopener'
        >
          Lihat Peta Sebaran
        </a>
      </div>

      <Prov2017 />
      <Kab2017 />
      <Story17 />
    </div>
  );
};

export default index;
