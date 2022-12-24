import React, { Fragment, useEffect, useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import kab_2017 from '../../../Data/Kabupaten/Data17';
import { Grid, _ } from 'gridjs-react';

const Kab2017 = () => {
  const [jumlahBaris, setJumlahBaris] = useState(10);
  const [tempData, setTempData] = useState([]);

  const filterData = () => {
    const deleteDot = kab_2017.map((item) => {
      return {
        ...item,
        Luas_Areal_2017: item.Luas_Areal_2017.replace('.', ''),
        Produksi_2017: item.Produksi_2017.replace('.', ''),
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
        <Row className='mx-3'>
          <Col md='6'>
            Tabel Penghasil Komoditas Kakao 2017 by Kabupaten di Indonesia
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
                  name: 'Kabupaten / Kota',
                  width: '15%',
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
                        {cell.Luas_Areal_2017 === '' ? (
                          <p>-</p>
                        ) : (
                          <p>{cell.Luas_Areal_2017}</p>
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
                        {cell.Produktiv_2017 === '' ? (
                          <p>-</p>
                        ) : (
                          <p>{cell.Produktiv_2017}</p>
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
                        {cell.Produksi_2017 === '' ? (
                          <p>-</p>
                        ) : (
                          <p>{cell.Produksi_2017}</p>
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
                        <>{cell.TBM === '' ? <p>-</p> : <p>{cell.TBM}</p>}</>
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
                  cellIndex === 1 ? cell.Provinsi : cell,
              }}
              language={{
                search: {
                  placeholder: 'Search By Title...',
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

export default Kab2017;
