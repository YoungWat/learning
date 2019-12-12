import React from 'react'

function FormattedDate(props) {
  return <h2>现在是{props.date.toLocaleTimeString()}</h2>
}

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    const duration = 1000
    this.timerID = setInterval(
      () => this.tick(),
      duration
    )
  }

  componentWillMount() {
    clearInterval(this.timerID)
  }

  /* 功能方法 */

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello,world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    )
  }
}

export default Clock