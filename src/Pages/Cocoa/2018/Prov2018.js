import React, { Fragment, useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import Prov_2018 from '../../../Data/Provinsi/Prov18';
import { Grid, _ } from 'gridjs-react';

const Prov2018 = () => {
  const [jumlahBaris, setJumlahBaris] = useState(10);
  const [tempData, setTempData] = useState([]);

  const filterData = () => {
    const deleteDot = Prov_2018.map((item) => {
      return {
        ...item,
        Luas_Areal_2018: item.Luas_Areal_2018?.replace('.', ''),
        Produksi_2018: item.Produksi_2018?.replace('.', ''),
        Tanaman_Imature: item.Tanaman_Imature?.replace('.', ''),
        Tanaman_Mature: item.Tanaman_Mature?.replace('.', ''),
        Tanaman_Damage: item.Tanaman_Damage?.replace('.', ''),
      };
    });

    setTempData(deleteDot);
  };

  useEffect(() => {
    filterData();
  }, []);

  return (
    <Fragment>
      <Container fluid className='my-5'>
        <Row className='mx-3'>
          <Col md='6'>
            Tabel Penghasil Komoditas Kakao 2018 by Kabupaten di Indonesia
          </Col>
          <Col md='6'>
            <select
              className='form-select form-select-md'
              value={jumlahBaris}
              onChange={(e) => setJumlahBaris(e.target.value)}
            >
              <option value={10}>Jumlah Baris</option>
              <option value={25}>25</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
              <option value={9999999}>semua</option>
            </select>
          </Col>
        </Row>

        <Row className='pt-5'>
          <Col md='1'></Col>
          <Col md='10'>
            <Grid
              data={() =>
                tempData.map((item, i) => ({
                  ...item,
                  number: i + 1,
                }))
              }
              columns={[
                {
                  id: 'number',
                  name: 'No',
                },
                {
                  data: (row) => row,
                  name: 'Luas Areal',
                  width: '10%',
                  formatter: (cell) =>
                    _(
                      <>
                        {cell.Luas_Areal_2018 === '' ? (
                          <p>-</p>
                        ) : (
                          <p>{cell.Luas_Areal_2018}</p>
                        )}
                      </>
                    ),
                },
                {
                  data: (row) => row,
                  name: 'Produktivitas',
                  width: '10%',
                  formatter: (cell) =>
                    _(
                      <>
                        {cell.Produktiv_2018 === '' ? (
                          <p>-</p>
                        ) : (
                          <p>{cell.Produktiv_2018}</p>
                        )}
                      </>
                    ),
                },
                {
                  data: (row) => row,
                  name: 'Produksi',
                  width: '10%',
                  formatter: (cell) =>
                    _(
                      <>
                        {cell.Produksi_2018 === '' ? (
                          <p>-</p>
                        ) : (
                          <p>{cell.Produksi_2018}</p>
                        )}
                      </>
                    ),
                },
                {
                  data: (row) => row,
                  name: 'Petani',
                  width: '10%',
                  formatter: (cell) =>
                    _(
                      <>
                        {cell.Jumlah_Petani === '' ? (
                          <p>-</p>
                        ) : (
                          <p>{cell.Jumlah_Petani}</p>
                        )}
                      </>
                    ),
                },
                {
                  data: (row) => row,
                  name: 'TBM',
                  width: '10%',
                  formatter: (cell) =>
                    _(
                      <>
                        {cell.Tanaman_Imature === '' ? (
                          <p>-</p>
                        ) : (
                          <p>{cell.Tanaman_Imature}</p>
                        )}
                      </>
                    ),
                },
                {
                  data: (row) => row,
                  name: 'TM',
                  width: '10%',
                  formatter: (cell) =>
                    _(
                      <>
                        {cell.Tanaman_Mature === '' ? (
                          <p>-</p>
                        ) : (
                          <p>{cell.Tanaman_Mature}</p>
                        )}
                      </>
                    ),
                },
                {
                  data: (row) => row,
                  name: 'TR',
                  width: '10%',
                  formatter: (cell) =>
                    _(
                      <>
                        {cell.Tanaman_Damage === '' ? (
                          <p>-</p>
                        ) : (
                          <p>{cell.Tanaman_Damage}</p>
                        )}
                      </>
                    ),
                },
                {
                  data: (row) => row,
                  name: 'Provinsi',
                  width: '10%',
                  formatter: (cell) =>
                    _(
                      <>
                        {cell.Provinsi === '' ? (
                          <p>-</p>
                        ) : (
                          <p>{cell.Provinsi}</p>
                        )}
                      </>
                    ),
                },
                {
                  data: (row) => row,
                  name: 'Cluster',
                  width: '10%',
                  formatter: (cell) =>
                    _(
                      <>
                        {cell.Provinsi === 'Sumatera Barat' ||
                        cell.Provinsi === 'Sulawesi Tengah' ||
                        cell.Provinsi === 'Sulawesi Selatan' ||
                        cell.Provinsi === 'Sulawesi Barat' ||
                        cell.Provinsi === 'Sulawesi Tenggara' ? (
                          <span className='badge bg-success font-size-12'>
                            Potensi Baik
                          </span>
                        ) : (
                          <span className='badge bg-warning font-size-12'>
                            Potensi Kurang Baik
                          </span>
                        )}
                      </>
                    ),
                },
              ]}
              search={{
                selector: (cell, rowIndex, cellIndex) =>
                  cellIndex === 1 ? cell.Provinsi : cell,
              }}
              language={{
                search: {
                  placeholder: 'Search By Provinsi...',
                },
              }}
              pagination={{
                enabled: true,
                limit: jumlahBaris || 10,
                resetPageOnUpdate: true,
              }}
            />
          </Col>
          <Col md='1'></Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Prov2018;
