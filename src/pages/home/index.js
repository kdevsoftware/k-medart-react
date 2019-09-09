import React, { Component, Fragment } from 'react';

import Boxes from '../../sections/boxes';
import Departments from '../../sections/departments';
import Testimonials from '../../sections/testimonials';
import RecentNews from '../../sections/recent-news';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <Boxes />
        <Departments />
        <Testimonials />
        <RecentNews />
      </Fragment>
    );
  }
}

export default HomePage;
