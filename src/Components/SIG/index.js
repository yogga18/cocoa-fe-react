import React, { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import imgSig from '../../assets/img/sig.png';
import './Sig.scss';

const Sig = () => {
  return (
    <Fragment>
      <Row className='my-5 sig-wrapper'>
        <Col md={12}>
          <h1 className='text-center mb-1'>Geographic Information System</h1>
          <hr className='line text-center'></hr>
        </Col>
        <Col
          md={6}
          className='sig-sideA d-flex justify-content-center align-items-center align-content-center'
        >
          <p className='text-center px-5'>
            " Sistem informasi geografis (GIS) dibangun untuk dapat melakukan
            analisis, mengolah, menyimpan dan mengintegrasikan data spasial
            (geografis) dan data non-spasial (kualitatif) (Senocak & Guner
            Goren, 2022), Output dari pengolahan data tersebut selanjutnya akan
            ditransformasikan kepada layer - layer peta guna mendapatkan
            infomasi baru yang berguna untuk mengambil keputusan terkait
            keruangan dan fenomena yang sedang terjadi pada suatu wilayah. "
          </p>
        </Col>
        <Col
          md={6}
          className='sif-sideB d-flex justify-content-end align-content-end'
        >
          <img
            src={imgSig}
            alt='map_2014'
            className='image-sig'
            width={750}
            height={550}
          />
        </Col>
      </Row>
    </Fragment>
  );
};

export default Sig;
