// import { Grid } from 'gridjs-react';
import React, { Fragment } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'reactstrap';
import kab_2014 from '../Data.js';

// Module not found: Error: Can't resolve 'gridjs-react' in 'C:\Users\user\Documents\GitHub\react-gridjs\src\Pages' how can i fix this error ? i already install gridjs-react but still error like this ?

const Kab2014 = () => {
  // const [jumlahBaris, setJumlahBaris] = useState(5);
  const [tempData, setTempData] = useState([]);

  const filterData = () => {
    // const kabupaten = kab_2014.filter((item) => item.Provinsi === 'Aceh');

    const deleteDot = kab_2014.map((item) => {
      return {
        ...item,
        Luas_Areal_2014: item.Luas_Areal_2014.replace('.', ''),
        Produksi_2014: item.Produksi_2014.replace('.', ''),
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
      <p>Kab2014</p>

      <Table responsive hover>
        <thead>
          <tr>
            <th>No</th>
            <th>Kabupaten / Kota</th>
            <th>Luas Areal 2014</th>
            <th>Produkti</th>
            <th>Produksi</th>
            <th>Jumlah Petani</th>
            <th>TBM</th>
            <th>TM</th>
            <th>TR</th>
            <th>Provinsi</th>
          </tr>
        </thead>
        <tbody>
          {tempData.map((item, i) => (
            <tr key={i}>
              <th scope='row'>{i + 1}</th>
              <td>{item.Kabupaten_Kota}</td>
              <td>{item.Luas_Areal_2014}</td>
              <td>{item.Produktiv_2014}</td>
              <td>{item.Produksi_2014}</td>
              <td>{item.Jumlah_Petani}</td>
              <td>{item.TBM}</td>
              <td>{item.TM}</td>
              <td>{item.TR}</td>
              <td>{item.Provinsi}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* <select
        className='form-select form-select-md'
        value={jumlahBaris}
        onChange={(e) => setJumlahBaris(e.target.value)}
      >
        <option value={5}>Jumlah Baris</option>
        <option value={10}>10</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
        <option value={9999999}>semua</option>
      </select> */}

      {/* <Grid
        data={() =>
          deleteDot.map((item, i) => ({
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
            width: '30%',
            formatter: (cell) =>
              _(
                <>
                  <p>{cell.Kabupaten_Kota}</p>
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
      /> */}
    </Fragment>
  );
};

export default Kab2014;
