import AppRouter from './AppRouter';
import React, {Component} from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div><h1>Bem vindo ao Bake Fast</h1></div>
      <div><h5>Escolha como deseja continuar:</h5></div>
      <AppRouter></AppRouter>
      </header>
    </div>
  );
}

export default App;
