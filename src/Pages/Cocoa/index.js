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
      {
        label: 'Perkebunan Besar Negara',
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
            <h3 className='text-center'>Story</h3>
            <p className='text-center'>
              Dari grafik diatas berikut adalah Variable yang memiliki korelasi
              dan sangat berpengaruh terhadap Perkembangan Komoditas Kakao di
              Indonesia
            </p>
          </Col>
        </Row>
        <Row>
          <Col md='6'>
            <h3 className='text-center'>Luas Areal</h3>
            <div className='mt-5'>
              <p>
                Pada setiap tahun Luas Areal Kakao di Indonesia mengalami
                penurunan yang cukup signifikan, kenaikan hanya terjadi sekali
                pada tahun 2014 - 2015 sebesar <b>11.489 (Ha)</b> sedangkan
                untuk penurunan terbesar terjadi pada tahun 2016 - 2017 sebesar{' '}
                <b>62.369 (Ha)</b> sungguh sangat ironis penurunan lebih besar
                dari pada kenaikan, penurunan ini disebabkan beberapa hal
                seperti alih fungsi lahan kakao untuk ditanam komoditas lain hal
                ini akan berimbas kepada{' '}
                <span className='badge bg-primary font-size-12'>Produksi</span>.
              </p>
            </div>
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
            <h3 className='text-center'>Produksi</h3>
            <div className='mt-5'>
              <p>
                Dapat dilihat pada grafik <b>Perkembangan Produksi Kakao</b>{' '}
                pada setiap tahunnya mengalami naik dan turun{' '}
                <i>( Fluktuatif )</i> hal ini disebabkan oleh Luas Areal Kakao
                dan juga beberapa faktor yang mempengaruhinya seperti Tanaman{' '}
                <span className='badge bg-warning font-size-12'>
                  Belum Matang (TBM)
                </span>
                ,{' '}
                <span className='badge bg-success font-size-12'>
                  Tanaman Matang (TM)
                </span>{' '}
                dan{' '}
                <span className='badge bg-danger font-size-12'>
                  Tanaman Rusak (TR)
                </span>
                .
              </p>
              <p>
                Jika ditelisik lebih jauh setiap produksi mengalami penurunan{' '}
                <span className='badge bg-danger font-size-12'>
                  Tanaman Rusak (TR)
                </span>{' '}
                atau{' '}
                <span className='badge bg-warning font-size-12'>
                  Belum Matang (TBM)
                </span>{' '}
                akan mengalami kenaikan sehingga produktivitas pada suatu lahan
                akan menglami penurunan dan begitupun sebaliknya jika produksi
                mengalami kenaikan ( tahun 2018 ) maka{' '}
                <span className='badge bg-danger font-size-12'>
                  Tanaman Rusak (TR)
                </span>{' '}
                dan{' '}
                <span className='badge bg-warning font-size-12'>
                  Belum Matang (TBM)
                </span>{' '}
                haruslah lebih rendah dari pada{' '}
                <span className='badge bg-success font-size-12'>
                  Tanaman Matang (TM).
                </span>
              </p>
            </div>
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
          <Col md='6'>
            <p className='text-center mt-3'>Keadaan Tanaman</p>
            <div>
              <p>
                <b>Konsep dan Definisi :</b>
              </p>
              <ul>
                <li>
                  <p>
                    <span className='badge bg-warning font-size-12'>
                      Tanaman Belum Menghasilkan (TBM)
                    </span>{' '}
                    adalah tanaman yang sampai pada saat pengamatan belum pernah
                    memberikan hasil, karena masih muda atau tanaman sudah cukup
                    umur tetapi belum dapat menghasilkan karena tidak cocok
                    iklim, ketinggian tempat, kondisi tanah dan sebagainya.
                  </p>
                </li>
                <li>
                  <p>
                    <span className='badge bg-success font-size-12'>
                      Tanaman Menghasilkan (TM)
                    </span>{' '}
                    adalah tanaman yang sebelum saat pengamatan pernah
                    memberikan hasil dan masih akan memberikan hasil, meskipun
                    pada saat pengamatan sedang tidak menghasilkan.
                  </p>
                </li>
                <li>
                  <p>
                    <span className='badge bg-danger font-size-12'>
                      Tanaman Tidak Menghasilkan/Tua/Rusak (TR)
                    </span>{' '}
                    adalah tanaman yang sampai dengan saat pengamatan tidak
                    pernah memberikan hasil atau tidak akan memberikan hasil
                    lagi disebabkan tua, rusak atau mandul
                  </p>
                </li>
              </ul>
            </div>
          </Col>
          <Col md='12'>
            <p>
              Tanaman kakao dapat mulai berbuah setelah 3-5 tahun setelah tanam.
              Namun, tanaman kakao biasanya baru mencapai fase produktivitas
              maksimal setelah 5-7 tahun setelah tanam. Fase produktivitas ini
              biasanya berlangsung sekitar 20-25 tahun, selama masa ini tanaman
              akan menghasilkan buah-buahan yang cukup baik. Namun, setelah masa
              ini tanaman kakao akan mulai mengalami penurunan produktivitas dan
              akhirnya masuk ke dalam fase TM (tanaman tidak menghasilkan / tua
              / rusak) yang dapat berkisar antara 30-50 tahun setelah tanam.
              Namun perlu diingat perawatan yang baik sangat mempengarhui
              kondisi tanaman itu sendiri seperti terhindar dari hama dan
              penyakit bahkan memaksimalkan produktivitas saat fase produktiv
              (TM).
            </p>
          </Col>
        </Row>
        <Row>
          <Col md='6'>
            <h3 className='text-center mt-3'>Kepemilikan Lahan</h3>
            <div>
              <p>
                Di Indonesia kepemilikan dari komoditas Kakao didominasi oleh
                perkebunan rakyat yang artinya pada sektor perkebunan kakao
                Perkebunan Rakyat (PR) sangat berdampak penting kepada komoditas
                ini, sehingga <i>stakeholder</i> terkait dapat memfokuskan
                kepada daerah dengan kepelimikan perkebunan rakyat untuk
                diberikan penyuluhan dan bantuan teknis seperti.
              </p>
              <ul>
                <li>
                  <p>
                    Penyediaan benih berkualitas: Pemerintah dapat memberikan
                    dukungan dalam bentuk penyediaan benih berkualitas yang
                    dapat digunakan oleh petani kakao.
                  </p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>
                    Penyuluhan dan pelatihan: Pemerintah dapat memberikan
                    penyuluhan dan pelatihan tentang teknologi terbaru dalam
                    perawatan tanaman kakao, manajemen kebun, dan pemasaran
                    produk kakao
                  </p>
                </li>
              </ul>
              <ul>
                <li>
                  <p>
                    Dukungan dalam pemasaran produk: Pemerintah dapat memberikan
                    dukungan dalam bentuk pemasaran produk kakao yang dilakukan
                    oleh petani kakao, seperti membantu mereka untuk memasuki
                    pasar ekspor dan meningkatkan harga jual produk kakao
                  </p>
                </li>
              </ul>
              <p>
                Masalah yang dihadapi dilapangan mungkin akan sangat berat dan
                kompleks karena pemerintah selaku <i>stakeholder</i> terkait
                berhadapan dengan para petani rakyat yang mana memiliki
                pemikiran masing - masing hal ini mungkin akan menjadi tantangan
                bagi para penyuluh dan pelaksana program di lapangan
              </p>
            </div>
          </Col>
          <Col md='6'>
            <LineChart
              titleBar={'Perkembangan kepemilikan lahan'}
              chartData={lineChartPerkebunanRakyat}
            />
          </Col>
        </Row>
      </Container>
      <Container fluid className='mt-5'>
        <h3 className='text-center'>Year by Year</h3>
        <p className='text-center'>Komoditas Kakao dari tahun ke tahun</p>
      </Container>
      <ReactVertical />
      <Footer />
    </Fragment>
  );
};

export default CocoaInd;
