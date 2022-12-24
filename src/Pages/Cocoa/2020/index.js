import React from 'react';
import Kab2020 from './Kab2019';
import Prov2020 from './Prov2019';
import Story20 from './Story20';

const index = () => {
  return (
    <div>
      <h1>Cococa 2020</h1>
      <h1>Map on Top</h1>

      <Prov2020 />
      <Kab2020 />
      <Story20 />
    </div>
  );
};

export default index;
