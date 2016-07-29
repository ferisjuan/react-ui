import React from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from './Button.jsx'



const Cont = React.createClass({
  render(){
    return(
      <MuiThemeProvider>
        <Button />
      </MuiThemeProvider>
    );
  }
});

module.exports = Cont;
