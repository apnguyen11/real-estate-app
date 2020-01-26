import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Businesses from './components/businesses/businesses'

 class App extends Component {

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
  
          <Businesses/>
       
        </header>
      </div>
    );
  }

}

export default App;
