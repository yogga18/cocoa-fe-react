import React from 'react';
import PropTypes from 'prop-types';
import 'boxicons';

const Icons = ({ nameIcon, animationIcon }) => {
  return (
    <div className='mt-2 mx-2'>
      <box-icon
        name={`${nameIcon}`}
        type='logo'
        animation={`${animationIcon}`}
        size='lg'
        color='white'
      ></box-icon>
    </div>
  );
};

Icons.propsTypes = {
  nameIcon: PropTypes.string,
  animationIcon: PropTypes.string,
};

export default Icons;
