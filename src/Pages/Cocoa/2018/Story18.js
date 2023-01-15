import React, { Fragment } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import elbow_18 from '../../../assets/img/2018/Elbow_2018.png';
import LineChart from '../../../Components/Chart/LineChart';
import dataIndonesia from '../../../Data/Indonesia/allover';

const Story18 = () => {
  const limitDataByYear2014to2019 = dataIndonesia.filter(
    (item) => item.Year >= 2014 && item.Year <= 2018
  );

  const [lineChart] = useState({
    labels: limitDataByYear2014to2019.map((item) => item.Year),
    datasets: [
      {
        label: 'Luas_Areal',
        data: dataIndonesia.map((item) => item.Luas_Areal),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
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
        label: 'Perkebunan Rakyat',
        data: dataIndonesia.map((item) => item.PR),
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
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

  return (
    <Fragment>
      <Container fluid className='my-5'>
        <Container fluid>
          <Row className='mt-3'>
            <h5 className='text-center'>Story</h5>
            <Col md='12' className='pt-5'>
              <p>
                Dari visualisasi diatas dapat dilihat bahwa provinsi yang
                memiliki{' '}
                <b>
                  Luas Areal, Areal Perkebunan Rakyat, Produksi, Tanaman_Mature
                </b>{' '}
                yang tinggi akan masuk kedalam{' '}
                <b className='text-success'>cluster 1</b> sedangkan diluar
                kriteria tersebut akan masuk kedalam{' '}
                <b className='text-warning'>cluster 0.</b>
              </p>
            </Col>
            <Col md='6' className='mb-5'>
              <div className='pt-5'>
                <p>
                  Untuk Cluster dengan jumlah 2 <i>( K = 2 )</i> adalah jumlah
                  terbaik dengan nilai <i>Sum of Square Error ( SSE )</i>{' '}
                  <b>7.994395020544419</b> dan dengan Cluster berjumlah 2
                  mendapatkan nilai <i>Davies-Bouldin index ( DBI )</i> sebesar{' '}
                  <b>0.592735495265274</b>
                </p>
                <p>
                  Yang artinya Cluster yang terbentuk dengan jumlah 2{' '}
                  <i>( K = 2 )</i> adalah Cluster yang optimal dengan
                  pengelompokan antar Cluster dipisahkan dengan jelas karena
                  nilai <i>Davies-Bouldin index (DBI)</i> semakin{' '}
                  <b>mendekati 0 ( Nol )</b> semakin baik.
                </p>
              </div>
            </Col>
            <Col md='6' className='mb-5'>
              <div className='d-flex justify-content-center align-baseline'>
                <img
                  src={elbow_18}
                  width={600}
                  height={300}
                  alt='Hasil Clustering'
                />
              </div>
            </Col>
            <p>
              Jika ditelisik lebih jauh Provinsi yang masuk ke dalam{' '}
              <b className='text-success'>Cluster 1</b> adalah Provinsi yang
              memiliki kriteria Luas_Areal yang luas dengan komposisi
              Tanaman_Mature yang banyak sehingga produksi yang dihasilkan juga
              tinggi dari semua aspek yang ada Perkebunan_Rakyat sangat berperan
              penting bagi komoditas kakao di Provinsi tersebut sehingga
              Kementan selaku stakeholder terkait bisa memfokuskan program atau
              penyuluhan kepada para petani yang berada di perkebunan rakyat
              guna menjaga stabilitas produksi di provinsi tersebut.
            </p>
            <p>
              Sedangkan untuk Provinsi yang masuk ke dalam{' '}
              <b className='text-warning'>Cluster 0</b> adalah Provinsi yang
              memiliki kriteria Luas_Areal yang kecil dengan komposisi
              Tanaman_Mature yang sedikit sehingga produksi yang dihasilkan juga
              rendah, Kementan selaku stakeholder terkait dapat memberikan
              program atau penyuluhan yang berbeda treatmennya untuk
              meningkatkan tanaman mature dan menekan tamanam rusak dengan cara
              menerapkan Intensifikasi dengan ini diharapkan bisa menaikan angka
              tanaman mature dan akan beribas kepada naiknya produksi dan
              produktivitas, program yang dibuat dapat difokuskan kepada
              pengusaha / petani dengan kepemilikan lahan rakyat.
            </p>
            <p>
              Dari hasil analisis diatas dapat ditarik kesimpulan bahwa cluster
              1 adalah provinsi yang memiliki{' '}
              <span className='badge bg-success font-size-12'>
                Potensi Baik
              </span>{' '}
              sedangkan cluster 0 adalah provinsi yang memiliki{' '}
              <span className='badge bg-warning font-size-12'>
                Potensi Kurang Baik
              </span>
            </p>
            <Col md='6'>
              <LineChart
                titleBar={'Grafik Komoditas Kakao'}
                chartData={lineChart}
              />
            </Col>
            <Col md='6'>
              <p className='pt-5'>
                Pada tahun 2018 komoditas kakao mengalami kenaikan yang cukup
                signifikan hal inin disebabkan komposisi tanaman matang (TM)
                meningkat dan tanaman rusak (TR) serta tanaman belum matang
                (TBM) juga menurun hal ini lah yang menyebabkan produksi kakao
                meningkat walaupun luas areal mengalami penurunan.
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </Fragment>
  );
};

export default Story18;
