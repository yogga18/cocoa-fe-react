import React, { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import './About.scss';
import {
  FcMultipleSmartphones,
  FcApproval,
  FcAdvertising,
  FcFlashOn,
} from 'react-icons/fc';

const index = () => {
  return (
    <Fragment>
      <Row className='wrapper-about m-2'>
        <Col md='12' className='mb-5'>
          <h1 className='text-center mb-1'>About Us</h1>
          <hr className='line text-center'></hr>
        </Col>
        <Col md='12' className='mb-5'>
          <div className='wrap-item'>
            <FcMultipleSmartphones size={70} />
            <h3 className='text-center'>Mudah Diakses</h3>
          </div>
        </Col>
        <Col md='6'>
          <div className='wrap-item'>
            <FcApproval size={70} />
            <h3 className='text-center'>Data kredible</h3>
          </div>
        </Col>
        <Col md='6'>
          <div className='wrap-item'>
            <FcAdvertising size={70} />
            <h3 className='text-center'>Informasi Mudah Dipahami</h3>
          </div>
        </Col>
        <Col md='12' className='mt-5'>
          <div className='wrap-item'>
            <FcFlashOn size={70} />
            <h3 className='text-center'>Cepat & Mudah</h3>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};

export default index;
