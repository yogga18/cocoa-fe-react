import React from 'react';
import Kab2019 from './Kab2019';
import Prov2019 from './Prov2019';
import Story19 from './Story19';
import map_2019 from '../../../assets/img/2019_map.png';
import { Fragment } from 'react';
import GoBack from '../../../Components/Button/GoBack';

const index = () => {
  return (
    <Fragment>
      <GoBack />
      <h1 className='text-center'>
        Keadaan Komoditas Kakao di Indonesia pada tahun 2019
      </h1>
      <div className='d-flex justify-content-center align-baseline py-0 my-0'>
        <img src={map_2019} alt='Peta 2019' />
      </div>

      <div className='d-flex justify-content-center align-baseline mb-5'>
        <a
          href='https://2019-map.netlify.app/'
          target='_blank'
          rel='noreferrer noopener'
        >
          Lihat Peta Sebaran
        </a>
      </div>

      <Prov2019 />
      <Kab2019 />
      <Story19 />
    </Fragment>
  );
};

export default index;
