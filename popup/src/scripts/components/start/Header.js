import React from 'react';

export default props => {
  var { containerStyle, headerStyle } = styles;
  return (
    <div style={containerStyle}>
      <h1 style={headerStyle}>Search</h1>
    </div>
  );
};

var styles = {
  containerStyle: {
    border: '0px solid black'
  },
  headerStyle: {
    color: '#8C56F3',
    textAlign: 'center',
    textShadow: '2px 2px white',
    fontSize: '40px'
  }
};
