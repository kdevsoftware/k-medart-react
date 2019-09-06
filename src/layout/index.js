import React, { Component, Fragment } from 'react';

import Header from './header';
import Content from './content';
import Subscribe from './subscribe';
import Footer from './footer';

class AppLayout extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Content />
        <Subscribe />
        <Footer />
      </Fragment>
    );
  }
}

export default AppLayout;
