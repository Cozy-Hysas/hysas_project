import React, { Component } from 'react';
import axios from 'axios';
import SignupTenant from './SignupTenant.jsx';
class LoginTenant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [],
            email : "",
            password : "",
            id: 0,
            check : ""
        }
    }
    componentDidMount(){
        axios.get("http://localhost:3000/tenant")
        .then(res => {
            this.setState({
                data : res.data,
                email : "",
                password : "",
                id:0,
                check: ""
            })
        })
        .catch(err => console.log(err,'errrrr'));
    }
    changePassword(event) {
        this.setState({ password: event.target.value})
    }
    changeEmail(event) {
        this.setState({ email: event.target.value})
    }
    check(event) {
        event.preventDefault();
        const listEmail = this.state.data.map((adress) => adress.email);
        const listPassword = this.state.data.map((pass) => pass.password);
        if (listEmail.indexOf(this.state.email) === -1) {
          alert("don't have an account yet please create one");
          this.setState({ check: "signup" });
        } else if (
          listEmail.indexOf(this.state.email) !== -1 &&
          listPassword[listEmail.indexOf(this.state.email)] !==
            this.state.password
        ) {
          alert("wrong password try again");
        } else if (
          listEmail.indexOf(this.state.email) !== -1 &&
          listPassword[listEmail.indexOf(this.state.email)] ===
            this.state.password
        ) {
          alert("Hello " + this.state.email);
          this.setState({ check: "login" });
        }
      }
      render() {
        if (this.state.check === "") {
            return (
              <center>
                <div className="login">
                  <div>
                    <input
                      type="email"
                      placeholder="put your email here"
                      value={this.state.email}
                      onChange={this.changeEmail}
                    />
                    <br></br>
                    <input
                      type="password"
                      placeholder="put your password here "
                      value={this.state.password}
                      onChange={this.changePassword}
                    />
                    <br></br>
                    <button id="bb" onClick={(event) => this.check(event)}>
                      LOGIN
                    </button>
                  </div>
                </div>
              </center>
            );
          } else if (this.state.check === "signup") {
            return (
              <center>
                <div>
                  <SignupTenant />
                </div>
              </center>
            );
          } else if (this.state.check === "login") {
            return (
              <center>
                <div>
                  
                </div>
              </center>
            );
          }
        }
}

export default LoginTenant;