import './Forms.css';
import React from "react";
class Forms extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},   
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this);  
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  

  }

  submituserRegistrationForm(e) {
    console.log(this.validateForm());
    
    e.preventDefault();
    if (this.validateForm()) {
        console.log(this.state);
         let fields = {};
         fields["username"] = "";
         fields["emailid"] = "";
         fields["mobileno"] = "";
         fields["password"] = "";
        this.setState({fields:fields});
        console.log(this.state);
        alert("Your Form has been submitted successfully.");
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["username"]) {
      formIsValid = false;
      errors["username"] = "*PLEASE ENTER YOUR USERNAME.";
    }

    if (typeof fields["username"] !== "undefined") {
      if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["username"] = "*PLEASE  ENTER ALPHABET CHARACTERS ONLY.";
      }
    }

    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*PLEASE ENTER YOUR EMAIL-ID .";
    }

    if (typeof fields["emailid"] !== "undefined") {
      var pattern = new RegExp(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*PLEASE ENTER VALID EMAIL-ID.";
      }
    }

    if (!fields["mobileno"]) {
      formIsValid = false;
      errors["mobileno"] = "*PLEASE ENTER YOUR MOBILE NO.";
    }

    if (typeof fields["mobileno"] !== "undefined") {
      if (!fields["mobileno"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["mobileno"] = "*PLEASE ENTER VALID MOBILE NO.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*PLEASE ENTER YOUR PASSWORD.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.(?=.{8,})(?=.\d)(?=.[a-z])(?=.[A-Z][@#$%&]).$/)) {
        formIsValid = false;
        errors["password"] = "*PLEASE ENTER SECURE AND STORNG PASSWORD.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
    
  }

render() {
  return (
    <center>
    <div className='Fromcss'>
  <div id="main-registration-container" className="Frompage">
   <div id="register">
    <center>
      <h1>REGISTRATION FORM</h1><hr></hr>
      </center>
      <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <h3>
      <label>NAME  : </label>
      <input type="text" name="username" placeholder='Enter your Name' value={this.state.fields.username} onChange={this.handleChange} required/>
      </h3>
      <div className="errorMsg">{this.state.errors.username}</div>
      <h3>
      <label>EMAIL ID : </label>
      <input type="text" name="emailid" placeholder='Enter your EmailId' value={this.state.fields.emailid} onChange={this.handleChange}  required />
      </h3>
      <div className="errorMsg">{this.state.errors.emailid}</div>
      <h3>
      <label>MOBILE NO : </label>
      <input type="text" name="mobileno" placeholder="Enter your MobileNo" value={this.state.fields.mobileno} onChange={this.handleChange} required  />
      </h3>
      <div className="errorMsg">{this.state.errors.mobileno}</div>
      <h3>
      <label>PASSWORD : </label>
      <input type="password" name="password"  value={this.state.fields.password} onChange={this.handleChange} />
      </h3>
      <div className="errorMsg">{this.state.errors.password}</div>
      <input type="submit" className="button"  value="Register"/>

      </form>
  </div>
</div>
</div>
</center>

    );
}
}
export default Forms