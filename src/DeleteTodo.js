import React from 'react';
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo';

const DEL_TODO=gql`
mutation AddTodo($id: Int!) {
    delete_todo(where:{id:{_eq:$id}}){
        affected_rows
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

const Del = (id) => {
    // <p className="center">You have no todo's left, yay!</p>
  return (
    <Mutation mutation={DEL_TODO}>
        {(deltodo, { data }) => (
        <span onClick={e=> {deltodo({ variables: id, refetchQueries: [{ query: todo }] })}}>
         X
        </span>
         )}
         </Mutation>
  )
}

export default Del;