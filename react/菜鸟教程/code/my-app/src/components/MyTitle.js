/* props验证 */
import React from "react"
import PropTypes from "prop-types"

class MyTitle extends React.Component {
  render() {
    return (
      <h1>Hello,{this.props.title}</h1>
    )
  }
}

MyTitle.propTypes = {
  title: PropTypes.string
}

export default MyTitle