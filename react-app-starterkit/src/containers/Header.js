import React, {Component} from 'react';
import { connect } from 'react-redux';
import {PropTypes} from 'prop-types';
import {Link} from 'react-router-dom';
import {push} from "connected-react-router";
import NavLink from './NavLink';
import { selectRoot, logout } from "react-formio";
import {AuthConfig} from "../config";

const Header = class extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  };

  render() {
    const {auth, logout} = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img className="logo" alt="Form.io" src="https://portal.form.io/images/formio-logo.png" height="25px" />
          </Link>
          <ul className="nav navbar-nav mr-auto">
            
          { auth.authenticated ? (
            <NavLink to="/patients" role="navigation link" className="nav-link">
              <span className="fa fa-users" />&nbsp;
              Patsiendid
            </NavLink>
             ) : null }

            { auth.authenticated ? (
              <NavLink to="/form" role="navigation link" className="nav-link">
                <i className="fa fa-wpforms"></i>&nbsp;
                Küsimustikud
              </NavLink>
            ) : null }

          </ul>
          <ul className="nav navbar-nav ml-auto">
            { auth.authenticated ? (
              <li className="nav-item">
                <span className="nav-link-loginout" role="navigation link" onClick={logout}>
                   <strong>{ auth.user.data.email } </strong>
                  <span className="fa fa-sign-out" />&nbsp;
                  <span className="nav-link-loginout">Logi välja</span>
                </span>
              </li>
            ) : (
              <NavLink to="/auth" role="navigation link" className="nav-link">
                Login | Register
              </NavLink>
            )}
          </ul>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: selectRoot('auth', state)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
      dispatch(push(AuthConfig.anonState));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
