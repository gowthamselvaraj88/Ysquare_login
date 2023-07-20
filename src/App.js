import React from 'react';
import Welcome from './Welcome';
// import App from './App';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './Login';

const App = () => {
  return (

        <>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />}/>
        <Route exact path="/Welcome" element={<Welcome />}/>
      </Routes>
      </BrowserRouter>
      </>
      

  )
} 

export default App;
