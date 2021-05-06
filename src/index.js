import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import  { ExpenseTrackerApp } from './ExpenseTrackerApp'

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ExpenseTrackerApp/>,
  document.getElementById('root')
);

reportWebVitals();
