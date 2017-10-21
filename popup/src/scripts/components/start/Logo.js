import React from 'react';

export default props => {
  var { containerStyle, logoStyle } = styles;
  return (
    <div style={containerStyle}>
      <img
        style={logoStyle}
        src="https://vignette.wikia.nocookie.net/logopedia/images/2/26/Twitch_logo.svg/revision/latest?cb=20140727180649"
      />
    </div>
  );
};

var styles = {
  containerStyle: {
    display: 'flex',
    justifyContent: 'center',
    border: '0px solid black'
  },
  logoStyle: {
    width: '300px',
    height: '100px',
    marginTop: '70px'
  }
};
