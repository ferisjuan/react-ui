import 'babel-polyfill';
import React from 'react'
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Cont from './components/Cont.jsx';
import Typography from 'typography';
import lincolnTheme from 'typography-theme-lincoln';

const typography = new Typography(lincolnTheme);

// Output CSS as string.
typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()

const App = () => (
  <MuiThemeProvider>
    <Cont />
  </MuiThemeProvider>
);

render(<App />, document.getElementById('App'));
