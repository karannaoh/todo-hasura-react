import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import gql from "graphql-tag";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo"
import Todos from "./Todos"
import AddTodo from "./AddTodo"
const client = new ApolloClient({
  uri: "http://naohtest.herokuapp.com/v1alpha1/graphql",
  headers: {
    'Authorization': ``,
}
});

 

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  deleteTodo = (id) => {
    console.log(id)
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
 

	render() {
    return (
      <ApolloProvider client={client}>
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
      </ApolloProvider>
    );
  }
}

export default App;
