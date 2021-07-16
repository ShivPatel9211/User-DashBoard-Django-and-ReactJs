import React from 'react';  
import logo from './logo.svg';  
import './App.css';  
import Login from './Login';  
import Reg from './Reg';  
import Dashboard from './Dashboard'; 
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';   
// import Update from './Update';
function App() {  
  return (  
    <Router>    
      <div className="container">    
        <nav className="navbar navbar-expand-lg navheader">    
          <div className="collapse navbar-collapse" >    
            <ul className="navbar-nav mr-auto">    
              <li className="nav-item">    
                <Link to={'/Login'} className="nav-link">Login</Link>    
              </li>    
              <li className="nav-item">    
                <Link to={'/Signup'} className="nav-link">Sign Up</Link>    
              </li>    
            </ul>    
          </div>   
        </nav> <br /> 
        <div  className='text-center'>

        <h1>User Dassboard</h1>
         
        </div>   
        <Switch>    
          <Route exact path='/Login' component={Login} />    
          <Route path='/Signup' component={Reg} />    
        </Switch>    
        <Switch>  
        <Route path='/Dashboard' component={Dashboard} />    
        </Switch>  
        {/* <Switch>  
        <Route path='/Update' component={Update} />    
        </Switch>   */}
      </div>    
    </Router>   
  );  
}  
export default App;