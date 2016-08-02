import React from 'react';
import AppBar from 'material-ui/AppBar'

const MenuBar = React.createClass({
  render(){
    return(
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />  
    );
  }
});

export default MenuBar
