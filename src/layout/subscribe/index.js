import React, { Component } from 'react';

class Subscribe extends Component {
  render() {
    return (
      <div className="subscribe-banner">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-8 offset-lg-2">
              <h2>Subscribe to our newsletter</h2>

              <form>
                <input type="email" placeholder="E-mail address" />
                <input
                  className="button gradient-bg"
                  type="submit"
                  value="Subscribe"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Subscribe;
