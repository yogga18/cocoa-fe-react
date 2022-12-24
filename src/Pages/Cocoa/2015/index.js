import React from 'react';
import Kab2015 from './Kab2015';
import Story15 from './Story15';

const index = () => {
  return (
    <div>
      <h1 className='text-center'>
        Keadaan Komoditas Kakao di Indonesia pada tahun 2015
      </h1>
      <h1>Map on Top</h1>
      <Kab2015 />
      <Story15 />
    </div>
  );
};

export default index;
