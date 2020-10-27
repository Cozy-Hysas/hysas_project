import React, { Component } from 'react';
import axios from 'axios';
class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            phoneNumber:undefined, 
            address:""
        }

    }


    myChangeHandler(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    SignUp(){
        const user = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            phoneNumber: this.state.phoneNumber, 
            address:this.state.address
          };
      
          axios.post(`/users`, { user })
            .then(()=>{
                this.setState({
                        name: "",
                        email: "",
                        password: "",
                        phoneNumber:undefined, 
                        address:""
                })
            })
        
    }

    render() {
        return (
            <div className='sign'>
                <center>
               
                <input type="text" placeholder="Name" name="name" id="name" required onChange={this.myChangeHandler.bind(this)}></input><br/>
            
                <input type="text" placeholder="Enter Email" name="email" id="email" required onChange={this.myChangeHandler.bind(this)}></input><br/>

             
                <input type="password" placeholder="Enter Password" name="psw" id="psw" required onChange={this.myChangeHandler.bind(this)}></input><br/>

              
                <input type="number" placeholder="Phone Number" name="phone" id="phone" required onChange={this.myChangeHandler.bind(this)}></input><br/><br/>
    
                <input type="text" placeholder="address" name="address" id="address" required onChange={this.myChangeHandler.bind(this)}></input><br/>
                <br />
                <button onClick={this.SignUp.bind(this)}>Sign Up</button>
                </center>
            </div>
        );
    }
}

export default Signup;