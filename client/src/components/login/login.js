import React, { Component } from 'react';

class Login extends Component {

    componentDidMount(){
        fetch('/', {
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                }   
            })
        .then(res => res.json())
        .catch(() => console.log("error"))
    }
render(){
    return (
        <div>
              <a>Sign in with Facebook</a>
        </div>
    )   
    }
}

export default Login
