import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeText } from '../actions';

export class App extends Component {
  onClick() {
    this.props.dispatch(changeText('working'));
  }

  render() {
    return (
      <React.Fragment>
        <p>{this.props.text}</p>
        <button onClick={() => this.onClick()}>Test Redux</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  text: state.text
});

export default connect(mapStateToProps)(App);