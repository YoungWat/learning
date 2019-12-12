/* Select下拉菜单示例 */

import React from "react"

class FlavorForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: "conconut"
    }
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    alert("Your favorite website is:" + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={(e) => { this.handleSubmit(e) }}>
        <label>
          <select
            value={this.state.value}
            onChange={
              (e) => { this.handleChange(e) }
            }
          >
            <option value="gg">Google</option>
            <option value="rn">Runoob</option>
            <option value="tb">Taobao</option>
            <option value="fb">Facebook</option>
          </select>

          <input type="submit"
            value="提交"
          />
          <br />
          value:{this.state.value}
        </label>
      </form >
    )
  }
}

export default FlavorForm