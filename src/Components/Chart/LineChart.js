import React from 'react';
import { Fragment } from 'react';
import { Line } from 'react-chartjs-2';
import alloverData from '../../Data/Indonesia/allover';
import { Chart as ChartJS } from 'chart.js/auto';

const LineChart = ({ chartData, titleBar }) => {
  console.log(alloverData);

  return (
    <Fragment>
      <div className='text-center mb-3'>{titleBar}</div>
      <Line data={chartData} />
    </Fragment>
  );
};

export default LineChart;
