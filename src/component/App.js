import React, { Component } from 'react';
import Navbar from './Navbar';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Form />
      </React.Fragment>
    );
  }
}

export default App;
