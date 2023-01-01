import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import './About.scss';

const index = () => {
  return (
    <Fragment>
      <div className='about-wrapper bg-danger'>
        <Container fluid>
          <h1 className='text-center'>About</h1>
          <Row>
            <Col md='6' className='bg-success'>
              Side A
            </Col>
            <Col md='6' className='bg-primary'>
              Side B
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};

export default index;
