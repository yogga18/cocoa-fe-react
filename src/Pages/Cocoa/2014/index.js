import React, { Fragment } from 'react';
import Kab2014 from './Kab2014';
import map_2014 from '../../../assets/gif/map_2014.png';
import Story14 from './Story14';
import Prov2014 from './Prov2014';
import GoBack from '../../../Components/Button/GoBack';

const index = () => {
  return (
    <Fragment>
      <GoBack />
      <h1 className='text-center'>
        Keadaan Komoditas Kakao di Indonesia pada tahun 2014
      </h1>
      <div className='d-flex justify-content-center align-baseline py-0 my-0'>
        <img src={map_2014} alt='map_2014' />
      </div>

      <div className='d-flex justify-content-center align-baseline mb-5'>
        <a
          href='https://2014-map.vercel.app/'
          target='_blank'
          rel='noreferrer noopener'
        >
          Lihat Peta Sebaran
        </a>
      </div>

      <Prov2014 />
      <Kab2014 />
      <Story14 />
    </Fragment>
  );
};

export default index;
