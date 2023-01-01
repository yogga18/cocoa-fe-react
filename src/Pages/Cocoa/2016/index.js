import React from 'react';
import Kab2016 from './Kab2016';
import Prov2016 from './Prov2016';
import Story16 from './Story16';
import map_2016 from '../../../assets/img/2015_map.png';

const index = () => {
  return (
    <div>
      <h1 className='text-center'>
        Keadaan Komoditas Kakao di Indonesia pada tahun 2016
      </h1>
      <div className='d-flex justify-content-center align-baseline py-0 my-0'>
        <img src={map_2016} alt='Map 2016' />
      </div>

      <div className='d-flex justify-content-center align-baseline mb-5'>
        <a
          href='https://2016-map.vercel.app/'
          target='_blank'
          rel='noreferrer noopener'
        >
          Lihat Peta Sebaran
        </a>
      </div>

      <Prov2016 />
      <Kab2016 />
      <Story16 />
    </div>
  );
};

export default index;
