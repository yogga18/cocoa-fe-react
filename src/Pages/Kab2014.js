import { Grid, _ } from 'gridjs-react';
import React, { Fragment } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import kab_2014 from '../Data.js';

// Module not found: Error: Can't resolve 'gridjs-react' in 'C:\Users\user\Documents\GitHub\react-gridjs\src\Pages' how can i fix this error ? i already install gridjs-react but still error like this ?

const Kab2014 = () => {
  const [jumlahBaris, setJumlahBaris] = useState(5);
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

      <select
        className='form-select form-select-md'
        value={jumlahBaris}
        onChange={(e) => setJumlahBaris(e.target.value)}
      >
        <option value={5}>Jumlah Baris</option>
        <option value={10}>10</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
        <option value={9999999}>semua</option>
      </select>

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
            width: '15%',
            formatter: (cell) =>
              _(
                <>
                  {cell.Luas_Areal_2014 === '' ? (
                    <p>-</p>
                  ) : (
                    <p>{cell.Luas_Areal_2014}</p>
                  )}
                </>
              ),
          },
          {
            data: (row) => row,
            name: 'Produktivitas',
            width: '15%',
            formatter: (cell) =>
              _(
                <>
                  {cell.Produktiv_2014 === '' ? (
                    <p>-</p>
                  ) : (
                    <p>{cell.Produktiv_2014}</p>
                  )}
                </>
              ),
          },
          {
            data: (row) => row,
            name: 'Produksi',
            width: '15%',
            formatter: (cell) =>
              _(
                <>
                  {cell.Produksi_2014 === '' ? (
                    <p>-</p>
                  ) : (
                    <p>{cell.Produksi_2014}</p>
                  )}
                </>
              ),
          },
          {
            data: (row) => row,
            name: 'Jumlah Petani',
            width: '15%',
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
            width: '15%',
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
            width: '15%',
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
            width: '15%',
            formatter: (cell) =>
              _(
                <>
                  <>{cell.TR === '' ? <p>-</p> : <p>{cell.TR}</p>}</>
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
    </Fragment>
  );
};

export default Kab2014;
