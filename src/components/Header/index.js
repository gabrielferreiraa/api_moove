'use strict';

import React, { Component, PropTypes } from 'react';
import { white } from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import AppBar from 'material-ui/AppBar';
import Menu from 'material-ui/svg-icons/navigation/menu';

class Header extends Component {
  render () {
    const { styles, handleChangeDrawer, drawerOpen, handleLogout } = this.props;

    const bgApp = {
      bg: {
        backgroundColor: '#333',
        fontFamily: 'Roboto',
        position: 'fixed',
        top: 0,
        overflow: 'hidden'
      },
      bt: {
        backgroundColor: '#E76049',
        color: '#fff',
        marginRight: drawerOpen ? 255 : 2.5
      },
      icon: {
        transform: drawerOpen ? 'rotate(90deg)' : 'rotate(0)'
      }
    };

    return (
      <AppBar
        style={{ ...styles, ...bgApp.bg }}
        iconElementLeft={
          <IconButton
            style={bgApp.icon}
            onClick={handleChangeDrawer}
          >
            <Menu color={white} />
          </IconButton>
        }
        iconElementRight={
          <IconButton
            style={bgApp.bt}
            onClick={handleLogout}
          >
            <i className='material-icons' style={{ color: '#89949B' }}>exit_to_app</i>
          </IconButton>
        }
        title='Prêmio Totall' />
    );
  }
}

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeDrawer: PropTypes.func.isRequired
};

export default Header;
