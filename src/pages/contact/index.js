import React, { Component, Fragment } from 'react';

import Boxes from '../../sections/boxes';
import Contact from '../../sections/contact';
import Map from '../../sections/map';

class ContactPage extends Component {
  render() {
    return (
      <Fragment>
        <Boxes />
        <Contact />
        <Map />
      </Fragment>
    );
  }
}

export default ContactPage;
