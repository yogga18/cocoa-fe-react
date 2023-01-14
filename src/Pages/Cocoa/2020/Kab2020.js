import React, { Fragment, useEffect, useState } from 'react';
import { Card, CardBody, Col, Container, Row } from 'reactstrap';
import kab_2020 from '../../../Data/Kabupaten/Data20';
import { Grid, _ } from 'gridjs-react';

const Kab2020 = () => {
  const [jumlahBaris, setJumlahBaris] = useState(10);
  const [tempData, setTempData] = useState([]);

  const filterData = () => {
    const deleteDot = kab_2020.map((item) => {
      return {
        ...item,
        Luas_Areal_2020: item.Luas_Areal_2020.replace('.', ''),
        Produksi_2020: item.Produksi_2020.replace('.', ''),
        TBM: item.TBM.replace('.', ''),
        TM: item.TM.replace('.', ''),
        TR: item.TR.replace('.', ''),
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
        <Row className='pt-5'>
          <Container fluid>
            <Card className='bg-secondary text-light'>
              <CardBody>
                <Row>
                  <Col md='6'>
                    <h5>
                      <b>
                        Tabel Komoditas Kakao 2020 by <b>Kabupaten</b> di
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
                    tempData.map((item, i) => ({
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
                      name: 'Kabupaten / Kota',
                      width: '20%',
                      formatter: (cell) =>
                        _(
                          <>
                            <p>{cell.Kabupaten_Kota}</p>
                          </>
                        ),
                    },
                    {
                      data: (row) => row,
                      name: 'Luas Areal',
                      width: '10%',
                      formatter: (cell) =>
                        _(
                          <>
                            {cell.Luas_Areal_2020 === '' ? (
                              <p>-</p>
                            ) : (
                              <p>{cell.Luas_Areal_2020}</p>
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
                            {cell.Produktiv_2020 === '' ? (
                              <p>-</p>
                            ) : (
                              <p>{cell.Produktiv_2020}</p>
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
                            {cell.Produksi_2020 === '' ? (
                              <p>-</p>
                            ) : (
                              <p>{cell.Produksi_2020}</p>
                            )}
                          </>
                        ),
                    },
                    {
                      data: (row) => row,
                      name: 'Jumlah Petani',
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
                            <>
                              {cell.TBM === '' ? <p>-</p> : <p>{cell.TBM}</p>}
                            </>
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
                            <>{cell.TM === '' ? <p>-</p> : <p>{cell.TM}</p>}</>
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
                            <>{cell.TR === '' ? <p>-</p> : <p>{cell.TR}</p>}</>
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
                            <>
                              {cell.Provinsi === '' ? (
                                <p>-</p>
                              ) : (
                                <p>{cell.Provinsi}</p>
                              )}
                            </>
                          </>
                        ),
                    },
                  ]}
                  search={{
                    selector: (cell, rowIndex, cellIndex) =>
                      cellIndex === 1 ? cell.Provinsi : cell.Kabupaten_Kota,
                  }}
                  language={{
                    search: {
                      placeholder: 'Search By Provinsi or Kabupaten / Kota...',
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

export default Kab2020;
