import React from "react"
import ReactDOM from "react-dom"
// import MyTitle from "./components/MyTitle"
// import LoginControl from "./components/LoginControl"
// import Hello from "./components/Hello"
// import HelloMessage from "./components/HelloMessage"
// import Button from "./components/Button"
// import UserGist from "./components/UserGist"
// import FlavorForm from "./components/FlavorForm"
// import Reservation from "./components/Reservation"
import MyComponent from "./components/MyComponent"




let DynamicComponent = function () {
    return (
        <MyComponent />
    )
}

ReactDOM.render(
    <DynamicComponent />,
    document.getElementById("root")
)

