import 'babel-polyfill';
// import $ from 'jquery';
import React from 'react'
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Cont from './components/Cont.jsx'

const App = () => (
  <MuiThemeProvider>
    <Cont />
  </MuiThemeProvider>
);

render(<App />, document.getElementById('App'));
