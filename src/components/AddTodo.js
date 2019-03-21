import React, { Component } from 'react'
import { Mutation } from 'react-apollo';

import {ADD_TODO, TODO} from './queries'

class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit = (addTodo) => {
    // call function to add a todo
    if(this.state.content){addTodo({ variables: { todo: this.state.content},refetchQueries:[{query:TODO}]})
    this.setState({
      content: ""
    });}
    
    
  }
  render() {
    return (
      <Mutation mutation={ADD_TODO}>
      {(addTodo, { data }) => (
      <div>
        <form onSubmit={e => {
                            e.preventDefault();
                            this.handleSubmit(addTodo);
                        }}
        >
          <label>Add a new todo:</label>
         
          <input type="text" onChange={this.handleChange} value={this.state.content} />
          <input type="submit"/>
        </form>
      </div>
       )}
       </Mutation>
    )
  }
}


export default AddTodo
