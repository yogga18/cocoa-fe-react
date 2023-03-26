import React, { Fragment } from 'react';
import { Col, Row } from 'reactstrap';
import './Datasains.scss';
import dataSains from '../../assets/img/datasains.jpg';

const Datasains = () => {
  return (
    <Fragment>
      <Row className='my-5 datasainns-wrapper'>
        <Col md={12} className='mb-5'>
          <h1 className='text-center mb-1'>Data Science</h1>
          <hr className='line text-center'></hr>
        </Col>
        <Col md={6}>
          <img src={dataSains} alt='map_2014' className='image-datasains' />
        </Col>
        <Col
          md={6}
          className='d-flex justify-content-center align-items-center align-content-center'
        >
          <p className='text-center px-5'>
            " Data science adalah bidang yang menggunakan matematika,
            statistika, dan komputasi untuk menganalisis data dan menghasilkan
            wawasan bisnis atau ilmiah, Tujuannya adalah untuk membantu
            pengambilan keputusan dan menjawab pertanyaan yang rumit tertkait
            dengan fenomena yang sedang terjadi."
          </p>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Datasains;
