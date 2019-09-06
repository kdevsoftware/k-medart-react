import React, { Component } from 'react';

import Logo from '../../images/logo.png';

class Footer extends Component {
  render() {
    return (
      <footer class="site-footer">
        <div class="footer-widgets">
          <div class="container">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-4">
                <div class="foot-about">
                  <h2>
                    <a href="#">
                      <img src={Logo} alt=""></img>
                    </a>
                  </h2>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec malesuada lorem maximus mauris scelerisque, at rutrum
                    nulla dictum. Ut ac ligula sapien.
                  </p>

                  <p class="copyright">
                    Copyright &copy;
                    {new Date().getFullYear()} All rights reserved | This
                    template is made with{' '}
                    <i
                      class="fa fa-heart"
                      aria-hidden="true"
                      style={{ color: '#ff7f7f' }}
                    ></i>{' '}
                    by{' '}
                    <a href="#" target="_blank">
                      kdevsoftware
                    </a>
                  </p>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                <div class="foot-contact">
                  <h2>Contact</h2>

                  <ul class="p-0 m-0">
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

              <div class="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                <div class="foot-links">
                  <h2>Usefull Links</h2>

                  <ul class="p-0 m-0">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Departments</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Testimonials</a>
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
