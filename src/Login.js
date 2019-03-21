import React, { Component } from 'react';
import './App.css';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo"


class Login extends Component{

render(){
  return(<div>

    <button onClick={()=>this.props.auth.login()}> Login</button>
  </div>)
}


}


export default Login;