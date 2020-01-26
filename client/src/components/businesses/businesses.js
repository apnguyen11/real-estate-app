import React, { Component } from 'react';
import './businesses.css';

class Businesses extends Component {
    constructor(){
        super();
        this.state = {
          businesses: []
        }
      }
   
      componentDidMount(){
        fetch('/api/businesses', {
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }   
            })
        .then(res => res.json())
        .then(businesses => this.setState({businesses: businesses}, () => console.log('Businesses fetched', businesses)))
        .catch(() => console.log("error"))
    }
      

    render(){
    return (
      <div>
          <h2>Businesses</h2>
          <ul>
              {this.state.businesses.map(business => 
                <li key={business.id}>{business.name}{business.location}</li>
                )}
          </ul>
      </div>
    );
    }
}

export default Businesses;
