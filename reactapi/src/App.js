import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import ReactDOM from 'react-dom';
import MatchDetails from './pages/MatchDetails'
import Matches from './pages/Matches'
import About from './pages/About'
import Contact from './pages/Contact'
import NavBar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Row, Col, Container } from 'react-bootstrap';

class App extends React.Component {
  render() {
    return (
    <BrowserRouter>
    <NavBar heading="LiveScore" />
    <Switch>
     <Route exact path="/" component={Matches}/>
     <Route exact path="/About" component={About}/>
     <Route exact path="/Contact" component={Contact}/>
     <Route exact path="/MatchDetails/:title" component={MatchDetails}/>
     </Switch>
     </BrowserRouter>
   );
  }
}

export default App;
