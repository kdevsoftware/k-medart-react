import React, { Component, Fragment } from 'react';

import History from '../../sections/history';
import Faq from '../../sections/faq';
import Team from '../../sections/team';

class AboutUsPage extends Component {
  render() {
    return (
      <Fragment>
        <History />
        <Faq />
        <Team />
      </Fragment>
    );
  }
}

export default AboutUsPage;
