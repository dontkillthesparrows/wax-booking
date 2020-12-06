import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import LandingPage from '../LandingPage';
import Booking from '../Booking';
import Menu from '../Menu';
import Offers from '../Offers';
import About from '../About';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/home" />} />
        <Route exact path="/home" component={LandingPage} />
        <Route exact path="/booking" component={Booking} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/offers" component={Offers} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
