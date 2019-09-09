import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="contact-form">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Get in Touch</h2>
            </div>

            <div className="col-12  col-md-4">
              <input type="text" placeholder="Name" />
            </div>

            <div className="col-12 col-md-4">
              <input type="email" placeholder="E-mail" />
            </div>

            <div className="col-12 col-md-4">
              <input type="text" placeholder="Subject" />
            </div>

            <div className="col-12">
              <textarea
                name="name"
                rows="12"
                cols="80"
                placeholder="Message"
              ></textarea>
            </div>

            <div className="col-12">
              <input
                type="submit"
                name=""
                value="Send Message"
                className="button gradient-bg"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
