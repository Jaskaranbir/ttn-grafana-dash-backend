import React, { Component } from 'react'
import './Sensor.css'
import config from '../../config'

import Spinner from 'react-spinkit'

class Sensor extends Component {
  constructor() {
    super()
    this.state = {
      isLoaded: false
    }
  }

  onload = () => {
    this.setState({
      isLoaded: true
    })
  }

  render = () => {
    let spinner
    let spinnerText
    if (!this.state.isLoaded) {
      spinner = (
        <div className="spinner-container">
          <Spinner name='double-bounce' color="#f6d041"  className="spinner"/>
          <div className="spinner-text">Loading</div>
        </div>
      )
    }

    return (
      <div className='sensor-container'>
        <div className='sensor-title'>
          <h3>{this.props.title}</h3>
        </div>

        { spinner }
        { spinnerText }

        <iframe
        onLoad={this.onload}
        title={this.props.title}
        src={
          `${config.baseGrafanaUri}&panelId=${this.props.panelId}`
        }
        ></iframe>
      </div>
    )
  }
}

export default Sensor
