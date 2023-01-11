import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import ReactVertical from '../../Components/ReaactVertical';
import './Cocoa.scss';
import Footer from '../../Components/Footer';

const index = () => {
  return (
    <Fragment>
      <Container fluid className='mt-3'>
        <h1 className='text-center'>Komoditas Kakao dari tahun ke tahun</h1>
      </Container>
      <ReactVertical />
      <Footer />
    </Fragment>
  );
};

export default index;
