import React, { Fragment } from 'react';
import { Col, Container, Row, Table } from 'reactstrap';
import elbow_19 from '../../../assets/img/2019/Elbow_2019.png';

const tablePerbandingan = [
  {
    No: '1',
    Luas_Areal: '99492',
    Produktiv: '715',
    Produksi: '39295',
    Jumlah_Petani: '127843',
    PR: '99492',
    PBN: '3096',
    PS: '1318',
    TBM: '30085',
    TM: '54907',
    TR: '14500',
    cluster: '0',
    Provinsi: 'Aceh',
    Tahun: '2018',
  },
  {
    No: '2',
    Luas_Areal: '80711',
    Produktiv: '889',
    Produksi: '58271',
    Jumlah_Petani: '142392',
    PR: '79246',
    PBN: '3096',
    PS: '1466',
    TBM: '7667',
    TM: '65484',
    TR: '7561',
    cluster: '0',
    Provinsi: 'Lampung',
    Tahun: '2018',
  },
  {
    No: '3',
    Luas_Areal: '99267',
    Produktiv: '713',
    Produksi: '41093',
    Jumlah_Petani: '126880',
    PR: '99267',
    PBN: '1874',
    PS: '976',
    TBM: '27987',
    TM: '57618',
    TR: '13662',
    cluster: '1',
    Provinsi: 'Aceh',
    Tahun: '2019',
  },
  {
    No: '4',
    Luas_Areal: '79653',
    Produktiv: '902',
    Produksi: '58868',
    Jumlah_Petani: '142408',
    PR: '79356',
    PBN: '1874',
    PS: '297',
    TBM: '6893',
    TM: '65295',
    TR: '7465',
    cluster: '1',
    Provinsi: 'Lampung',
    Tahun: '2019',
  },
];

const Story19 = () => {
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
                  Luas_Areal, Areal Perkebunan Rakyat, Produksi, Tanaman_Mature
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
                  <b>7.76800105999034</b> dan dengan Cluster berjumlah 2
                  mendapatkan nilai <i>Davies-Bouldin index ( DBI )</i> sebesar{' '}
                  <b>0.6808484528086892</b>
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
                  src={elbow_19}
                  width={600}
                  height={300}
                  alt='Hasil Clustering'
                />
              </div>
            </Col>
            <Col md='12'>
              <p>
                Jika ditelisik lebih jauh Provinsi yang masuk ke dalam{' '}
                <b className='text-success'>Cluster 1</b> adalah Provinsi yang
                memiliki kriteria Luas_Areal yang luas dengan komposisi
                Tanaman_Mature yang banyak sehingga produksi yang dihasilkan
                juga tinggi dari semua aspek yang ada Perkebunan_Rakyat sangat
                berperan penting bagi komoditas kakao di Provinsi tersebut
                sehingga Kementan selaku stakeholder terkait bisa memfokuskan
                program atau penyuluhan kepada para petani yang berada di
                perkebunan rakyat guna menjaga stabilitas produksi di provinsi
                tersebut.
              </p>
              <p>
                Sedangkan untuk Provinsi yang masuk ke dalam{' '}
                <b className='text-warning'>Cluster 0</b> adalah Provinsi yang
                memiliki kriteria Luas_Areal yang kecil dengan komposisi
                Tanaman_Mature yang sedikit sehingga produksi yang dihasilkan
                juga rendah, Kementan selaku stakeholder terkait dapat
                memberikan program atau penyuluhan yang berbeda treatmennya
                untuk meningkatkan tanaman mature dan menekan tamanam rusak
                dengan cara menerapkan Intensifikasi dengan ini diharapkan bisa
                menaikan angka tanaman mature dan akan beribas kepada naiknya
                produksi dan produktivitas, program yang dibuat dapat difokuskan
                kepada pengusaha / petani dengan kepemilikan lahan rakyat.
              </p>
              <p>
                Dari hasil analisis diatas dapat ditarik kesimpulan bahwa
                cluster 1 adalah provinsi yang memiliki{' '}
                <span className='badge bg-success font-size-12'>
                  Potensi Baik
                </span>{' '}
                sedangkan cluster 0 adalah provinsi yang memiliki{' '}
                <span className='badge bg-warning font-size-12'>
                  Potensi Kurang Baik
                </span>
              </p>
              <p>
                Keadaan komoditas kakao pada tahun 2019 ini mengalami penurunan
                hampir diberbagai aspek jika dibandingkan dengan tahun
                sebelumnya ( 2018 ) yang mengalami kenaikan yang cukup tinggi,
                namun dari penurunan ini daerah dengan{' '}
                <span className='badge bg-success font-size-12'>
                  Potensi Baik
                </span>{' '}
                yang sebelumnya berjumlah 5 provinsi saja yaitu Sumatera Barat,
                Sulawesi Tengah, Sulawesi Selatan, Sulawesi Barat dan Sulawesi
                Tenggara pada tahun ini mengalami kenaikan dengan 2 provinsi
                lain masuk kedalam cluster 1 atau provinsi dengan{' '}
                <span className='badge bg-success font-size-12'>
                  Potensi Baik
                </span>{' '}
                (Total 7) provinsi tersebut adalah Aceh dan Lampung,{' '}
                <b>
                  hal ini dikarenakan dua provinsi tersebut berhasil menjaga
                  stabilitas komposisi Tanaman Mature (TM) tetap stabil
                  cenderung naik jika dibandingkan dengan tahun sebelumnya dan
                  menekan Tanaman Rusak (TR) tetap berada di bawah Tanaman
                  Mature (TM) yang berarti produksi yang dihasilkan juga akan
                  menginkat faktor ini lah yang menyebabkan Aceh dan Lampung
                  bisa masuk kedalam Cluster 1
                </b>{' '}
                <span className='badge bg-success font-size-12'>
                  Potensi Baik
                </span>
                .
              </p>
              <Table responsive hover>
                <thead>
                  <tr className='table-dark'>
                    <th>No</th>
                    <th>Luas Area</th>
                    <th>Produktiv</th>
                    <th>Produksi</th>
                    <th>Petani</th>
                    <th>PR</th>
                    <th>PBN</th>
                    <th>PS</th>
                    <th>TBM</th>
                    <th>TM</th>
                    <th>TR</th>
                    <th>Provinsi</th>
                    <th>Tahun</th>
                  </tr>
                </thead>
                {tablePerbandingan.map((item, index) => {
                  return (
                    <tbody>
                      <tr>
                        <th scope='row'>{index + 1}</th>
                        <td>{item.Luas_Areal}</td>
                        <td>{item.Produktiv}</td>
                        <td>{item.Produksi}</td>
                        <td>{item.Jumlah_Petani}</td>
                        <td>{item.PR}</td>
                        <td>{item.PBN}</td>
                        <td>{item.PS}</td>
                        <td>{item.TBM}</td>
                        <td>{item.TM}</td>
                        <td>{item.TR}</td>
                        <td>{item.Provinsi}</td>
                        <td>{item.Tahun}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </Table>
            </Col>
          </Row>
        </Container>
      </Container>
    </Fragment>
  );
};

export default Story19;
