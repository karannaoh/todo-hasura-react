import React from 'react';
import { Route, Router } from 'react-router-dom';
import Callback from './Callback';
import Auth from './Auth';
import history from './history';
import Login from './Login'
import App from './App';
import Logout from './Logout'
const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const route = () => {

  return (
       
      <Router history={history}>
        <div>
          <Route exact path="/app" render={(props) => <App   auth={auth} {...props} />} />
          <Route exact path="/" render={(props) => <Login   auth={auth} {...props}/>} />
          <Route exact path="/logout" render={(props) => <Logout   auth={auth} {...props}/>} />
          <Route exact path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
                     
        </div>
      </Router>
  );
}
