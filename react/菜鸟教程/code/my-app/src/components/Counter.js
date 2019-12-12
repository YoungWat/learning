/* setState 示例 */
import React from "react"

class Counter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { clickCount: 0 }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(
      preState =>
        ({ clickCount: preState.clickCount + 1 })
    )
    this.setProps({
      name: "haha"
    })
  }

  render() {
    return (
      <div>
        <h2 onClick={this.handleClick}>点我！点击次数为：{this.state.clickCount}</h2>
        <h3>name:{this.props.name}</h3>
      </div>
    )
  }
}

export default Counter