import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from './components/pages/home';
import Navbar from './components/layouts/navbar';
import Footer from './components/layouts/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App cover_img">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
