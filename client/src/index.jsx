import React from "react"
import ReactDOM from "react-dom"
import Login from "./components/Login.jsx"
import HouseRenter from "./components/HouseRenter.jsx"
import Signup from "./components/Signup.jsx"

import SignupTenant from "./components/SignupTenant.jsx"
import LoginTenant from "./components/LoginTenant.jsx"

import HousesList from "./components/HousesList.jsx"

import Houses from "./components/House.jsx"
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import HomePage from "./components/HomePage.jsx"



class App extends React.Component {
    render() {
        return (
            <div>


        {/* <SignupTenant/> */}
            {/* <LoginTenant/> */}
            {/* <Login/> */}
{/* <Signup/> */}

           



            </div>
        )
    }
}

ReactDOM.render (
    <App/>,
    document.getElementById("root")
)
