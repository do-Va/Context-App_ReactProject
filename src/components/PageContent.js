import React, { Component } from 'react';

export default class PageContent extends Component {
  render() {
    const styles = {
      background: '#fff',
      height: '100vh',
      width: '100%',
    };

    return <div style={styles}>{this.props.children}</div>;
  }
}
