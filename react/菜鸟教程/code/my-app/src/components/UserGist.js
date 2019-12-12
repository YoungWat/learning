/* React Ajax 示例 */
import React from "react"
import $ from "jquery"

class UserGist extends React.Component {
  static defaultProps = {
    source: "https://api.github.com/users/octocat/gists"
  }

  constructor(props) {
    super(props)
    this.state = {
      username: "",
      lastGistUrl: ""
    }
  }

  componentDidMount() {
    this.serverRequest = $.get(this.props.source, (result) => {
      console.log("res", result)
      let lastGist = result[0]

      this.setState({
        username: lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      })
    })
  }

  componentWillUnmount() {
    this.serverRequest.abort()
  }

  render() {
    return (
      <div>
        {this.state.username} 用户最新的Gist 共享地址：
        <a href={this.state.lastGistUrl}>{this.state.lastGistUrl}</a>
      </div>
    )
  }
}

export default UserGist