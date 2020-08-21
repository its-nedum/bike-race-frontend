import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from './components/pages/home';
import Photos from './components/pages/photos';
import Locations from './components/pages/locations';
import Riders from './components/pages/riders';
import Contest from './components/pages/contest';
import Navbar from './components/layouts/navbar';
import Footer from './components/layouts/footer';
import Slogan from './components/helpers/slogans'

function App() {
  return (
    <BrowserRouter>
      <div className="App cover_img">
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/photos' component={Photos} />
          <Route path='/locations' component={Locations} />
          <Route path='/riders' component={Riders} />
          <Route path='/contest' component={Contest} />
          <Route path='/slogans' component={Slogan} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
