import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../start/Header';
import Logo from '../start/Logo';
import Save from '../start/Save';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  render() {
    var { mainContainerStyle } = styles;
    return (
      <div style={mainContainerStyle}>
        <Logo />
        <Save />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(App);

var styles = {
  mainContainerStyle: {
    border: '2px solid #5F469F',
    backgroundImage: 'url(https://wallpapercave.com/wp/uoyx3kz.jpg)',
    height: '500px',
    width: '400px'
  }
};
