/* 变量存储React元素的例子 */
import React from "react"

class LoginButton extends React.Component {

  render() {
    return (
      <button onClick={() => { this.props.onClick() }}>button</button>
    )
  }
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)

    this.handleLoginClick = this.handleLoginClick.bind(this)
    this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = { isLoggedIn: false }
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true })
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn

    let button = null
    if (isLoggedIn) {
      button = <LoginButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        {button}
        <div>button state:{"" + this.state.isLoggedIn}</div>
      </div>
    )
  }
}

export default LoginControl