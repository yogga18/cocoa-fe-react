import React, { Fragment, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import ReactVertical from '../../Components/ReaactVertical';
import './Cocoa.scss';
import Footer from '../../Components/Footer';
import BarChart from '../../Components/Chart/BarChart';
import dataIndonesia from '../../Data/Indonesia/allover';
import LineChart from '../../Components/Chart/LineChart';

const CocoaInd = () => {
  const [barChart] = useState({
    labels: dataIndonesia.map((item) => item.Year),
    datasets: [
      {
        label: 'Luas_Areal',
        data: dataIndonesia.map((item) => item.Luas_Areal),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Produktivitas',
        data: dataIndonesia.map((item) => item.Produktiv),
        backgroundColor: 'rgba(255, 206, 86, 0.2)',
        borderColor: 'rgba(255, 206, 86, 1)',
        borderWidth: 1,
      },
      {
        label: 'Produksi',
        data: dataIndonesia.map((item) => item.Produksi),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Jumlah Petani',
        data: dataIndonesia.map((item) => item.Jumlah_Petani),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Perkebunan Rakyat',
        data: dataIndonesia.map((item) => item.PR),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
      {
        label: 'Perkebunan Negara',
        data: dataIndonesia.map((item) => item.PBN),
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 1,
      },
      {
        label: 'Perkebunan Swasta',
        data: dataIndonesia.map((item) => item.PS),
        backgroundColor: '#2196f3',
        borderColor: '#2280ff',
        borderWidth: 1,
      },
      {
        label: 'Tanaman Belum Matang',
        data: dataIndonesia.map((item) => item.TBM),
        backgroundColor: '#f9bf40',
        borderColor: '#ffdc41',
        borderWidth: 1,
      },
      {
        label: 'Tanaman Matang',
        data: dataIndonesia.map((item) => item.TM),
        backgroundColor: '#70f3ac',
        borderColor: '#4aa78e',
        borderWidth: 1,
      },
      {
        label: 'Tanaman Rusak',
        data: dataIndonesia.map((item) => item.TR),
        backgroundColor: '#e91e63',
        borderColor: '#ff204e',
        borderWidth: 1,
      },
    ],
  });

  const [lineChartLuasAreal] = useState({
    labels: dataIndonesia.map((item) => item.Year),
    datasets: [
      {
        label: 'Luas_Areal',
        data: dataIndonesia.map((item) => item.Luas_Areal),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  });

  const [lineChartProduksi] = useState({
    labels: dataIndonesia.map((item) => item.Year),
    datasets: [
      {
        label: 'Produksi',
        data: dataIndonesia.map((item) => item.Produksi),
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  });

  const [lineChartPerkebunanRakyat] = useState({
    labels: dataIndonesia.map((item) => item.Year),
    datasets: [
      {
        label: 'Perkebunan Rakyat',
        data: dataIndonesia.map((item) => item.PR),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  });

  const [lineChartKeadaanTanaman] = useState({
    labels: dataIndonesia.map((item) => item.Year),
    datasets: [
      {
        label: 'Tanaman Belum Matang',
        data: dataIndonesia.map((item) => item.TBM),
        backgroundColor: '#f9bf40',
        borderColor: '#ffdc41',
        borderWidth: 1,
      },
      {
        label: 'Tanaman Matang',
        data: dataIndonesia.map((item) => item.TM),
        backgroundColor: '#70f3ac',
        borderColor: '#4aa78e',
        borderWidth: 1,
      },
      {
        label: 'Tanaman Rusak',
        data: dataIndonesia.map((item) => item.TR),
        backgroundColor: '#e91e63',
        borderColor: '#ff204e',
        borderWidth: 1,
      },
    ],
  });

  return (
    <Fragment>
      <Container fluid className='mt-5'>
        <Row>
          <Col md='12'>
            <BarChart
              titleBar={'Perkembangan Komoditas Kakao'}
              chartData={barChart}
            />
          </Col>
        </Row>
        <Row className='my-5'>
          <Col md='12'>
            <h3 className='text-center text-danger'>
              Story About Kakao in Indonesia
            </h3>
          </Col>
        </Row>
        <Row>
          <Col md='6'>
            <p className='text-center'>Luas Areal</p>
          </Col>
          <Col md='6'>
            <LineChart
              titleBar={'Perkembangan Luas Areal Kakao'}
              chartData={lineChartLuasAreal}
            />
          </Col>
        </Row>
        <Row className='my-5'>
          <Col md='6'>
            <LineChart
              titleBar={'Perkembangan Produksi Kakao'}
              chartData={lineChartProduksi}
            />
          </Col>
          <Col md='6'>
            <p className='text-center'>Produksi</p>
          </Col>
        </Row>
        <Row>
          <Col md='6'>
            <p className='text-center'>Perkebunan Rakyat</p>
          </Col>
          <Col md='6'>
            <LineChart
              titleBar={
                'Perkembangan Perkebunan kakao dengan kepemilikan Rakyat'
              }
              chartData={lineChartPerkebunanRakyat}
            />
          </Col>
        </Row>
        <Row className='my-5'>
          <Col md='6'>
            <LineChart
              titleBar={
                'Perkembangan Perkebunan kakao dengan kepemilikan Rakyat'
              }
              chartData={lineChartKeadaanTanaman}
            />
          </Col>
          <Col md='6'>Keadaan Tanaman</Col>
        </Row>
      </Container>
      <Container fluid className='mt-3'>
        <h1 className='text-center'>Komoditas Kakao dari tahun ke tahun</h1>
      </Container>
      <ReactVertical />
      <Footer />
    </Fragment>
  );
};

export default CocoaInd;
