import React, { Fragment } from 'react';
import Kab2014 from './Kab2014';
import map_2014 from '../../../assets/gif/map_2014.png';
import { Container } from 'reactstrap';
import df_2014 from '../../../assets/gif/table_2014.png';

const index = () => {
  return (
    <Fragment>
      <h1 className='text-center'>
        Keadaan Komoditas Kakao di Indonesia pada tahun 2014
      </h1>
      <div className='d-flex justify-content-center align-baseline py-0 my-0'>
        <img src={map_2014} alt='map_2014' />
      </div>

      <div className='d-flex justify-content-center align-baseline mb-5'>
        <a
          href='https://2014-map.vercel.app/'
          target='_blank'
          rel='noreferrer noopener'
        >
          Lihat Peta Sebaran
        </a>
      </div>

      <Kab2014 />
      <Container fluid className='my-5'>
        <h5 className='text-center'>
          Table Hasil Clustering Menggunakan K - Means
        </h5>
        <div className='d-flex justify-content-center align-baseline mb-5'>
          <img src={df_2014} alt='Hasil Clustering' />
        </div>
        <p>
          Dari visualisasi diatas dapat dilihat bahwa provinsi yang memiliki{' '}
          <b>
            Luas_Areal_2014, Areal_Perkebunan_Rakyat, Produksi_2014,
            Tanaman_Mature
          </b>{' '}
          yang tinggi akan masuk kedalam{' '}
          <b className='text-success'>cluster 1</b> sedangkan diluar kriteria
          tersebut akan masuk kedalam <b className='text-warning'>cluster 0.</b>
        </p>
        <p>
          Jika ditelisik lebih jauh Provinsi yang masuk ke dalam cluster 1
          adalah Provinsi yang memiliki kriteria Luas_Areal yang luas dengan
          komposisi Tanaman_Mature yang banyak sehingga produksi yang dihasilkan
          juga tinggi dari semua aspek yang ada Perkebunan_Rakyat sangat
          berperan penting bagi komoditas kakao di Provinsi tersebut sehingga
          Kementan selaku stakeholder terkait bisa memfokuskan program atau
          penyuluhan kepada para petani yang berada di perkebunan rakyat guna
          menjaga stabilitas produksi di provinsi tersebut.
        </p>
        <p>
          Sedangkan untuk Provinsi yang masuk ke dalam cluster 0 adalah Provinsi
          yang memiliki kriteria Luas_Areal yang kecil dengan komposisi
          Tanaman_Mature yang sedikit sehingga produksi yang dihasilkan juga
          rendah dari sehingga Kementan selaku stakeholder terkait dapat
          memberikan program atau penyuluhan yang berbeda treatmennya untuk
          meningkatkan produksi komoditas kakao di provinsi tersebut.
        </p>
        <p>
          Dari hasil analisis diatas dapat ditarik kesimpulan bahwa cluster 1
          adalah provinsi yang memiliki <b>Potensi Baik</b> sedangkan cluster 0
          adalah provinsi yang memiliki <b>Potensi Kurang Baik</b>
        </p>
      </Container>
    </Fragment>
  );
};

export default index;
