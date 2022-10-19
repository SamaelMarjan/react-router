import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Doc from './pages/Doc';
import Tools from './pages/Tools';
import Connect from './pages/Contact';
import HTML from './components/nest-link/HTML';
import Css from './components/nest-link/Css';
import Bootstrap from './components/nest-link/Bootstrap';
import Tailwind from './components/nest-link/Tailwind';
import Material from './components/nest-link/Material';
import Javascript from './components/nest-link/Javascript';
import ReactJS from './components/nest-link/React';

function App() {
  return (
    <>
    <div className='flex'>
      <Navbar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='doc' element={<Doc />}>
            <Route path='html' element={<HTML />} />
            <Route path='css' element={<Css />} />
            <Route path='bootstrap' element={<Bootstrap />} />
            <Route path='tailwind' element={<Tailwind />} />
            <Route path='material' element={<Material />} />
            <Route path='javascript' element={<Javascript />} />
            <Route path='react' element={<ReactJS />} />
            <Route path='html' element={<HTML />} />
            <Route path='html' element={<HTML />} />
          </Route>
          <Route path='tools' element={<Tools />} />
          <Route path='connect' element={<Connect />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
