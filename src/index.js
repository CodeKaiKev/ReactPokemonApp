import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Phone from './Testing/Phone';
import PokemonDetail from './PokemonDetail/PokemonDetail';
import {BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
//const myFirstElement = <h1>Hello React!</h1>
//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(myFirstElement);
//import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<App />);
root.render(
  <React.StrictMode>
    <HashRouter>
    <Routes>
      <Route path="/" element={<App className="indexApp" />}/>
      <Route path="/view" element={<PokemonDetail />}/>
    </Routes>
    </HashRouter>
    {/* <App className="indexApp"/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
