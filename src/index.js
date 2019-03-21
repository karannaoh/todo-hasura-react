
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { route } from './Routes';
import registerServiceWorker from './registerServiceWorker';
// import registerServiceWorker from './registerServiceWorker';
const routes = route();
ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();