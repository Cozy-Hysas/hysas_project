import React from 'react';
import $ from 'jquery';

class HouseRenter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            imageUrl: '',
            description: '',
            adress: '',
            price: 0,
            startDate:null,
            endDate:null
        }

        this.handleEventOnChange = this.handleEventOnChange.bind(this);
        this.handleEventOnClick = this.handleEventOnClick.bind(this);
    }

    handleEventOnChange(e) {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    handleEventOnClick(e) {
        e.preventDefault()
        var newHouse = {title: this.state.title, imageUrl: this.state.imageUrl, description: this.state.description, adress: this.state.adress, price: this.state.price, startDate: this.state.startDate, endDate: this.state.endDate};
        console.log(newHouse);
        $.post('/House/addHouse', newHouse, (err, results) => {
            if(err) console.log(err);
            else {
                console.log(results);
            }
        })
        console.log(this.state)
    }
   
    render() {
        return (
            <div>
            <div className="add">
                <div className="add-house">
                    <h3>Enter information for the House to rent</h3>
            <form onSubmit={this.handleEventOnClick}>
                Title: <input className="input" type="text" name="title" onChange={this.handleEventOnChange} required/>
                Image: <input className="input" type="text" name="imageUrl" onChange={this.handleEventOnChange}/>
                Description: <textarea className="textarea" name="description" cols="30" rows="10" onChange={this.handleEventOnChange}required></textarea>
                Adress: <input className="input" type="text" name="adress" onChange={this.handleEventOnChange} required/>
                Price: <input className="input" type="number" name="price" min ='0' max = '100' onChange={this.handleEventOnChange}required/>
                daysOfService:   startDate <input className="input" type='date' name="startDate" onChange={this.handleEventOnChange}required/>
                                 EndDate <input className="input" type="date" name="endDate" onChange={this.handleEventOnChange}required/>
                
                <button className="btn btn-success" type="submit" >Add my House</button>
            </form>
            </div>
            </div>
            </div>
        )
    }
}
export default HouseRenter;