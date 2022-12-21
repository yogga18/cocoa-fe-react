import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Kab2014 from './Pages/Kab2014';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route path='/kab-2014' element={<Kab2014 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
