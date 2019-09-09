import React, { Component, Fragment } from 'react';

import Services from '../../sections/services';
import Departments from '../../sections/departments';
import ServiceCategories from '../../sections/service-categories';

class ServicesPage extends Component {
  render() {
    return (
      <Fragment>
        <Services />
        <Departments />
        <ServiceCategories />
      </Fragment>
    );
  }
}

export default ServicesPage;
