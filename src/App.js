import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Main from './components/Main';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/navBar';
import Withdraw from './components/Withdraw';
import Deposit from './components/Deposit'
import CreateAccount from './components/CreateAccount'
import Alldata from './components/Alldata';
import 'bootstrap/dist/css/bootstrap.css';
import './components/navBar.css'
import './components/CreateAccount.css'
import './components/Account.css'
import './components/Login.css'
import './components/Card.css'
import './components/Alldata.css'
import 'bootstrap/dist/js/bootstrap.js';


function App() {
   const [totalState, setTotalState] = React.useState(0);
  return (
    
    <Router>
      <Navbar />
      <Switch>
        {/* <Route exact path="/" component={Main} /> */}
        <Route path="/login" component={Login} />
        <Route path="/alldata" component={Alldata} />
        <Route path="/home" component={Home} />
        <Route path="/withdraw" component={Withdraw} />
        <Route path="/deposit" component={Deposit} />
        <Route path="/createaccount" component={CreateAccount} />
      </Switch>
    </Router>
  );
}


export default App;
