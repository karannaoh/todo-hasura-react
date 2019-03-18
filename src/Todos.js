import React from 'react';
import gql from 'graphql-tag'
import { Query } from 'react-apollo';
import Del from './DeleteTodo'
import { Alert } from 'reactstrap';
const todo = gql` 
  query { 
  todo{
    id
    todo
  }
}
`

const Todos = () => {

    // <p className="center">You have no todo's left, yay!</p>
  
  return (
    <Query query={todo}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      if (data.todo.length){
        
    return data.todo.map(({ id, todo}) => (
      
      <div className="collection-item" key={id}>
      <Alert key={id} color="primary">
      <span  key={todo.id} > {todo}  <Del id={id} /> </span>
      </Alert>

      </div>
    ));
    
  
  }
      else{
        return(<div> get some work boi...</div>
          )
         }
      
    }}
  </Query>
  )
}

export default Todos;