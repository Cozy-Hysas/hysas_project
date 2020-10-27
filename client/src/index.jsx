import React from "react"
import ReactDOM from "react-dom"
import Login from "./components/Login.jsx"
import HouseRenter from "./components/HouseRenter.jsx"

class App extends React.Component {
    render() {
        return (
            <div>
                <HouseRenter />
        
            </div>
        )
    }
}

ReactDOM.render(<App /> ,document.getElementById("root"))

