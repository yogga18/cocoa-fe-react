import React from 'react';
import { Fragment } from 'react';
import dany_404 from '../../assets/gif/404.gif';
import './NotFound.scss';

const index = () => {
  return (
    <Fragment>
      <div className='d-flex justify-content-center align-items-center'>
        <img src={dany_404} alt='404' clalssName='not-found' />
      </div>
      <h5 className='text-center my-3'>Ouch page Not Found......</h5>
    </Fragment>
  );
};

export default index;
