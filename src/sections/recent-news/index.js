import React, { Component } from 'react';

import News1 from '../../images/news-1.png';
import News2 from '../../images/news-2.png';
import News3 from '../../images/news-3.png';

class RecentNews extends Component {
  render() {
    return (
      <div className="the-news">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>The News</h2>

              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
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
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
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
                  </div>
                </div>

                <div className="col-12 col-md-6 col-lg-4">
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

export default RecentNews;
