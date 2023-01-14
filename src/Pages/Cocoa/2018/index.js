import React from 'react';
import Kab2018 from './Kab2018';
import Prov2018 from './Prov2018';
import Story18 from './Story18';
import map_2018 from '../../../assets/img/2015_map.png';
import { Fragment } from 'react';
import GoBack from '../../../Components/Button/GoBack';

const index = () => {
  return (
    <Fragment>
      <GoBack />
      <h1 className='text-center'>
        Keadaan Komoditas Kakao di Indonesia pada tahun 2018
      </h1>
      <div className='d-flex justify-content-center align-baseline py-0 my-0'>
        <img src={map_2018} alt='Peta 2018' />
      </div>

      <div className='d-flex justify-content-center align-baseline mb-5'>
        <a
          href='https://2018-map.netlify.app/'
          target='_blank'
          rel='noreferrer noopener'
        >
          Lihat Peta Sebaran
        </a>
      </div>

      <Prov2018 />
      <Kab2018 />
      <Story18 />
    </Fragment>
  );
};

export default index;
