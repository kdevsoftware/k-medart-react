import React, { Component } from 'react';

import User1 from '../../images/user-1.jpg';
import User2 from '../../images/user-2.jpg';
import User3 from '../../images/user-3.jpg';
import User4 from '../../images/user-4.jpg';

class Testimonials extends Component {
  render() {
    return (
      <section className="testimonial-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Pacient’s Testimonials</h2>
            </div>
          </div>
        </div>

        <div className="testimonial-slider">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-9">
                <div className="testimonial-bg-shape">
                  <div className="swiper-container testimonial-slider-wrap">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="entry-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec malesuada lorem maximus mauris
                            scelerisque, at rutrum nulla dictum. Ut ac ligula
                            sapien. Suspendisse cursus faucibus finibus.
                            Curabitur ut augue finibus, luctus tortor at, ornare
                            erat. Nulla facilisi. Sed est risus, laoreet et quam
                            non, viverra accumsan leo.
                          </p>
                        </div>

                        <div className="entry-footer">
                          <figure className="user-avatar">
                            <img src={User1} alt="" />
                          </figure>

                          <h3 className="testimonial-user">
                            Russell Stephens <span>University in UK</span>
                          </h3>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="entry-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec malesuada lorem maximus mauris
                            scelerisque, at rutrum nulla dictum. Ut ac ligula
                            sapien. Suspendisse cursus faucibus finibus.
                            Curabitur ut augue finibus, luctus tortor at, ornare
                            erat. Nulla facilisi. Sed est risus, laoreet et quam
                            non, viverra accumsan leo.
                          </p>
                        </div>

                        <div className="entry-footer">
                          <figure className="user-avatar">
                            <img src={User2} alt="" />
                          </figure>

                          <h3 className="testimonial-user">
                            Russell Stephens <span>University in UK</span>
                          </h3>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="entry-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec malesuada lorem maximus mauris
                            scelerisque, at rutrum nulla dictum. Ut ac ligula
                            sapien. Suspendisse cursus faucibus finibus.
                            Curabitur ut augue finibus, luctus tortor at, ornare
                            erat. Nulla facilisi. Sed est risus, laoreet et quam
                            non, viverra accumsan leo.
                          </p>
                        </div>

                        <div className="entry-footer">
                          <figure className="user-avatar">
                            <img src={User3} alt="" />
                          </figure>

                          <h3 className="testimonial-user">
                            Russell Stephens <span>University in UK</span>
                          </h3>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="entry-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Donec malesuada lorem maximus mauris
                            scelerisque, at rutrum nulla dictum. Ut ac ligula
                            sapien. Suspendisse cursus faucibus finibus.
                            Curabitur ut augue finibus, luctus tortor at, ornare
                            erat. Nulla facilisi. Sed est risus, laoreet et quam
                            non, viverra accumsan leo.
                          </p>
                        </div>

                        <div className="entry-footer">
                          <figure className="user-avatar">
                            <img src={User4} alt="" />
                          </figure>

                          <h3 className="testimonial-user">
                            Russell Stephens <span>University in UK</span>
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="swiper-pagination-wrap">
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <div className="swiper-pagination position-relative flex justify-content-center align-items-center"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Testimonials;
