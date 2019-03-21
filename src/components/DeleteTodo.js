import React from 'react';
import { Mutation } from 'react-apollo';
import Button from 'react-bootstrap/Button'
import {DEL_TODO, TODO} from './queries'



const Del = (id) => {
    // <p className="center">You have no todo's left, yay!</p>
  return (
    <Mutation mutation={DEL_TODO}>
        {(deltodo, { data }) => (
        <span data-toggle="tooltip" title="Delete Todo" className="float-right mt-n2 ml-4" onClick={e=> {deltodo({ variables: id, refetchQueries: [{ query: TODO }] })}}>
          <Button variant="danger">X</Button>
         
        </span>
         )}
         </Mutation>
  )
}

export default Del;