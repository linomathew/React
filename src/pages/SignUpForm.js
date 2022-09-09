import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
  constructor() {
    super();

    this.state = {
      email: "" ,
      password: "",
      name: "",
      lname: "",
      age: "",
      address: "",
      mobno: "",
      dob: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }

  render() {
    return (
      <div className="formCenter">
        <form onSubmit={this.handleSubmit} className="formFields">
          <div className="formField">
            <label className="formFieldLabel">
              First Name
            </label>
            <input
              type="text"
              id="name"
              className="formFieldInput"
              placeholder="Enter your first name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
          </div>
           <div className="formField">
            <label className="formFieldLabel">
              Last Name
            </label>
            <input
              type="text"
              id="lname"
              className="formFieldInput"
              placeholder="Enter your lirst name"
              name="lname"
              value={this.state.lname}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel">
              Age
            </label>
            <input
              type="number"
              id="age"
              className="formFieldInput"
              placeholder="Enter your age"
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel">
              Address
            </label>
            <input
              type="text"
              id="address"
              className="formFieldInput"
              placeholder="Enter your address"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel">
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobno"
              className="formFieldInput"
              placeholder="Enter your mobile no:"
              name="mobno"
              value={this.state.mobno}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="formFieldInput"
              name="dob"
              value={this.state.dob}
              onChange={this.handleChange}
            />
          </div> 
          <div className="formField">
            <label className="formFieldLabel">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="formFieldInput"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div className="formField">
            <label className="formFieldLabel">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="formFieldInput"
              placeholder="Enter your password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          

          

          <div className="formField">
            <button className="formFieldButton">Sign Up</button>{" "}<br/><br/>
            <Link to="/sign-in" className="formFieldLink">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
