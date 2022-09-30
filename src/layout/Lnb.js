import React, { Component } from 'react';
import danggnMarketLogo from '../img/danggn-market-logo1.jpeg';
import { withKeycloak } from '@react-keycloak/web';

class Lnb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      userEmail: '',
    };
  }

  componentDidMount() {}

  render() {
    const lnbStyle = {
      zIndex: 3,
      width: '250px',
    };

    const menuStyle = {
      fontWeight: 'bold',
    };

    const logoStyle = {
      width: '200px',
    };

    const { keycloak, keycloakInitialized } = this.props;

    if (!keycloakInitialized) {
      return <h3>Loading ... !!!</h3>;
    }

    return (
      <nav
        className="w3-sidebar w3-bar-block w3-white w3-top"
        style={lnbStyle}
        id="mySidebar"
      >
        <div className="w3-container w3-display-container w3-padding-16">
          <h3 className="w3-wide">
            <a href="/" className="w3-bar-item w3-button">
              <img
                src={danggnMarketLogo}
                alt="danggn-markget-logo1"
                style={logoStyle}
              />
            </a>
          </h3>
        </div>
        <div className="w3-padding-64 w3-large w3-text-grey" style={menuStyle}>
          <a href="/" className="w3-bar-item w3-button">
            Home
          </a>
          <a href="/list" className="w3-bar-item w3-button">
            Product List
          </a>
          {keycloak.authenticated ? (
            <a href="/register" className="w3-bar-item w3-button">
              Register product
            </a>
          ) : (
            <div>
              <a
                onClick={() => keycloak.login()}
                className="w3-bar-item w3-button"
              >
                Register product
              </a>
            </div>
          )}
          {keycloak.authenticated && keycloak.hasRealmRole('admin') ? (
            <a href="/register-app-push" className="w3-bar-item w3-button">
              Register App Push
            </a>
          ) : (
            <div></div>
          )}
          {keycloak.authenticated ? (
            <a
              onClick={() => keycloak.logout()}
              className="w3-bar-item w3-button"
            >
              Logout
            </a>
          ) : (
            <div>
              <a
                onClick={() => keycloak.login()}
                className="w3-bar-item w3-button"
              >
                Login / Signup
              </a>
            </div>
          )}
        </div>
        <a
          href="https://github.com/danggn"
          className="w3-bar-item w3-button w3-padding"
        >
          https://github.com/danggn
        </a>
        <a
          href="https://github.com/jmjmjames"
          className="w3-bar-item w3-button w3-padding"
        >
          chungjm0711@gmail.com
        </a>
      </nav>
    );
  }
}

export default withKeycloak(Lnb);
