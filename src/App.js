import './App.css';
import {useState, useEffect} from 'react';
import Footer from './components/Footer';
import Home from './components/Home';
import {useRoutes} from 'react-router-dom';
import routes from './routes'

function App() {
  const routing = useRoutes(routes);

  return (
    (useRoutes(routes))
  );
}

export default App;
