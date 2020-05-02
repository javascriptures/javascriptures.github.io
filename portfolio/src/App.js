import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Projects from './Components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function App() {
  return (
    <>
      <main>
        <Switch>
          <Route exact path="/portfolio" component={Home}/>
          <Route exact path="/portfolio/projects" component={Projects}/>
        </Switch>
      </main>
    </>
  );
}

export default App;
