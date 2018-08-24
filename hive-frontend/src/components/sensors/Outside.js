import React from 'react'
import './Outside.css'

import {
  Col,
  Row
} from 'react-bootstrap'

import Sensor from './Sensor'

// Note: The "Outside.css" style overrides the style for
// .col-md-4 to remove padding and hide overflow.
export default () => (
  <div>
    <Sensor
     title='Weight'
     panelId={12}
    />

    <Row>
      <Col md={4}>
        <Sensor
         title='Humidity'
         panelId={8}
         iframeStyle={{
           width: '122%',
           marginLeft: '-11%'
         }}
        />
      </Col>

      <Col md={4}>
        <Sensor
         title='Ambient Light'
         panelId={9}
         iframeStyle={{
           width: '114%',
           marginLeft: '-8%'
         }}
        />
      </Col>

      <Col md={4}>
        <Sensor
         title='Barometric'
         panelId={13}
         iframeStyle={{
           width: '114%',
           marginLeft: '-7%'
         }}
        />
      </Col>
    </Row>
  </div>
)
