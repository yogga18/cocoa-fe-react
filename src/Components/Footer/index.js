import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import './Footer.scss';

const index = () => {
  return (
    <Fragment>
      <div className='footer'>
        <Container fluid>
          <p className='text-center'>
            Made with <span>💖</span> by <b>Yogga Aditya Candra</b>
          </p>
          <p className='text-center'>
            <b>Thanks to :</b>
          </p>
          <div className='footer-thanks-wrapper'>
            <p>
              Kementrian Pertanian ( <b>Kementan</b> )
            </p>
            <p>
              Badan Informasi Geospasial ( <b>BIG</b> )
            </p>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default index;
