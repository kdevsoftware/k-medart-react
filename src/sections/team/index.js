import React, { Component } from 'react';

import Team1 from '../../images/team-1.jpg';
import Team2 from '../../images/team-2.jpg';
import Team3 from '../../images/team-3.jpg';
import Team4 from '../../images/team-4.jpg';

class Team extends Component {
  render() {
    return (
      <div>
        <div class="medical-team">
          <div class="container">
            <div class="row">
              <div class="col-12">
                <h2>The Medical Team</h2>
              </div>

              <div class="col-12 col-md-6 col-lg-3">
                <div class="medical-team-wrap">
                  <img src={Team1} alt="" />

                  <h4>Christinne Smith</h4>
                  <h5>PHD Surgeon</h5>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
                <div class="medical-team-wrap">
                  <img src={Team2} alt="" />

                  <h4>Anna Gustav</h4>
                  <h5>PHD Surgeon</h5>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                <div class="medical-team-wrap">
                  <img src={Team3} alt="" />

                  <h4>Phillip Williams</h4>
                  <h5>PHD Surgeon</h5>
                </div>
              </div>

              <div class="col-12 col-md-6 col-lg-3 mt-5 mt-lg-0">
                <div class="medical-team-wrap">
                  <img src={Team4} alt="" />

                  <h4>Gina James</h4>
                  <h5>PHD Surgeon</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Team;
