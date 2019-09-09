import React, { Component } from 'react';

import Cardiogram from '../../images/cardiogram.png';
import Stomach2 from '../../images/stomach-2.png';
import BloodSample2 from '../../images/blood-sample-2.png';
import Teeth from '../../images/teeth.png';
import Stretcher from '../../images/stretcher.png';
import Scanner from '../../images/scanner.png';
import Bones from '../../images/bones.png';
import BloodDonation2 from '../../images/blood-donation-2.png';
import Glasses from '../../images/glasses.png';

class Departments extends Component {
  render() {
    return (
      <div className="our-departments">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="our-departments-wrap">
                <h2>Our Departments</h2>

                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="our-departments-cont">
                      <header className="entry-header d-flex flex-wrap align-items-center">
                        <img src={Cardiogram} alt="" />

                        <h3>Cardioology</h3>
                      </header>

                      <div className="entry-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Donec malesuada lorem maximus mauris.
                        </p>
                      </div>

                      <footer className="entry-footer">
                        <a href="#">read more</a>
                      </footer>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="our-departments-cont">
                      <header className="entry-header d-flex flex-wrap align-items-center">
                        <img src={Stomach2} alt="" />

                        <h3>Gastroenterology</h3>
                      </header>

                      <div className="entry-content">
                        <p>
                          Donec malesuada lorem maximus mauris scelerisque, at
                          rutrum nulla dictum. Ut ac ligula sapien.
                        </p>
                      </div>

                      <footer className="entry-footer">
                        <a href="#">read more</a>
                      </footer>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="our-departments-cont">
                      <header className="entry-header d-flex flex-wrap align-items-center">
                        <img src={BloodSample2} alt="" />

                        <h3>Medical Lab</h3>
                      </header>

                      <div className="entry-content">
                        <p>
                          Lorem maximus mauris scelerisque, at rutrum nulla
                          dictum. Ut ac ligula sapien. Suspendisse cursus.
                        </p>
                      </div>

                      <footer className="entry-footer">
                        <a href="#">read more</a>
                      </footer>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="our-departments-cont">
                      <header className="entry-header d-flex flex-wrap align-items-center">
                        <img src={Teeth} alt="" />

                        <h3>Dental Care</h3>
                      </header>

                      <div className="entry-content">
                        <p>
                          Donec malesuada lorem maximus mauris scelerisque, at
                          rutrum nulla dictum. Ut ac ligula sapien.
                        </p>
                      </div>

                      <footer className="entry-footer">
                        <a href="#">read more</a>
                      </footer>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="our-departments-cont">
                      <header className="entry-header d-flex flex-wrap align-items-center">
                        <img src={Stretcher} alt="" />

                        <h3>Surgery</h3>
                      </header>

                      <div className="entry-content">
                        <p>
                          Lorem maximus mauris scelerisque, at rutrum nulla
                          dictum. Ut ac ligula sapien. Suspendisse cursus.
                        </p>
                      </div>

                      <footer className="entry-footer">
                        <a href="#">read more</a>
                      </footer>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4">
                    <div className="our-departments-cont">
                      <header className="entry-header d-flex flex-wrap align-items-center">
                        <img src={Scanner} alt="" />

                        <h3>Neurology</h3>
                      </header>

                      <div className="entry-content">
                        <p>
                          Donec malesuada lorem maximus mauris scelerisque, at
                          rutrum nulla dictum. Ut ac ligula sapien.
                        </p>
                      </div>

                      <footer className="entry-footer">
                        <a href="#">read more</a>
                      </footer>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4 mb-md-0">
                    <div className="our-departments-cont">
                      <header className="entry-header d-flex flex-wrap align-items-center">
                        <img src={Bones} alt="" />

                        <h3>Orthopaedy</h3>
                      </header>

                      <div className="entry-content">
                        <p>
                          Lorem maximus mauris scelerisque, at rutrum nulla
                          dictum. Ut ac ligula sapien. Suspendisse cursus.
                        </p>
                      </div>

                      <footer className="entry-footer">
                        <a href="#">read more</a>
                      </footer>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4 mb-lg-0">
                    <div className="our-departments-cont">
                      <header className="entry-header d-flex flex-wrap align-items-center">
                        <img src={BloodDonation2} alt="" />

                        <h3>Pediatry</h3>
                      </header>

                      <div className="entry-content">
                        <p>
                          Donec malesuada lorem maximus mauris scelerisque, at
                          rutrum nulla dictum. Ut ac ligula sapien.
                        </p>
                      </div>

                      <footer className="entry-footer">
                        <a href="#">read more</a>
                      </footer>
                    </div>
                  </div>

                  <div className="col-12 col-md-6 col-lg-4 mb-0">
                    <div className="our-departments-cont">
                      <header className="entry-header d-flex flex-wrap align-items-center">
                        <img src={Glasses} alt="" />

                        <h3>Ophthalmology</h3>
                      </header>

                      <div className="entry-content">
                        <p>
                          Lorem maximus mauris scelerisque, at rutrum nulla
                          dictum. Ut ac ligula sapien. Suspendisse cursus.
                        </p>
                      </div>

                      <footer className="entry-footer">
                        <a href="#">read more</a>
                      </footer>
                    </div>
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

export default Departments;
