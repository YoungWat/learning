/* 生命周期示例 */
import React from "react"

class Hello extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: 1
    }
  }

  componentDidMount() {
    const duration = 600

    this.timer = setInterval(() => {
      let { opacity } = this.state

      opacity -= 0.5
      if (opacity < 0.1) {
        opacity = 1
      }

      this.setState({
        opacity: opacity
      })
    }, duration)
  }

  render() {
    return (
      <div style={{
        opacity: this.state.opacity
      }}>
        Hello {this.props.name}
      </div>
    )
  }
}

export default Hello
