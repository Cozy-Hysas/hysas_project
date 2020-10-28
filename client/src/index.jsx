import React from "react"
import ReactDOM from "react-dom"
import Login from "./components/Login.jsx"
import HouseRenter from "./components/HouseRenter.jsx"
import Signup from "./components/Signup.jsx"

import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import HomePage from "./components/HomePage.jsx"



class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <HomePage/>
                <HouseRenter />
                <Login/>
                <Signup />
                <Footer />

            </div>
        )
    }
}

ReactDOM.render(<App /> ,document.getElementById("root"))

