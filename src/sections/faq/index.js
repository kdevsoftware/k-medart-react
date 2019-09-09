import React, { Component } from 'react';

import Cardiogram2 from '../../images/cardiogram-2.png';
import Hospital from '../../images/hospital.png';

class Faq extends Component {
  render() {
    return (
      <div className="faq-stuff">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Faq & Stuff</h2>
            </div>

            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
              <div className="accordion-wrap type-accordion">
                <h3 className="entry-title d-flex justify-content-between align-items-center active">
                  Elit mir congue ligula et efficitur pellentesqu
                  <span className="arrow-r"></span>
                </h3>

                <div className="entry-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Donec malesuada lorem
                    maximus mauris.
                  </p>
                </div>

                <h3 className="entry-title d-flex justify-content-between align-items-center">
                  Pulvinar elit mi. Integer congue ligula et efficitur{' '}
                  <span className="arrow-r"></span>
                </h3>

                <div className="entry-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Donec malesuada lorem
                    maximus mauris.
                  </p>
                </div>

                <h3 className="entry-title d-flex justify-content-between align-items-center">
                  Pellentesque pulvinar elit mi. Integer congue
                  <span className="arrow-r"></span>
                </h3>

                <div className="entry-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec malesuada lorem maximus mauris. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Donec malesuada lorem
                    maximus mauris.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6 mt-5 mt-lg-0">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="professional-box">
                    <h2 className="d-flex align-items-center">Professional</h2>

                    <img src={Cardiogram2} alt="" />

                    <p>
                      Lorem ipsum dolor sit amet, cons ectetur adipiscing elit.
                      Donec males uada lorem.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="quality-box">
                    <h2 className="d-flex align-items-center">Quality</h2>

                    <img src={Hospital} alt="" />

                    <p>
                      Lorem ipsum dolor sit amet, cons ectetur adipiscing elit.
                      Donec males uada lorem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Faq;
