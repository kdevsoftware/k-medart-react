import React, { Component } from 'react';

import About from '../../images/about.jpg';

class History extends Component {
  render() {
    return (
      <div className="med-history">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-12 col-lg-6">
              <h2>MedArt History</h2>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                malesuada lorem maximus mauris scelerisque, at rutrum nulla
                dictum. Ut ac ligula sapien. Suspendisse cursus faucibus
                finibus. Curabitur ut augue finibus, luctus tortor at, ornare
                erat. Nulla facilisi. Sed est risus, laoreet et quam non,
                viverra accumsan leo. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Donec malesuada lorem maximus mauris
                scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.
                Suspendisse cursus faucibus finibus. Curabitur ut augue finibus,
                luctus tortor at, ornare erat.{' '}
              </p>

              <a className="d-inline-block button gradient-bg" href="#">
                Read More
              </a>
            </div>

            <div className="col-12 col-lg-6 mt-5 mt-lg-0">
              <img className="responsive" src={About} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default History;
