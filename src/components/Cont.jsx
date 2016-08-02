import React from 'react';

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

import AppBar from './AppBar.jsx'
import Button from './Button.jsx'
import Card from './Card.jsx'



const Cont = React.createClass({
  render(){
    return(
      <div>
        <AppBar />
        <Button label="Touch Me"/>
        <Card />
      </div>
    );
  }
});

module.exports = Cont;
