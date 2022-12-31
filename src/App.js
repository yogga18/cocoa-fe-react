import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
import NotFound from './Pages/NotFound/index';
import './App.scss';
import Header from './Components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='*' element={<NotFound />} />
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
