import React, { Component } from 'react';

import EmergencyCall from '../../images/emergency-call.png';

class Boxes extends Component {
  render() {
    return (
      <div className="homepage-boxes">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <div className="opening-hours">
                <h2 className="d-flex align-items-center">Opening Hours</h2>

                <ul className="p-0 m-0">
                  <li>
                    Monday - Thursday <span>8.00 - 19.00</span>
                  </li>
                  <li>
                    Friday <span>8.00 - 18.30</span>
                  </li>
                  <li>
                    Saturday <span>9.30 - 17.00</span>
                  </li>
                  <li>
                    Sunday <span>9.30 - 15.00</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
              <div className="emergency-box">
                <h2 className="d-flex align-items-center">Emergency</h2>

                <div className="call-btn button gradient-bg">
                  <a
                    className="d-flex justify-content-center align-items-center"
                    href="#"
                  >
                    <img src={EmergencyCall} /> +34 586 778 8892
                  </a>
                </div>

                <p>
                  Lorem ipsum dolor sit amet, cons ectetur adipiscing elit.
                  Donec males uada lorem maximus mauris sceler isque, at rutrum
                  nulla.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-5 mt-5 mt-lg-0">
              <div className="appointment-box">
                <h2 className="d-flex align-items-center">
                  Make an Appointment
                </h2>

                <form className="d-flex flex-wrap justify-content-between">
                  <select className="select-department">
                    <option value="value1">Select Department</option>
                    <option value="value2">Select Department 1</option>
                    <option value="value3">Select Department 2</option>
                  </select>

                  <select className="select-doctor">
                    <option>Select Doctor</option>
                    <option>Select Doctor 1</option>
                    <option>Select Doctor 2</option>
                  </select>

                  <input type="text" placeholder="Name" />

                  <input type="number" placeholder="Phone No" />

                  <input
                    className="button gradient-bg"
                    type="submit"
                    value="Boom Appoitnment"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Boxes;
