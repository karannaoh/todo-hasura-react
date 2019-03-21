import React, { Component } from 'react';
import './App.css';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo"
import Todos from "./Todos"
import AddTodo from "./components/AddTodo"
import Button from 'react-bootstrap/Button'

const ACCESS_TOKEN = localStorage.getItem('id_token');

const client = new ApolloClient({
  uri: "https://example.herokuapp.com/v1alpha1/graphql",
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
          <h1  className=" title center blue-text">Todo's</h1>
          
          <Button onClick={()=>window.open('logout',"_self")} variant="success" className="float-right">Logout</Button>
          <br/><br/>
          <Todos deleteTodo={this.deleteTodo} />
          <AddTodo addTodo={this.addTodo} />
          <div> ***completed task are green and incomplete are yellow***</div>
        </div>
        
        </ApolloProvider>
      )
    );
  }
}

export default App;
