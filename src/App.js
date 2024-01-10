import React from 'react';

import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App(){
  return(
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;