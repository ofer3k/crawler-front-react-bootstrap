import React from "react";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import { Navbar, Nav,} from 'react-bootstrap';
import HomeSplit from './components/HomeSplit'
import Table1 from './components/Table'
import Buttons from "./components/Buttons";
import Mongo from './components/Mongo'
import Chart from './components/ChartNew'

export default function AppRouter() {
  return (

    <Router>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    
              <Link style={{ textDecoration: 'none' }} to="/home">
              <Navbar.Brand>My-Crawler</Navbar.Brand>
              </Link>
              <Nav style={{marginLeft:'auto'}} >
        
              <Link style={{ textDecoration: 'none' }} to="/chart">
              <Navbar.Brand>Chart</Navbar.Brand>
              </Link>

              <Link style={{ textDecoration: 'none' }} to="/redis">
              <Navbar.Brand>Redis</Navbar.Brand>
              </Link>
              <Link style={{ textDecoration: 'none' }} to="/mongo">
              <Navbar.Brand>Mongo</Navbar.Brand>
              </Link>
            
              <Link to="/buttons">
              <Navbar.Brand eventKey={2}>Boss's Dashboard</Navbar.Brand>
              </Link>
              
              </Nav>

              
      </Navbar>

        <Switch>
          <Route path="/home">
            <HomeSplit />
          </Route>

          <Route path="/redis">
            <Table1 />
          </Route>

          <Route path="/buttons">
            <Buttons />
          </Route>

          <Route path="/mongo">
            <Mongo />
          </Route>

          <Route path="/chart">
            <Chart  />
          </Route>

        </Switch>

    </Router>

  );
}

