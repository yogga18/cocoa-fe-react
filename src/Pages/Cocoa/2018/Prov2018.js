import React, { Fragment, useState } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import Prov_2018 from '../../../Data/Provinsi/Prov18';
import { Grid, _ } from 'gridjs-react';

const Prov2018 = () => {
  const [jumlahBaris, setJumlahBaris] = useState(10);

  return (
    <Fragment>
      <Container fluid className='my-5'>
        <Row className='pt-5'>
          <Container fluid>
            <Card className='bg-secondary text-light'>
              <CardBody>
                <Row>
                  <Col md='6'>
                    <h5>
                      <b>
                        Tabel Komoditas Kakao 2018 by <b>Provinsi</b> di
                        Indonesia
                      </b>
                    </h5>
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
                <hr></hr>
                <Grid
                  data={() =>
                    Prov_2018.map((item, i) => ({
                      ...item,
                      number: i + 1,
                    }))
                  }
                  columns={[
                    {
                      id: 'number',
                      name: 'No',
                      width: '5%',
                    },
                    {
                      data: (row) => row,
                      name: 'Luas Areal',
                      width: '10%',
                      formatter: (cell) =>
                        _(
                          <>
                            {cell.Luas_Areal === '' ? (
                              <p>-</p>
                            ) : (
                              <p>{cell.Luas_Areal}</p>
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
                            {cell.Produktiv === '' ? (
                              <p>-</p>
                            ) : (
                              <p>{cell.Produktiv}</p>
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
                            {cell.Produksi === '' ? (
                              <p>-</p>
                            ) : (
                              <p>{cell.Produksi}</p>
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
                          <>{cell.TBM === '' ? <p>-</p> : <p>{cell.TBM}</p>}</>
                        ),
                    },
                    {
                      data: (row) => row,
                      name: 'TM',
                      width: '10%',
                      formatter: (cell) =>
                        _(<>{cell.TM === '' ? <p>-</p> : <p>{cell.TM}</p>}</>),
                    },
                    {
                      data: (row) => row,
                      name: 'TR',
                      width: '10%',
                      formatter: (cell) =>
                        _(<>{cell.TR === '' ? <p>-</p> : <p>{cell.TR}</p>}</>),
                    },
                    {
                      data: (row) => row,
                      name: 'Provinsi',
                      width: '15%',
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
                            {cell.cluster === '1' ? (
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
              </CardBody>
            </Card>
          </Container>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Prov2018;
