import React from 'react';
import Kab2020 from './Kab2019';
import Prov2020 from './Prov2019';
import Story20 from './Story20';
import map_2020 from '../../../assets/img/2020_map.png';

const index = () => {
  return (
    <div>
      <h1 className='text-center'>
        Keadaan Komoditas Kakao di Indonesia pada tahun 2020
      </h1>
      <div className='d-flex justify-content-center align-baseline py-0 my-0'>
        <img src={map_2020} alt='Peta 2020' />
      </div>

      <div className='d-flex justify-content-center align-baseline mb-5'>
        <a
          href='https://2020-map.netlify.app/'
          target='_blank'
          rel='noreferrer noopener'
        >
          Lihat Peta Sebaran
        </a>
      </div>

      <Prov2020 />
      <Kab2020 />
      <Story20 />
    </div>
  );
};

export default index;
