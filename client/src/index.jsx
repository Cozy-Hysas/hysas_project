import React from "react"
import ReactDOM from "react-dom"
import Login from "./components/Login.jsx"
import HouseRenter from "./components/HouseRenter.jsx"
import Signup from "./components/Signup.jsx"
import SignupTenant from "./components/SignupTenant.jsx"
class App extends React.Component {
    render() {
        return (
            <div>
                {/* <HouseRenter /> */}
<SignupTenant/>

                {/* <Login/> */}
                {/* <Signup /> */}

            </div>
        )
    }
}

ReactDOM.render(<App /> ,document.getElementById("root"))

