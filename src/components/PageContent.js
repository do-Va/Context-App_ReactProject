import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default class PageContent extends Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkMode } = this.context;
    const styles = {
      background: isDarkMode ? '#222' : '#fff',
      minHeight: '100vh',
      width: '100%',
    };

    return <div style={styles}>{this.props.children}</div>;
  }
}
