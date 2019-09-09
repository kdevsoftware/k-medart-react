import React, { Component } from 'react';

import News1 from '../../images/news-1.png';
import News2 from '../../images/news-2.png';
import News3 from '../../images/news-3.png';
import News4 from '../../images/news-4.png';
import News5 from '../../images/news-5.png';
import News6 from '../../images/news-6.png';
import P1 from '../../images/p-1.jpg';
import P2 from '../../images/p-2.jpg';
import P3 from '../../images/p-3.jpg';
import EmergencyCall from '../../images/emergency-call.png';

class NewsItems extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-8">
            <div className="the-news">
              <div className="row">
                <div className="col-12 col-md-6">
                  <div className="the-news-wrap">
                    <figure className="post-thumbnail">
                      <a href="#">
                        <img src={News1} alt="" />
                      </a>
                    </figure>

                    <header className="entry-header">
                      <h3>The latest in Medicine</h3>

                      <div className="post-metas d-flex flex-wrap align-items-center">
                        <div className="posted-date">
                          <label>Date: </label>
                          <a href="#">April 12, 2018</a>
                        </div>

                        <div className="posted-by">
                          <label>By: </label>
                          <a href="#">Dr. Jake Williams</a>
                        </div>

                        <div className="post-comments">
                          <a href="#">2 Comments</a>
                        </div>
                      </div>
                    </header>

                    <div className="entry-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec malesuada lorem maximus mauris scelerisque, at
                        rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                        cursus faucibus finibus.{' '}
                      </p>
                    </div>

                    <footer className="entry-footer mt-5">
                      <a className="button gradient-bg" href="#">
                        Read More
                      </a>
                    </footer>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="the-news-wrap">
                    <figure className="post-thumbnail">
                      <a href="#">
                        <img src={News2} alt="" />
                      </a>
                    </figure>

                    <header className="entry-header">
                      <h3>All you need to know about pills</h3>

                      <div className="post-metas d-flex flex-wrap align-items-center">
                        <div className="posted-date">
                          <label>Date: </label>
                          <a href="#">April 12, 2018</a>
                        </div>

                        <div className="posted-by">
                          <label>By: </label>
                          <a href="#">Dr. Jake Williams</a>
                        </div>

                        <div className="post-comments">
                          <a href="#">2 Comments</a>
                        </div>
                      </div>
                    </header>

                    <div className="entry-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec malesuada lorem maximus mauris scelerisque, at
                        rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                        cursus faucibus finibus.{' '}
                      </p>
                    </div>

                    <footer className="entry-footer mt-5">
                      <a className="button gradient-bg" href="#">
                        Read More
                      </a>
                    </footer>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="the-news-wrap">
                    <figure className="post-thumbnail">
                      <a href="#">
                        <img src={News6} alt="" />
                      </a>
                    </figure>

                    <header className="entry-header">
                      <h3>Marketing and Medicine</h3>

                      <div className="post-metas d-flex flex-wrap align-items-center">
                        <div className="posted-date">
                          <label>Date: </label>
                          <a href="#">April 12, 2018</a>
                        </div>

                        <div className="posted-by">
                          <label>By: </label>
                          <a href="#">Dr. Jake Williams</a>
                        </div>

                        <div className="post-comments">
                          <a href="#">2 Comments</a>
                        </div>
                      </div>
                    </header>

                    <div className="entry-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec malesuada lorem maximus mauris scelerisque, at
                        rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                        cursus faucibus finibus.{' '}
                      </p>
                    </div>

                    <footer className="entry-footer mt-5">
                      <a className="button gradient-bg" href="#">
                        Read More
                      </a>
                    </footer>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="the-news-wrap">
                    <figure className="post-thumbnail">
                      <a href="#">
                        <img src={News4} alt="" />
                      </a>
                    </figure>

                    <header className="entry-header">
                      <h3>Marketing and Medicine</h3>

                      <div className="post-metas d-flex flex-wrap align-items-center">
                        <div className="posted-date">
                          <label>Date: </label>
                          <a href="#">April 12, 2018</a>
                        </div>

                        <div className="posted-by">
                          <label>By: </label>
                          <a href="#">Dr. Jake Williams</a>
                        </div>

                        <div className="post-comments">
                          <a href="#">2 Comments</a>
                        </div>
                      </div>
                    </header>

                    <div className="entry-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec malesuada lorem maximus mauris scelerisque, at
                        rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                        cursus faucibus finibus.{' '}
                      </p>
                    </div>

                    <footer className="entry-footer mt-5">
                      <a className="button gradient-bg" href="#">
                        Read More
                      </a>
                    </footer>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="the-news-wrap">
                    <figure className="post-thumbnail">
                      <a href="#">
                        <img src={News5} alt="" />
                      </a>
                    </figure>

                    <header className="entry-header">
                      <h3>Marketing and Medicine</h3>

                      <div className="post-metas d-flex flex-wrap align-items-center">
                        <div className="posted-date">
                          <label>Date: </label>
                          <a href="#">April 12, 2018</a>
                        </div>

                        <div className="posted-by">
                          <label>By: </label>
                          <a href="#">Dr. Jake Williams</a>
                        </div>

                        <div className="post-comments">
                          <a href="#">2 Comments</a>
                        </div>
                      </div>
                    </header>

                    <div className="entry-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec malesuada lorem maximus mauris scelerisque, at
                        rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                        cursus faucibus finibus.{' '}
                      </p>
                    </div>

                    <footer className="entry-footer mt-5">
                      <a className="button gradient-bg" href="#">
                        Read More
                      </a>
                    </footer>
                  </div>
                </div>

                <div className="col-12 col-md-6">
                  <div className="the-news-wrap">
                    <figure className="post-thumbnail">
                      <a href="#">
                        <img src={News3} alt="" />
                      </a>
                    </figure>

                    <header className="entry-header">
                      <h3>Marketing and Medicine</h3>

                      <div className="post-metas d-flex flex-wrap align-items-center">
                        <div className="posted-date">
                          <label>Date: </label>
                          <a href="#">April 12, 2018</a>
                        </div>

                        <div className="posted-by">
                          <label>By: </label>
                          <a href="#">Dr. Jake Williams</a>
                        </div>

                        <div className="post-comments">
                          <a href="#">2 Comments</a>
                        </div>
                      </div>
                    </header>

                    <div className="entry-content">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec malesuada lorem maximus mauris scelerisque, at
                        rutrum nulla dictum. Ut ac ligula sapien. Suspendisse
                        cursus faucibus finibus.{' '}
                      </p>
                    </div>

                    <footer className="entry-footer mt-5">
                      <a className="button gradient-bg" href="#">
                        Read More
                      </a>
                    </footer>
                  </div>
                </div>

                <div className="col-12">
                  <ul className="pagination d-flex flex-wrap align-items-center p-0">
                    <li className="active">
                      <a href="#">01</a>
                    </li>
                    <li>
                      <a href="#">02</a>
                    </li>
                    <li>
                      <a href="#">03</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="sidebar">
              <div className="search-widget">
                <form className="flex flex-wrap align-items-center">
                  <input type="search" placeholder="Search..." />
                  <button
                    type="submit"
                    className="flex justify-content-center align-items-center"
                  >
                    Search
                  </button>
                </form>
              </div>

              <div className="sidebar-cats">
                <h2 className="widget-title">Categories</h2>

                <ul className="p-0 m-0">
                  <li>
                    <a href="#">Radiology</a>
                  </li>
                  <li>
                    <a href="#">Cardiology</a>
                  </li>
                  <li>
                    <a href="#">Gastroenterology</a>
                  </li>
                  <li>
                    <a href="#">Neurology</a>
                  </li>
                  <li>
                    <a href="#">General surgery</a>
                  </li>
                </ul>
              </div>

              <div className="popular-posts">
                <h2 className="widget-title">Latest Posts</h2>

                <ul className="p-0 m-0">
                  <li className="d-flex flex-wrap justify-content-between">
                    <figure>
                      <a href="#">
                        <img src={P1} alt="" />
                      </a>
                    </figure>

                    <div className="entry-content">
                      <h3 className="entry-title">
                        <a href="#">A big discovery for medicine worldwide</a>
                      </h3>

                      <div className="posted-date">Feb 05, 2018</div>
                    </div>
                  </li>

                  <li className="d-flex flex-wrap justify-content-between">
                    <figure>
                      <a href="#">
                        <img src={P2} alt="" />
                      </a>
                    </figure>

                    <div className="entry-content">
                      <h3 className="entry-title">
                        <a href="#">Dentistry for everybody under 18</a>
                      </h3>

                      <div className="posted-date">Feb 05, 2018</div>
                    </div>
                  </li>

                  <li className="d-flex flex-wrap justify-content-between">
                    <figure>
                      <a href="#">
                        <img src={P3} alt="" />
                      </a>
                    </figure>

                    <div className="entry-content">
                      <h3 className="entry-title">
                        <a href="#">When it’s time to take pills</a>
                      </h3>

                      <div className="posted-date">Feb 05, 2018</div>
                    </div>
                  </li>
                </ul>
              </div>

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

              <div className="emergency-box">
                <h2 className="d-flex align-items-center">Emergency</h2>

                <div className="call-btn text-center">
                  <a
                    className="d-flex justify-content-center align-items-center button gradient-bg"
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
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItems;
