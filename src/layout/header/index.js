import React, { Component } from 'react';

import Logo from '../../images/logo.png';
import EmergencyCall from '../../images/emergency-call.png';

class Header extends Component {
  render() {
    return (
      <header class="site-header">
        <div class="nav-bar">
          <div class="container">
            <div class="row">
              <div class="col-12 d-flex flex-wrap justify-content-between align-items-center">
                <div class="site-branding d-flex align-items-center">
                  <a class="d-block" href="index.html" rel="home">
                    <img class="d-block" src={Logo} alt="logo" />
                  </a>
                </div>

                <nav class="site-navigation d-flex justify-content-end align-items-center">
                  <ul class="d-flex flex-column flex-lg-row justify-content-lg-end align-items-center">
                    <li class="current-menu-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About us</a>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="news.html">News</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>

                    <li class="call-btn button gradient-bg mt-3 mt-md-0">
                      <a
                        class="d-flex justify-content-center align-items-center"
                        href="#"
                      >
                        <img src={EmergencyCall} /> +34 586 778 8892
                      </a>
                    </li>
                  </ul>
                </nav>

                <div class="hamburger-menu d-lg-none">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
