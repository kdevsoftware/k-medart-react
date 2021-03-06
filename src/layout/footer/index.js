import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../images/logo.png';

class Footer extends Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="footer-widgets">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="foot-about">
                  <h2>
                    <a href="http://localhost:3000/">
                      <img src={Logo} alt=""></img>
                    </a>
                  </h2>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec malesuada lorem maximus mauris scelerisque, at rutrum
                    nulla dictum. Ut ac ligula sapien.
                  </p>

                  <p className="copyright">
                    Copyright &copy;
                    {new Date().getFullYear()} All rights reserved | This
                    template is made with{' '}
                    <i
                      className="fa fa-heart"
                      aria-hidden="true"
                      style={{ color: '#ff7f7f' }}
                    ></i>{' '}
                    by <a href="http://localhost:3000/">kdevsoftware</a>
                  </p>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                <div className="foot-contact">
                  <h2>Contact</h2>

                  <ul className="p-0 m-0">
                    <li>
                      <span>Addtress:</span>Mitlton Str. 26-27 London UK
                    </li>
                    <li>
                      <span>Phone:</span>+53 345 7953 32453
                    </li>
                    <li>
                      <span>Email:</span>yourmail@gmail.com
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                <div className="foot-links">
                  <h2>Usefull Links</h2>

                  <ul className="p-0 m-0">
                    <li>
                      <Link to="">Home</Link>
                    </li>
                    <li>
                      <Link to="about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="services">Services</Link>
                    </li>
                    <li>
                      <Link to="news">News</Link>
                    </li>
                    <li>
                      <Link to="contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
