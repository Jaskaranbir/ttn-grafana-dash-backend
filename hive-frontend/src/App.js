import React, { Component } from 'react'
import './App.css'

import {
  Col,
  Row,
  Grid
} from 'react-bootstrap'

import InsideSensors from './components/sensors/Inside'
import OutsideSensors from './components/sensors/Outside'
import Temperature from './components/sensors/Temperature'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div id='title'>Hive Monitoring Dashboard</div>
        <Grid fluid={true}>
          <Temperature />

          <Row>
            <Col
             md={5} mdOffset={1}
             lg={6} lgOffset={0}
            >
              <InsideSensors />
            </Col>

            <Col
             md={5}
             lg={6}
            >
              <OutsideSensors />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App
