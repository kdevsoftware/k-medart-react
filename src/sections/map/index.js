import React, { Component } from 'react';

class Map extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-page-map">
                <iframe
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=university of san francisco&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Map;
