import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import './Cocoa.scss';

const index = () => {
  return (
    <Fragment>
      <Container fluid className='cocoa-wrapper'>
        <Row className='cocoa-content-wrapper'>
          <Col md='12'>
            <div className='d-flex flex-column gap-3'>
              <Link to='/cocoa-2014'>2014</Link>
              <Link to='/cocoa-2015'>2015</Link>
              <Link to='/cocoa-2016'>2016</Link>
              <Link to='/cocoa-2017'>2017</Link>
              <Link to='/cocoa-2018'>2018</Link>
              <Link to='/cocoa-2019'>2019</Link>
              <Link to='/cocoa-2020'>2020</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default index;
