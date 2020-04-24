import React from 'react';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function App() {
  return (
    <>
    <div className="slant">
      <Header/>
      <About/>
      </div>
        <Home/>
    </>
  );
}

export default App;
