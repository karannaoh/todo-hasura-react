import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gql from "graphql-tag";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo"
import Todos from "./Todos"
import AddTodo from "./AddTodo"
import Auth from './Auth';

const ACCESS_TOKEN = localStorage.getItem('id_token');

const client = new ApolloClient({
  uri: "https://naohtest.herokuapp.com/v1alpha1/graphql",
  headers: {
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
}
});


class App extends Component {
  

	render() {
    const { isAuthenticated } = this.props.auth;
   
    return (
      isAuthenticated() && (
        <ApolloProvider client={client}>
        <div className="todo-app container">
          <h1 className="center blue-text">Todo's</h1>
          <button onClick={()=>window.open('logout',"_self")}>Logout</button>
          <Todos deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} />
        </div>
        </ApolloProvider>
      )
    );
  }
}

export default App;
