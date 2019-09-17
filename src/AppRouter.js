import React from "react";
import Tela2 from './Tela2';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function padaria() {
  return <h2>Escopo ainda não definido</h2>;
}

function cliente() {
  return <Tela2></Tela2>;
}

function AppRouter() {
  return (
    <Router>
    <div>
            <button><Link to="/padaria/">Padaria</Link></button> 
    </div>
      <div>
            <button><Link to="/tela2/">Cliente</Link></button>
              
        <Route path="/padaria/" component={padaria} />
        <Route path="/tela2/" component={cliente} />
      </div>
    </Router>
  );
}

export default AppRouter;