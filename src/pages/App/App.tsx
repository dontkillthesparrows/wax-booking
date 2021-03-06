import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import PublicRoute from '../PublicRoute';
import LandingPage from '../LandingPage';
import Booking from '../Booking';
import Menu from '../Menu';
import Offers from '../Offers';
import About from '../About';
import NotFound from '../NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <PublicRoute exact path="/home" component={LandingPage} />
        <PublicRoute exact path="/booking" component={Booking} />
        <PublicRoute exact path="/menu" component={Menu} />
        <PublicRoute exact path="/offers" component={Offers} />
        <PublicRoute exact path="/about" component={About} />
        <Route exact path="/404" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
