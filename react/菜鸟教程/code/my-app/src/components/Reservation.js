/* 处理多个input元素 */
import React from "react"

class Reservation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isGoing: true,
      numberOfGuests: 2
    }
  }

  handleInputChange(event) {
    const target = event.target,
      value = target.type === "checkbox" ? target.checked : target.value,
      name = target.name

    this.setState(
      {
        [name]: value
      }
    )
  }

  render() {
    return (
      <form>
        <label>
          是否离开：
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={(e) => { this.handleInputChange(e) }}
          />
        </label>
        <br />
        <label>
          访客数：
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={(e) => { this.handleInputChange(e) }}
          />
        </label>
        <h1>isGoing:{this.state.isGoing + ""}</h1>
        <h1>numberOfGuests:{this.state.numberOfGuests}</h1>
      </form>
    )
  }
}

export default Reservation