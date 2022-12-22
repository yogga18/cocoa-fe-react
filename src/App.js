import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

// Init componenet
import LandingPage from './Pages/Landingpage/index.js';
import Cocoa from './Pages/Cocoa';
import Cocoa14 from './Pages/Cocoa/2014/index.js';
import Cocoa15 from './Pages/Cocoa/2015/index.js';
import Cocoa16 from './Pages/Cocoa/2016/index.js';
import Cocoa17 from './Pages/Cocoa/2017/index.js';
import Cocoa18 from './Pages/Cocoa/2018/index.js';
import Cocoa19 from './Pages/Cocoa/2019/index.js';
import Cocoa20 from './Pages/Cocoa/2020/index.js';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <nav className='d-flex justify-content-end align-baseline p-3'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/cocoa'>Cocoa</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/cocoa' element={<Cocoa />} />
        <Route path='/cocoa-2014' element={<Cocoa14 />} />
        <Route path='/cocoa-2015' element={<Cocoa15 />} />
        <Route path='/cocoa-2016' element={<Cocoa16 />} />
        <Route path='/cocoa-2017' element={<Cocoa17 />} />
        <Route path='/cocoa-2018' element={<Cocoa18 />} />
        <Route path='/cocoa-2019' element={<Cocoa19 />} />
        <Route path='/cocoa-2020' element={<Cocoa20 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
