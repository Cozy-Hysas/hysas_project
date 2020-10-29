import React from 'react';
import { MDBInputGroup, MDBInput, MDBDatePicker, MDBSelect, MDBRow, MDBIcon, MDBCardTitle, MDBBtn } from "mdbreact";



class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    return (
       
        <div>
            <div>
            <h3>Welcome to Cozy hysas!</h3> 
            </div>
        <div>
       
  </div>
  <MDBInputGroup
        prepend="Search for your House here"
        inputs={
          <>
            <MDBInput noTag type="text" hint="Where are you going?"/>
            <MDBDatePicker getValue={this.getPickerValue}  hint="Arrival date"/>
            <MDBDatePicker getValue={this.getPickerValue}  hint="Departure date"/>
            <MDBSelect options={this.state.options} selected="Choose the size of the house" color="Grey" label=" label" hint="Choose the size" />
            <MDBCardTitle>Choose your rang of price</MDBCardTitle>
            <MDBRow className="my-4" center>
            <MDBIcon className="font-weight-bold indigo-text mr-2 mt-1" icon="minus"/>
                <MDBRangeInput
                  min={0}
                  max={100}
                  value={50}
                  formClassName="w-75"
                />
            <MDBIcon className="font-weight-bold indigo-text ml-2 mt-1" icon="plus" />
              </MDBRow>
              <MDBBtn color="Grey" rounded size="sm" type="submit" className="mr-auto">
          Search
        </MDBBtn>
          </>
        }
      />
      </div>
      
    );
  }
}

export default HomePage;