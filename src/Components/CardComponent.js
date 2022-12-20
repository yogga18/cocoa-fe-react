import React, { Fragment } from 'react';

const Card = (props) => {
  return (
    <Fragment>
      <div className='carad'>
        <div className='card-body'>
          <h5 className='card-title'>{props.user.name}</h5>
          <h6 className='card-subtitle mb-2 text-muted'>
            {props.user.company.name}
          </h6>
          <p className='card-text'>{props.user.company.catchPharse}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
