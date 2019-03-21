import React, { Component } from 'react';

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