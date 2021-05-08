import React from 'react';
import ReactDOM from 'react-dom';
import  { ExpenseTrackerApp } from './ExpenseTrackerApp'

import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <ExpenseTrackerApp/>,
  document.getElementById('root')
);

reportWebVitals();
