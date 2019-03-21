import React from 'react';
import { Mutation } from 'react-apollo';
import Button from 'react-bootstrap/Button'
import MdDone from "react-icons/lib/md/done"
import {MARK_DONE, TODO} from './queries'





const Mark = (id) => {
    // <p className="center">You have no todo's left, yay!</p>
  return (
    <Mutation mutation={MARK_DONE}>
        {(markdone, { data }) => (
        <span data-toggle="tooltip" title="Delete Todo" className="float-right mt-n2" onClick={e=> {markdone({ variables: id, refetchQueries: [{ query: TODO }] })}}>
          <Button variant="success"><MdDone/></Button>
         
        </span>
         )}
         </Mutation>
  )
}

export default Mark;