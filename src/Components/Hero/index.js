import React, { Fragment } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import './hero.scss';

const index = () => {
  return (
    <Fragment>
      <Container fluid className='wave'>
        <Row className='hero-content-wrapper'>
          <Col md='12'>
            <div className='hero'>
              <div className='hero__content'>
                <h1 className='hero__content--title text-center'>
                  <span className='hero__content--title--span'>
                    Cocoa Comodity in Indonesia
                  </span>
                </h1>
                <p className='hero__content--text text-center'>
                  Conditions of cocoa commodities in Indonesia from 2014 to 2020
                </p>
                <div className='d-flex justify-content-center align-items-center'>
                  <Button color='primary' className='hero__content--btn'>
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default index;
