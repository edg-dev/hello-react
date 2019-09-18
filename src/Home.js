import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './App.css';

function Home() {
        return (
            <header className="App-header">
            <div><h1>Bem vindo ao Bake Fast</h1></div>
            <div><h5>Escolha como deseja continuar:</h5></div>
            <div><Link to="/page2/">Cliente</Link></div>
            <div><Link to="/">Padaria</Link></div>
            </header>
        );
}

export default Home;