import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { withLanguageContext } from '../contexts/LanguageContext';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Switch,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Search } from '@material-ui/icons';

import styles from './styles/NavBarStyles';

const content = {
  english: {
    search: 'Search',
    flag: '🏴',
  },
  french: {
    search: 'Chercher',
    flag: '🎌',
  },
  spanish: {
    search: 'Buscar',
    flag: '🏳‍🌈',
  },
};

class Navbar extends Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkMode, toggleTheme } = this.context;
    const { classes } = this.props;
    const { language } = this.props.languageContext;
    const { search, flag } = content[language];

    return (
      <div className={classes.root}>
        <AppBar position="static" color={isDarkMode ? 'default' : 'primary'}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit">
              <span>{flag}</span>
            </IconButton>
            <Typography className={classes.title} variant="h6" color="inherit">
              App Title
            </Typography>
            <Switch onChange={toggleTheme} />
            <div className={classes.grow} />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <Search />
              </div>
              <InputBase
                placeholder={search}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withLanguageContext(withStyles(styles)(Navbar));
