import React, { Component } from 'react';
import axios from 'axios';
import LoginTenant from './LoginTenant.jsx';
class SignupTenant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : "",
            email : "",
            password : "",
            phoneNumber : "",
            address : "",
            numeroCart : "",
            cvv2 : "",
            check : ""
        }
        this.changePassword = this.changePassword.bind(this);
        this.changePhoneNumber = this.changePhoneNumber.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
        this.changeNumeroCart = this.changeNumeroCart.bind(this);
        this.changeEmail = this.changeEmail.bind(this);
        this.changeName = this.changeName.bind(this);
        this.changeCVV2 = this.changeCVV2.bind(this);
        this.signup = this.signup.bind(this);
    }
    changePassword(event) {
        this.setState({ password: event.target.value})
    }
    changeEmail(event) {
        this.setState({ email: event.target.value})
    }
    changeName(event) {
        this.setState({ name: event.target.value})
    }
    changePhoneNumber(event) {
        this.setState({ phoneNumber: event.target.value})
    }
    changeAddress(event) {
        this.setState({ address: event.target.value})
    }
    changeNumeroCart(event) {
        this.setState({ numeroCart: event.target.value})
    }
    changeCVV2(event) {
        this.setState({ cvv2 : event.target.value})
    }
    signup(event){
        event.preventDefault();
        axios.post("http://localhost:3000/tenant/signup",{
            name : this.state.name,
            email : this.state.email,
            password : this.state.password,
            phoneNumber : this.state.phoneNumber,
            address : this.state.address
        })
        .then(() => this.setState({
            name : "",
            email : "",
            password : "",
            phoneNumber : "",
            address : "",
            check : "loginTenant"
        }))
        .catch((err) => console.log(err,'errrr'))
    }
    render() {
        if(this.state.check === ""){
            return (
              <div className="loginTenant">
                  <center>
                  <input
                    type="text"
                    placeholder="put your name here"
                    value={this.state.name}
                    onChange={this.changeName}
                  /><br/>
                  <input
                    type="email"
                    placeholder="put your email here"
                    value={this.state.email}
                    onChange={this.changeEmail}
                  /><br/>
                   <input
                    type="password"
                    placeholder="put your password here"
                    value={this.state.password}
                    onChange={this.changePassword}
                  /><br/>
                   <input
                    type="text"
                    placeholder="put your phone number"
                    value={this.state.phoneNumber}
                    onChange={this.changePhoneNumber}
                  /><br/>
                   <input
                    type="text"
                    placeholder="Put your address here"
                    value={this.state.address}
                    onChange={this.changeAddress}
                  /><br/>
                  <button
                    id="sign"
                    onClick={(event) => this.signup(event)}>Create An Account</button>
                    </center>
              </div>
            )
          } else {
            return (
              <div>
                <LoginTenant />
              </div>
            )
          }
        }
    }


export default SignupTenant;