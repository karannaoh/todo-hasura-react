import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Logout extends Component {
  
  
    render() {
        
        return (
        
      <div>Bye Bye........
          {this.props.auth.logout()}
      </div>
    );
  }
}

export default Logout;