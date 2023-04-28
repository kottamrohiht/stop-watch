import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    minutes: 0,
    seconds: 0,
    isTimerRunning: false,
  }

  incrementTimer = () => {
    const {seconds} = this.state
    if (seconds === 59) {
      this.setState(prevState => ({
        minutes: prevState.minutes + 1,
        seconds: 0,
        isTimerRunning: true,
      }))
    } else {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1,
        isTimerRunning: true,
      }))
    }
  }

  onclickStart = () => {
    this.timerId = setInterval(this.incrementTimer, 1000)
  }

  onclickStop = () => {
    const {isTimerRunning} = this.state
    if (isTimerRunning) {
      clearInterval(this.timerId)
    }
  }

  onclickReset = () => {
    const {isTimerRunning} = this.state
    if (isTimerRunning) {
      this.setState({
        minutes: 0,
        seconds: 0,
      })
      clearInterval(this.timerId)
    }
  }

  getMinutes = () => {
    const {minutes} = this.state
    const strMinutes = minutes > 9 ? minutes : '0'.concat(minutes)
    return strMinutes
  }

  getSeconds = () => {
    const {seconds} = this.state
    const strSeconds = seconds > 9 ? seconds : '0'.concat(seconds)
    return strSeconds
  }

  renderTimerContainer = () => {
    const modifiedMinutes = this.getMinutes()
    const modifiedSeconds = this.getSeconds()
    const clockImg =
      'https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png'

    return (
      <div className="timer-container">
        <div className="timer-img-text-container">
          <img src={clockImg} alt="stopwatch" className="clock-img" />
          <p className="timer-para"> Timer </p>
        </div>
        <h1 className="showing-timer">
          {modifiedMinutes}:{modifiedSeconds}{' '}
        </h1>
        <div className="button-container">
          <button
            onClick={this.onclickStart}
            type="button"
            className="button button1"
          >
            Start
          </button>
          <button
            onClick={this.onclickStop}
            type="button"
            className="button button2"
          >
            Stop
          </button>
          <button
            onClick={this.onclickReset}
            type="button"
            className="button button3"
          >
            Reset
          </button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="app-container">
        <div className="main-timer-container">
          <h1 className="main-heading">Stopwatch</h1>
          {this.renderTimerContainer()}
        </div>
      </div>
    )
  }
}

export default Stopwatch
