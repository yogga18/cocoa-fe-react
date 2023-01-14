import React from 'react';
import { Fragment } from 'react';
import { Bar } from 'react-chartjs-2';
import alloverData from '../../Data/Indonesia/allover';
import { Chart as ChartJS } from 'chart.js/auto';

const BarChart = ({ chartData, titleBar }) => {
  console.log(alloverData);

  return (
    <Fragment>
      <div className='text-center my-3'>{titleBar}</div>
      <Bar data={chartData} />
    </Fragment>
  );
};

export default BarChart;
