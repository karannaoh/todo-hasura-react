import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { FormGroup, FormControl, Button, InputGroup, Form } from 'react-bootstrap';
const ADD_TODO = gql`
  mutation AddTodo($todo: String!) {
    insert_todo(objects:[{todo:$todo}]){
      returning{
        id
      }
    }
  }
`;
const todo = gql` 
  query { 
  todo{
    id
    todo
  }
}
`
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
    
    addTodo({ variables: { todo: this.state.content},refetchQueries:[{query:todo}]})
    this.state.content="";
    
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
          
        </form>
      </div>
       )}
       </Mutation>
    )
  }
}


export default AddTodo
