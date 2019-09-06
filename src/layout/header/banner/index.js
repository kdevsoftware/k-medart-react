import React, { Component } from 'react';
import Swiper from 'react-id-swiper';

import './style.css';

class Banner extends Component {
  render() {
    return (
      <Swiper>
        <div
          className="hero-content-wrap hero-1"
        >
          <div className="hero-content-overlay position-absolute w-100 h-100">
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                  <header className="entry-header">
                    <h1>
                      The Best <br />
                      Medical Services
                    </h1>
                  </header>

                  <div className="entry-content mt-4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris scelerisque, at
                      rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                      cursus faucibus finibus.
                    </p>
                  </div>

                  <footer className="entry-footer d-flex flex-wrap align-items-center mt-4">
                    <a  href="http://localhost:3000/" className="button gradient-bg">
                      Read More
                    </a>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hero-content-wrap  hero-2"
        >
          <div className="hero-content-overlay position-absolute w-100 h-100">
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                  <header className="entry-header">
                    <h1>
                      The Best <br />
                      Medical Services
                    </h1>
                  </header>

                  <div className="entry-content mt-4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris scelerisque, at
                      rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                      cursus faucibus finibus.
                    </p>
                  </div>

                  <footer className="entry-footer d-flex flex-wrap align-items-center mt-4">
                    <a  href="http://localhost:3000/" className="button gradient-bg">
                      Read More
                    </a>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="hero-content-wrap hero-3"
        >
          <div className="hero-content-overlay position-absolute w-100 h-100">
            <div className="container h-100">
              <div className="row h-100">
                <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-start">
                  <header className="entry-header">
                    <h1>
                      The Best <br />
                      Medical Services
                    </h1>
                  </header>

                  <div className="entry-content mt-4">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris scelerisque, at
                      rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                      cursus faucibus finibus.
                    </p>
                  </div>

                  <footer className="entry-footer d-flex flex-wrap align-items-center mt-4">
                    <a  href="http://localhost:3000/" className="button gradient-bg">
                      Read More
                    </a>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Swiper>
    );
  }
}

export default Banner;
