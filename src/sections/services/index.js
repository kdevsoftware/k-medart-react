import React, { Component } from 'react';

class Services extends Component {
  render() {
    return (
      <div className="quality-services">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Only Top Quality Services</h2>

              <div className="row">
                <div className="col-12 col-md-6">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec malesuada lorem ma ximus mauris scelerisque, at rutrum
                    nulla dictum. Ut ac ligula sapien. Suspendisse cursus
                    faucibus finibus. Curabitur ut augue finibus, luctus tortor
                    at, ornare erat. Nulla facilisi. Sed est risus, laoreet et
                    quam non, malesuada viverra accumsan leo.
                  </p>
                </div>

                <div className="col-12 col-md-6">
                  <p>
                    Amet, consectetur adipiscing elit. Donec malesuada lorem
                    maximus mauris scelerisque, at rutrum nulla dictum. Ut ac
                    ligula sapien. Suspendisse cursus faucibus finibus.
                    Curabitur ut augue finibus, luctus tortor at, ornare erat.
                    Nulla facilisi. Sed est risus, laoreet et quam non, viverra
                    accumsan leo.
                  </p>
                </div>
              </div>

              <div className="w-100 text-center mt-5">
                <a className="button gradient-bg" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
