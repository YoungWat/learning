/* 生命周期示例 */
import React from "react"

class Button extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: 0
    }
  }

  setNewNumber() {
    this.setState({
      data: this.state.data + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={() => { this.setNewNumber() }}>
          INCREMENT
        </button>
        <Content
          myNumber={this.state.data}
        />
      </div>
    )
  }
}

class Content extends React.Component {
  componentWillMount() {
    console.log("Component Will MOUNT!")
  }

  componentDidMount() {
    console.log("Component DID MOUNT!")
    setTimeout(() => {
      this.setState({
        data: 100
      })
    }, 1000)
  }

  componentWillReceiveProps(newProps) {
    console.log("Component WILL RECEIVE PROPS!")
  }

  shouldComponentUpdate(newProps, netState) {
    return true
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Component WILL UPDATE!")
  }

  componentDidUpdate() {
    console.log("Component DID UPDATE!")
  }

  componentWillUnmount() {
    console.log("Component WILL UNMOUNT!")
  }

  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    )
  }
}

export default Button