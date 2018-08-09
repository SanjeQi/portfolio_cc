import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import cristian from '../image/cri.png'


class Landing extends Component {
  render() {
    return (
      <div style={{ width: '100%', margin: 'auto' }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={cristian} alt="avatar" className="avatar-img" />
            <div className="banner-text">
              <h1>Junior JavaScript Developer</h1>
              <hr />
              <p>JavaScript | React | NodeJS | MongoDB</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;