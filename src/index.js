
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeMainRoutes } from './Routes';
import registerServiceWorker from './registerServiceWorker';
// import registerServiceWorker from './registerServiceWorker';
const routes = makeMainRoutes();
ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();