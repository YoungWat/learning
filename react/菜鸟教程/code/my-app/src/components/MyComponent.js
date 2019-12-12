/* Ref */

import React from "react"

class MyComponent extends React.Component {
  handleClick() {
    this.refs.myInput.focus()
  }

  render() {
    return (
      <div>
        <input
          ref="myInput"
          type="text" />
        <input
          type="button"
          value="点我输入框获取焦点"
          onClick={(e) => { this.handleClick(e) }} />
      </div>
    )
  }
}

export default MyComponent