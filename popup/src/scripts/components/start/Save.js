import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import action to use "FETCH_FAVORITES"
import { fetchFavorites } from '../../../../../event/src/actions/index';

class Save extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onInputChange(event) {
    // Save current term in component state
    console.log(event.target.value);
    this.setState({ term: event.target.value });
  }

  onSave(event) {
    // Call fetchFavorites action (Redux)
    console.log('Save Button was pressed');
    console.log('The current term is:');
    console.log(this.state.term);
    this.props.fetchFavorites(this.state.term);
  }

  render() {
    var { flexContainerStyle, buttonStyle, labelStyle, inputStyle } = styles;
    return (
      <div>
        <div>
          <h1 style={labelStyle}>Username</h1>
          <div style={flexContainerStyle}>
            <input onChange={this.onInputChange} style={inputStyle} />
          </div>
        </div>
        <div style={flexContainerStyle}>
          <button onClick={this.onSave} style={buttonStyle}>
            Go!
          </button>
        </div>
      </div>
    );
  }
}

var styles = {
  buttonStyle: {
    width: '120px',
    height: '50px',
    marginTop: '30px',
    fontSize: '30px',
    backgroundColor: '#5F469F',
    color: 'white',
    border: 'none',
    borderRadius: '5px'
  },
  flexContainerStyle: {
    border: '0px solid black',
    display: 'flex',
    justifyContent: 'center'
  },
  labelStyle: {
    textAlign: 'center',
    fontSize: '20px',
    marginTop: '60px',
    marginBottom: '10px'
  },
  inputStyle: {
    height: '25px',
    width: '200px',
    fontSize: '20px',
    padding: '5px',
    textAlign: 'center'
  }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchFavorites }, dispatch);
}

export default connect(null, mapDispatchToProps)(Save);
