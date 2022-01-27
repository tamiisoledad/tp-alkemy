import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Ingresos from './Ingresos';
import Egresos from './Egresos';

function App() {
  return (
    <React.Fragment>
      <Routes>
       <Route path="/" exact={true} element={<Login/>} />
       <Route path="/register"  element={<Register/>} />
       <Route path="/home" element={<Home/>}/>
       <Route path="/ingresos" element={<Ingresos/>}/>
       <Route path="/egresos" element={<Egresos/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
