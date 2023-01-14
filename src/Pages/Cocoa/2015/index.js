import React from 'react';
import Kab2015 from './Kab2015';
import Prov2015 from './Prov2015';
import Story15 from './Story15';
import map_2015 from '../../../assets/img/2015_map.png';
import { Fragment } from 'react';
import GoBack from '../../../Components/Button/GoBack';

const index = () => {
  return (
    <Fragment>
      <GoBack />
      <h1 className='text-center'>
        Keadaan Komoditas Kakao di Indonesia pada tahun 2015
      </h1>
      <div className='d-flex justify-content-center align-baseline py-0 my-0'>
        <img src={map_2015} alt='map_2015' />
      </div>

      <div className='d-flex justify-content-center align-baseline mb-5'>
        <a
          href='https://2015-map.netlify.app'
          target='_blank'
          rel='noreferrer noopener'
        >
          Lihat Peta Sebaran
        </a>
      </div>

      <Prov2015 />
      <Kab2015 />
      <Story15 />
    </Fragment>
  );
};

export default index;
