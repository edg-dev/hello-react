import React, {Component} from 'react';
import { Link, Route, Switch } from "react-router-dom";

import './App.css';
import Tela2 from './Tela2';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/page2/" component={Tela2} />
        </Switch>
      </main>
      <footer>
        <Link to="/">Home</Link>
      </footer>
    </div>
  );
}

export default App;
