/* Props示例 */

/* 表单与事件示例 */
import React from 'react'
class HelloMessage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: "Hello Runoob!"
    }
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  render() {
    let value = this.state.value

    return (
      <div>
        <Content
          myDataProp={value}
          updateStateProp={(e) => { this.handleChange(e) }}
        />
      </div>
    )
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <input type="text"
          value={this.props.myDataProp}
          onChange={(e) => { this.props.updateStateProp(e) }}
        />
        <h4>{this.props.myDataProp}</h4>
      </div>
    )
  }
}

export default HelloMessage
