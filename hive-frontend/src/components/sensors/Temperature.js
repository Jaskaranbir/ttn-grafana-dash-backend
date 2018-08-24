import React from 'react'
import './Temperature.css'

import {
  Col,
  Row
} from 'react-bootstrap'
import format from 'date-fns/format'

import Sensor from './Sensor'

export default () => (
  <Row>
    <Col md={2} mdPush={5}>
      <div className='date-display'>
        {
          format(Date.now(), 'dddd, MMMM DD, YYYY')
        }
      </div>
    </Col>

    <Col md={5} mdPull={2}>
      <Sensor
       title='Inside Temperature'
       panelId={14}
      />
    </Col>

    <Col md={5}>
      <Sensor
       title='Outside Temperature'
       panelId={7}
      />
    </Col>
  </Row>
)
