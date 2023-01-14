import React from 'react';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const GoBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/cocoa');
  };

  return (
    <div className='dflex justify-content-around justify-content-start mb-5 mt-3 mx-3'>
      <Button size='md' color='primary' onClick={goBack}>
        Go Back
      </Button>
    </div>
  );
};

export default GoBack;
