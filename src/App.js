import './App.css';
import { Container } from 'reactstrap';
// import UsersComponent from './Components/UsersComponent';
import { useEffect, useState } from 'react';
import kab_2014 from './Data';

function App() {
  const [tempData, setTempData] = useState([]);

  const filterData = () => {
    const kabupaten = kab_2014.filter((item) => item.Provinsi === 'Aceh');

    const deleteDot = kabupaten.map((item) => {
      return {
        ...item,
        Luas_Areal_2014: item.Luas_Areal_2014.replace('.', ''),
      };
    });

    const sortDescbyLuasAreal = deleteDot.sort(
      (a, b) => parseInt(b.Luas_Areal_2014) - parseInt(a.Luas_Areal_2014)
    );

    // logging
    console.log('sortDescbyLuasAreal', sortDescbyLuasAreal);

    setTempData(sortDescbyLuasAreal);
  };

  useEffect(() => {
    filterData();
  }, []);

  return (
    <div className='App'>
      <Container fluid>
        {/* <UsersComponent /> */}

        {tempData.map((item) => {
          return (
            <div key={item.No} className='dflex gap-3'>
              <h1>{item.Kabupaten_Kota}</h1>
              <h1>{item.Luas_Areal_2014}</h1>
            </div>
          );
        })}
      </Container>
    </div>
  );
}

export default App;
