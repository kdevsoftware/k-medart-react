import React, { Component } from 'react';

import ServiceTabImg from '../../images/service-tab-img.png';

class ServiceCategories extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="services-tabs">
              <div className="tabs">
                <ul className="tabs-nav d-flex flex-wrap">
                  <li
                    className="tab-nav d-flex justify-content-center align-items-center"
                    data-target="#tab_1"
                  >
                    Pellentesque pulvinar
                  </li>
                  <li
                    className="tab-nav d-flex justify-content-center align-items-center"
                    data-target="#tab_2"
                  >
                    {' '}
                    Pellentesque lacinia{' '}
                  </li>
                  <li
                    className="tab-nav d-flex justify-content-center align-items-center"
                    data-target="#tab_3"
                  >
                    Consectetur diam
                  </li>
                  <li
                    className="tab-nav d-flex justify-content-center align-items-center"
                    data-target="#tab_4"
                  >
                    CMauris tortor
                  </li>
                  <li
                    className="tab-nav d-flex justify-content-center align-items-center"
                    data-target="#tab_5"
                  >
                    Phasellus sit amet
                  </li>
                </ul>

                <div className="tabs-container">
                  <div id="tab_1" className="tab-content">
                    <img src={ServiceTabImg} alt="" />

                    <h4>
                      Scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.{' '}
                    </h4>

                    <p>
                      Amet, consectetur adipiscing elit. Donec malesuada lorem
                      maximus mauris scelerisque, at rutrum nulla dictum. Ut ac
                      ligula sapien. Suspendisse cursus faucibus finibus.
                      Curabitur ut augue finibus, luctus tortor at, ornare erat.
                      Nulla facilisi. Sed est risus, laoreet et quam non,
                      viverra accumsan leo. Amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris scelerisque, at
                      rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                      cursus faucibus finibus
                    </p>
                  </div>

                  <div id="tab_2" className="tab-content">
                    <img src={ServiceTabImg} alt="" />

                    <h4>
                      Scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.{' '}
                    </h4>

                    <p>
                      Amet, consectetur adipiscing elit. Donec malesuada lorem
                      maximus mauris scelerisque, at rutrum nulla dictum. Ut ac
                      ligula sapien. Suspendisse cursus faucibus finibus.
                      Curabitur ut augue finibus, luctus tortor at, ornare erat.
                      Nulla facilisi. Sed est risus, laoreet et quam non,
                      viverra accumsan leo. Amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris scelerisque, at
                      rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                      cursus faucibus finibus
                    </p>
                  </div>

                  <div id="tab_3" className="tab-content">
                    <img src={ServiceTabImg} alt="" />

                    <h4>
                      Scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.{' '}
                    </h4>

                    <p>
                      Amet, consectetur adipiscing elit. Donec malesuada lorem
                      maximus mauris scelerisque, at rutrum nulla dictum. Ut ac
                      ligula sapien. Suspendisse cursus faucibus finibus.
                      Curabitur ut augue finibus, luctus tortor at, ornare erat.
                      Nulla facilisi. Sed est risus, laoreet et quam non,
                      viverra accumsan leo. Amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris scelerisque, at
                      rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                      cursus faucibus finibus
                    </p>
                  </div>

                  <div id="tab_4" className="tab-content">
                    <img src={ServiceTabImg} alt="" />

                    <h4>
                      Scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.{' '}
                    </h4>

                    <p>
                      Amet, consectetur adipiscing elit. Donec malesuada lorem
                      maximus mauris scelerisque, at rutrum nulla dictum. Ut ac
                      ligula sapien. Suspendisse cursus faucibus finibus.
                      Curabitur ut augue finibus, luctus tortor at, ornare erat.
                      Nulla facilisi. Sed est risus, laoreet et quam non,
                      viverra accumsan leo. Amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris scelerisque, at
                      rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                      cursus faucibus finibus
                    </p>
                  </div>

                  <div id="tab_5" className="tab-content">
                    <img src={ServiceTabImg} alt="" />

                    <h4>
                      Scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.{' '}
                    </h4>

                    <p>
                      Amet, consectetur adipiscing elit. Donec malesuada lorem
                      maximus mauris scelerisque, at rutrum nulla dictum. Ut ac
                      ligula sapien. Suspendisse cursus faucibus finibus.
                      Curabitur ut augue finibus, luctus tortor at, ornare erat.
                      Nulla facilisi. Sed est risus, laoreet et quam non,
                      viverra accumsan leo. Amet, consectetur adipiscing elit.
                      Donec malesuada lorem maximus mauris scelerisque, at
                      rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                      cursus faucibus finibus
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

export default ServiceCategories;
