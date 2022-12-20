import React, { Fragment, useEffect } from 'react';
import Card from './CardComponent';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers } from '../redux/actions/users';

const UsersComponent = () => {
  // Additional Variables
  const dispatch = useDispatch();
  const { isLoading, isFetching, users } = useSelector((state) => state.users);

  // Fuctions

  // Lifecycle
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  // Logging
  console.log('UsersComponent', users);

  return (
    <Fragment>
      <div className='mt-5'>
        {isLoading && <p>Loading......</p>}
        {!isFetching && users.length === 0 && <p>People Dosen't Exsist</p>}
        {!isFetching &&
          users.length > 0 &&
          users.map((user) => {
            return <Card user={user} key={user.id} />;
          })}
      </div>
    </Fragment>
  );
};

export default UsersComponent;
