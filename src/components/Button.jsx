import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Button = React.createClass({
  render(){
    return(
      <RaisedButton label={this.props.label} />
    );
  }
});

module.exports = Button;
