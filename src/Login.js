import React, { Component } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

class Login extends Component{

render(){
  return(
    <div>
    <Card className="text-center">
    <Card.Header> <h1>TODO</h1></Card.Header>
    <Card.Body>
      <h1> Its a Todo app "React,Graphql,Hasura and Auth0"</h1>
      <Card.Text>
        Login to try it out and read this blog to learn more....
      </Card.Text>
      <Button variant="primary" onClick={()=>this.props.auth.login()}>Login</Button>
    </Card.Body>
    
  </Card>
  <div id="footer" className="footer-copyright text-center">
  <Card.Footer className="text-muted">Made by <a href="https://karannaoh.github.io">naoh</a></Card.Footer>
  </div>
</div>
  )
}


}


export default Login;