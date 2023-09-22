import './App.css';
import Delete from './Delete';
import Post from './Post';
import Get from './Get';
import Put from './Put';
import AuthPage from './login';
import React, { useState } from 'react';
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom';
import Home from './home';
import View from './view';
import Alogin from './alogin';
function App() {


  return (
    
    <Router>
    <div className="App">
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>

      

      <Route exact path='AuthPage' element={<AuthPage/>}></Route>
      
      <Route exact path='Post' element={<Post />}></Route>
      <Route exact path='View' element={<View />}></Route>
      <Route exact path='Alogin' element={<Alogin/>}></Route>
          <Route exact path='/Put' element={<Put />}></Route>
          <Route exact path='/Get' element={<Get />}></Route>
          <Route exact path='/Delete' element={<Delete />}></Route>
     </Routes>
    </div></Router>
  );
}

export default App;