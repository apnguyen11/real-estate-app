import React, {Component} from 'react';
import { Router, Route } from "react-router-dom";
import Facebook from './components/facebooklogin/facebooklogin'
import './App.css';
import Businesses from './components/businesses/businesses'
import Login from './components/login/login'

 class App extends Component {

  render(){
    return (
      <div>

       <h1>login with facebook</h1>
       <Facebook />
      </div>

    );
  }

}

export default App;
