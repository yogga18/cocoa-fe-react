import React from 'react';
import Kab2019 from './Kab2019';
import Prov2019 from './Prov2019';
import Story19 from './Story19';

const index = () => {
  return (
    <div>
      <h1>Cococa 2019</h1>
      <h1>Map on Top</h1>

      <Prov2019 />
      <Kab2019 />
      <Story19 />
    </div>
  );
};

export default index;
