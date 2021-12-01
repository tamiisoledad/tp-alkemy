import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <React.Fragment>
      <Routes>
       <Route path="/" exact={true} element={<Login/>} />
       <Route path="/register"  element={<Register/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
