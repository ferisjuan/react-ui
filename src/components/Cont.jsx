import React from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Button from './Button.jsx'
import Card from './Card.jsx'



const Cont = React.createClass({
  render(){
    return(
      <MuiThemeProvider>
        <Card />
      </MuiThemeProvider>
    );
  }
});

module.exports = Cont;
