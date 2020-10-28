import React from 'react';
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import 'whatwg-fetch';

class Homepage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
       
        <div>
            {/* add the footer and the header*/}
            <div>
            <h3>Welcome to Cozy hysas!</h3> 
            </div>
        <div>
        <div className="input-group choose-house">
      <select className="custom-select" id="housesA" name="house" onChange={this.handleEventSelect}>
          <option defaultValue>Choose the adress</option>
          {this.state.data.map(house => <option key={house._id} value={bike.adress}>{bike.adress}</option>)}
      </select>

      <div className="input-group choose-house">
      <select className="custom-select" id="housesP" name="house" onChange={this.handleEventSelect}>
          <option defaultValue>Choose the house price</option>
          {this.state.data.map(house => <option key={house._id} value={bike.price}>{bike.price}</option>)}
      </select>
        </div>
        {/* do a onclick function to change the view*/}
      <button className="btn btn-outline-secondary" >Confirm</button>
  </div>
      </div>
      </div>
      
    );
  }
}

export default Homepage;