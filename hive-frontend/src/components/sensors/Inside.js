import React from 'react'
import Sensor from './Sensor'

export default () => (
  <div>
    <Sensor
     title='CO2'
     panelId={11}
    />
    <Sensor
     title='Sound'
     panelId={10}
    />
  </div>
)
