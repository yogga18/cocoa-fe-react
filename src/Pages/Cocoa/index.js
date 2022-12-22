import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

const index = () => {
  return (
    <div>
      <p className='text-center'>
        <b>Cocoa commodity in Indonesia from 2014 to 2020</b>
      </p>
      <Container fluid>
        <div className='d-flex flex-column gap-3'>
          <Link to='/cocoa-2014'>2014</Link>
          <Link to='/cocoa-2015'>2015</Link>
          <Link to='/cocoa-2016'>2016</Link>
          <Link to='/cocoa-2017'>2017</Link>
          <Link to='/cocoa-2018'>2018</Link>
          <Link to='/cocoa-2019'>2019</Link>
          <Link to='/cocoa-2020'>2020</Link>
        </div>
      </Container>
    </div>
  );
};

export default index;
