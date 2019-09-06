import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

import Banner from './banner';

import Logo from '../../images/logo.png';
import EmergencyCall from '../../images/emergency-call.png';

class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <div className="nav-bar">
          <div className="container">
            <div className="row">
              <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
                <div className="site-branding d-flex align-items-center">
                  <a href="#" className="">
                    <img className="d-block" src={Logo} alt="logo" />
                  </a>
                </div>

                <nav className="site-navigation d-flex justify-content-end align-items-center">
                  <Nav className="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center">
                    <NavItem>
                      <NavLink href="#">Home</NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink href="#">About us</NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink href="#">Services</NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink href="#">News</NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink href="#">Contact</NavLink>
                    </NavItem>

                    <NavItem className="call-btn button gradient-bg mt-3 mt-md-0">
                      <NavLink
                        href="#"
                        className="d-flex justify-content-center align-items-center"
                      >
                        <img src={EmergencyCall} alt="" /> +34 586 778 8892
                      </NavLink>
                    </NavItem>
                  </Nav>
                </nav>
              </div>
            </div>
          </div>
        </div>
      
        <Banner />
      </header>
    );
  }
}

export default Header;
