import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main'
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/navBar';
import Withdraw from './components/Withdraw';
import Deposit from './components/Deposit'
import CreateAccount from './components/CreateAccount'
import Alldata from './components/Alldata';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import './components/navBar.css'
import './components/CreateAccount.css'
import './components/Account.css'
import './components/Login.css'
import './components/Card.css'
import './components/Alldata.css'

ReactDOM.render(
  <BrowserRouter>
    <Route exact path="/" component={Main} />
      <Navbar />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/alldata" component={Alldata} />
        <Route path="/home" component={Home} />
        <Route path="/withdraw" component={Withdraw} />
        <Route path="/deposit" component={Deposit} />
        <Route path="/createaccount" component={CreateAccount} />
      </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
