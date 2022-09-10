import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './page/Registration/Registration';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        {/* <Route path="login" element={<Login />}/> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
