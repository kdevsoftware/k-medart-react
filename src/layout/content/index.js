import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from '../../pages/home';
import AboutUs from '../../pages/about-us';
import Services from '../../pages/services';
import News from '../../pages/news';
import Contact from '../../pages/contact';

class Content extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/about-us" component={AboutUs} />
        <Route path="/services" component={Services} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
      </Fragment>
    );
  }
}

export default Content;
