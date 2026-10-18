import React, {Component} from "react";

export default class GreetUserClass extends Component{
    constructor(){
        super();
        this.state = {
            firstName : "abc",
            lastName : "def",
        }
    }
    
    //handle first name
    handleFirstName = (e) =>{  //e means event
        console.log(e.target.value);
        
        //setting the state (firstName)
        this.setState({
            firstName : e.target.value,
        })
    }
    //handle last name
    handleLastName = (e) => { // e means event
        //setting the state (lastName)
        this.setState({
            lastName : e.target.value,
        })
    }
    render(){
        return (
            <>
            <div style={{margin : "10px"}}>
                <label htmlFor="firstName">FIrst name : </label>
                <input type="text" id="firstName" onKeyUp={this.handleFirstName}></input>
            </div>
            <div>
                <label htmlFor="lastName">Last name : </label>
                <input type="text" id="lastName"  onKeyUp={this.handleLastName}></input>
            </div>
            <h1>Hello! {this.state.firstName} {this.state.lastName}</h1>
            </>
        )
    }
}