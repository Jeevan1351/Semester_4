import React from "react";

import BasicForm from "./home";

// import SignUp from "./SignUpMani";
// import {Navbar} from './components/Navbar';
// import Bananna from "./SignUp";
// import ProcPage from "./procPage";
import MaterialTable from 'material-table';

import {BrowserRouter, Route, Switch} from "react-router-dom";

import "./App.css";
import { Navbar, Nav, NavDropdown, Image, Table,
  //  Tab, Tabs, 
   Button
//   Form, Button
 } from 'react-bootstrap';
// import { green } from "@material-ui/core/colors";

 //import ReactPhone  from './phone'
//  import Fir_sem from './pages/1st_sem';
//  import Sec_sem from './pages/2nd_sem';
//  import thir_sem from './pages/3rd_sem';
//  import fort_sem from './pages/4th_sem';
//  import fiv_sem from './pages/5th_sem';
//  import six_sem from './pages/6th_sem';
//  import Home from './pages/home';
//  import sev_sem from './pages/7th_sem';
//  import eig_sem from './pages/8th_sem';
// import { Component } from "react";

class LandingPage extends React.Component{
  async componentDidMount(){
      window.gapi.load("signin2", ()=> {
      window.gapi.signin2.render('login-button')
      })
         
  }
  render(){
  if (this.props.isSignedIn === null) {
    return (
        <h1>  </h1>
    )
  }
  return (
    <BasicForm/>
    )
  }

}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: null,
      authInstance: null
    };
  }
  initializeGoogleSignIn() {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '365387672860-0nufnftmst8vqpp4l2rlreje9jch3m3c.apps.googleusercontent.com'
      }).then(() => {
        const authInstance = window.gapi.auth2.getAuthInstance()
        const isSignedIn = authInstance.isSignedIn.get()
        // console.log(isSignedIn)
        this.setState({isSignedIn: isSignedIn})
        authInstance.isSignedIn.listen(isSignedIn => {
          this.state.isSignedIn?window.location.replace("/"):window.location.replace("/home")
          this.setState({isSignedIn})
        })
      })
    })
  }
  componentDidMount() {
    const script = document.createElement('script')
    script.src = 'https://apis.google.com/js/platform.js'
    script.onload = () => this.initializeGoogleSignIn()
    document.body.appendChild(script)
  }

  ifUserSignedIn(Component) {
    if(this.state.isSignedIn === null){
      return <h1>Checking if you are signed in...</h1>
    }
    return this.state.isSignedIn ?
        <Component/> :
        <LandingPage/>
}
  render() {
    return (
      <div>
        <BrowserRouter>
                <Switch>
                    <Route exact path="/"  render={() => this.ifUserSignedIn(HomePage)}/>
                    <Route path="/home"  render={() => this.ifUserSignedIn(HomePage)}/>
                    <Route path='/signup' render={() => this.ifUserSignedIn(SignUp)}/>
                </Switch>
            </BrowserRouter>
      </div>
    );
  }
}




const initialState = {
  name: "",
  email: "",
  password: "",
  usn: "",
  DOB: "",
  phoneno: "",
  bloodgroup: "",
  Fname: "",
  foccupation: "",
  Address: "",
  fphoneno: "",
  femail: "",
  Mname: "",
  Moccupation: "",
  Mphoneno: "",
  Memail: "",
  Gname: "",
  Goccupation: "",
  Gphoneno: "",
  Gemail: "",
  LAddress: "",
  Proctor: "",
  nameError: "",
  emailError: "",
  ProctorError: "",
  usnError: "",
  DOBError: "",
  phonenoError: "",
  fnameError: "",
  femailError: "",
  MnameError: "",
  MemailError: "",
  GnameError: "",
  GemailError: "",
  fphonenoError: "",
  MphonenoError: "",
  GphonenoError: "",
  addressError: "",
  sem: "",
  section: "",
  batch: "",
  Scholarship: "",
  Cocurricular: "",
  Extracurricular: "",
authInstance: {signOut: ""}
};

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;

  }

  componentDidMount(){
    const authInstance = window.gapi.auth2.getAuthInstance()
    const user = authInstance.currentUser.get()
    const profile = user.getBasicProfile();
    const email = profile.getEmail();
    const name = profile.getName();
    const img = profile.getImageUrl();
    const googleId = profile.getId();
    this.setState({authInstance, name, email, img, gid: googleId})
  }
  handleChange = (event) => {
    const isCheckbox = event.target.type === "checkbox";
    this.setState({
      [event.target.name]: isCheckbox
        ? event.target.checked
        : event.target.value
    });
  };

  validate = () => {
    console.log("123");
    let nameError = "";
    let emailError = "";
    let ProctorError = "";
    let usnError = "";
    let DOBError = "";
    let phonenoError = "";
    let fnameError = "";
    let femailError = "";
    let MnameError = "";
    let MemailError = "";
    let GnameError = "";
    let GemailError = "";
    let semError = "";
    let sectionError = "";
    let batchError = "";
    let fphonenoError = "";
    let MphonenoError = "";
    let GphonenoError = "";
    let addressError = "";

    let namePattern = /^[a-zA-Z ]{2,30}$/;
    let mobPattern = /[456789][0-9]{9}/;

    if (!this.state.name) {
      nameError = "name required";
    } else {
      if (!namePattern.test(this.state.name)) {
        nameError = "Invalid name.";
      }
    }
    if (!this.state.email.includes("@bmsce.ac.in") || !this.state.email) {
      emailError = "invalid email";
      if (!this.state.email) {
        emailError = "email required";
      }
    }

    if (!this.state.Proctor) {
      ProctorError = "name required";
    } else {
      if (!namePattern.test(this.state.Proctor)) {
        ProctorError = "Invalid name.";
      }
    }

    if (!this.state.usn.includes("1BM") || !this.state.usn) {
      usnError = "invalid usn";
      if (!this.state.usn) {
        usnError = "usn required";
      }
    }

    if (!this.state.DOB) {
      DOBError = "date required";
    } else {
      var pattern = /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/;
      if (!pattern.test(this.state.DOB)) {
        DOBError = "invalid date";
      }
    }

    if (!this.state.phoneno) {
      phonenoError = "Number required";
    } else {
      if (!mobPattern.test(this.state.phoneno)) {
        phonenoError = "Invalid phone number.";
      }
    }

    if (!this.state.sem) {
      semError = "sem required";
    } else {
      var np = /^[0-9]+$/;
      if (!np.test(this.state.sem)) {
        semError = "Invalid sem";
      }
    }

    if (!this.state.section) {
      sectionError = "section required";
    } else {
      var sp = /^[a-zA-Z ]{1}$/;
      if (!sp.test(this.state.section)) {
        sectionError = "Invalid section.";
      }
    }

    if (!this.state.batch) {
      batchError = "batch required";
    }

    if (!this.state.fname) {
      fnameError = "name required";
    } else {
      if (!namePattern.test(this.state.fname)) {
        fnameError = "Invalid name.";
      }
    }

    if (!this.state.Mname) {
      MnameError = "name required";
    } else {
      if (!namePattern.test(this.state.Mname)) {
        MnameError = "Invalid name.";
      }
    }

    if (!this.state.fphoneno) {
      fphonenoError = "Number required";
    } else {
      if (!mobPattern.test(this.state.fphoneno)) {
        fphonenoError = "Invalid phone number.";
      }
    }
    if (!this.state.Mphoneno) {
      MphonenoError = "Number required";
    } else {
      if (!mobPattern.test(this.state.Mphoneno)) {
        MphonenoError = "Invalid phone number.";
      }
    }
    if (!this.state.Gphoneno) {
      GphonenoError = "Number required";
    } else {
      if (!mobPattern.test(this.state.Gphoneno)) {
        GphonenoError = "Invalid phone number.";
      }
    }

    if (!this.state.Address) {
      addressError = "adress required";
    }

    if (!this.state.femail.includes("@") && this.state.femail) {
      femailError = "invalid email";
    }

    if (!this.state.Memail.includes("@") && this.state.Memail) {
      MemailError = "invalid email";
    }

    if (!this.state.fname) {
      GnameError = "name required";
    } else {
      if (!namePattern.test(this.state.fname)) {
        GnameError = "Invalid name.";
      }
    }

    if (!this.state.Gemail.includes("@") && this.state.Gemail) {
      GemailError = "invalid email";
    }

    if (
      emailError ||
      nameError ||
      ProctorError ||
      usnError ||
      DOBError ||
      phonenoError ||
      semError ||
      sectionError ||
      batchError ||
      fnameError ||
      femailError ||
      MnameError ||
      MemailError ||
      GnameError ||
      GemailError
    ) {
      this.setState({
        emailError,
        nameError,
        ProctorError,
        usnError,
        semError,
        sectionError,
        batchError,
        DOBError,
        phonenoError,
        fnameError,
        femailError,
        MnameError,
        MemailError,
        GemailError,
        GnameError,
        fphonenoError,
        MphonenoError,
        GphonenoError,
        addressError
      });
      return false;
    }

    return true;
  };

  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      var to_send = {
        gid: this.state.gid,
        role: "Student",
        profile: {
          name: this.state.name,
          usn: this.state.usn,
          department: "CSE",
          proctor: this.state.Proctor,
          email: this.state.email,
          mobile_no: this.state.phoneno,
          dob: this.state.DOB,
          semester: this.state.sem,
          section: this.state.section,
          batch: this.state.batch,
          img: this.state.img
        },
        details: {
          fName: this.state.Fname,
          fOccu: this.state.foccupation,
          fPhno: this.state.fphoneno,
          fEmail: this.state.femail,
          mName: this.state.Mname,
          mOccu: this.state.Moccupation,
          mPhno: this.state.Mphoneno,
          mEmail: this.state.Memail
        }
      }
      var requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(to_send)
      }
      fetch(`http://localhost:8000/user`, requestOptions).then(res => res.json().then(val => {
        console.log(val)
      }))
      this.setState(initialState);
    }
  };
  render() {
    return (<>
              <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">Proctor Portal</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Nav>
                <Image src = {this.state.img} alt = "" width = "40" rounded></Image>
              <NavDropdown title={this.state.email} id="collasible-nav-dropdown">
                  <NavDropdown.Item href="" onClick ={this.state.authInstance.signOut} >Sign Out</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
      <div id="login-box" align="center">
        <h1 className="heading" align="center" style={{ paddingTop: "1.2em" }}>
          Registration-form
        </h1>
        <br />

        <div className="tab navbar navbar-dark bg-dark">
          <button>
            <a href="#general" className="pointer">
              General
            </a>
          </button>
          <button>
            <a href="#personal" className="pointer">
              Personal
            </a>
          </button>
          <button>
            <a href="#extra" className="pointer">
              Extra-curriculam
            </a>
          </button>
        </div>

        <div className="tabcontent">
          <form onSubmit={this.handleSubmit}>
            <div id="general">
              <br />
              <h5>-- General --</h5>
              <br />
              <div>
                <label htmlFor="name">
                  Name<b style={{ color: "red" }}>*</b>
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.nameError}
                </div>
              </div>
              <div>
                <label htmlFor="Email">
                  Email<b style={{ color: "red" }}>*</b>
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.emailError}
                </div>
              </div>
              <div>
                <label htmlFor="usn">
                  USN<b style={{ color: "red" }}>*</b>
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="usn"
                  placeholder="usn"
                  value={this.state.usn}
                  onChange={this.handleChange}
                  // style={{ width: "53.5rem" }}
                />
              </div>
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.usnError}
              </div>
              <div>
                <label htmlFor="DOB">
                  DATE of BIRTH<b style={{ color: "red" }}>*</b>
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="DOB"
                  placeholder="DD/MM/YYYY"
                  value={this.state.DOB}
                  onChange={this.handleChange}
                  // style={{ width: "53.5rem" }}
                />
              </div>
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.DOBError}
              </div>
              <div>
                <label htmlFor="phoneno">
                  Phone Number<b style={{ color: "red" }}>*</b>
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="phoneno"
                  placeholder="ph.no"
                  value={this.state.phoneno}
                  onChange={this.handleChange}
                />
              </div>
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.phonenoError}
              </div>
              <div>
                <label htmlFor="usn">
                  Proctor<b style={{ color: "red" }}>*</b>
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="Proctor"
                  placeholder="Proctor Name"
                  value={this.state.Proctor}
                  onChange={this.handleChange}
                />
              </div>
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.ProctorError}
              </div>
              <div>
                <label htmlFor="sem">
                  Sem<b style={{ color: "red" }}>*</b>
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="sem"
                  placeholder="Sem"
                  value={this.state.sem}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.semError}
                </div>
              </div>
              <div>
                <label htmlFor="sem">
                  Section<b style={{ color: "red" }}>*</b>
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="section"
                  placeholder="Section"
                  value={this.state.section}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.sectionError}
                </div>
              </div>
              <div>
                <label htmlFor="sem">
                  Batch<b style={{ color: "red" }}>*</b>
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="batch"
                  placeholder="Batch (e.g. B-3)"
                  value={this.state.batch}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.batchError}
                </div>
              </div>
              <div>
                <label htmlFor="bloodgroup">Blood Group</label> <br />
                <input
                  type="text"
                  name="bloodgroup"
                  placeholder="Blood Group"
                  value={this.state.bloodgroup}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <br></br>

            <div id="personal">
              <br />
              <h5>-- Personal --</h5>
              <div>
                <br />
                <label htmlFor="fname">
                  Father Name<b style={{ color: "red" }}>*</b>
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="fname"
                  placeholder="Father name"
                  value={this.state.fname}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.fnameError}
                </div>
              </div>
              <div>
                <br />
                <label htmlFor="Mname">
                  Mother Name<b style={{ color: "red" }}>*</b>
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="Mname"
                  placeholder="Mother name"
                  value={this.state.Mname}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.MnameError}
                </div>
              </div>
              <div>
                <br />
                <label htmlFor="foccupation">Father's Occupation:</label> <br />
                <input
                  type="text"
                  name="foccupation"
                  placeholder="Father's occupation"
                  value={this.state.foccupation}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <br />
                <label htmlFor="Moccupation">Mother's Occupation:</label> <br />
                <input
                  type="text"
                  name="Moccupation"
                  placeholder="Mother's occupation"
                  value={this.state.Moccupation}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="Address">
                  Permanent Address<b style={{ color: "red" }}>*</b>
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="Address"
                  placeholder="Address"
                  value={this.state.Address}
                  onChange={this.handleChange}
                  style={{ height: "100px", textAlign: "top" }}
                />
              </div>
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.addressError}
              </div>
              <div>
                <label htmlFor="femail">Father's Email:</label> <br />
                <input
                  type="text"
                  name="femail"
                  placeholder="Father's Email"
                  value={this.state.femail}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.femailError}
                </div>
              </div>
              <div>
                <label htmlFor="Memail">Mother's Email:</label> <br />
                <input
                  type="text"
                  name="Memail"
                  placeholder="Mother's Email"
                  value={this.state.Memail}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.MemailError}
                </div>
              </div>
              <div>
                <label htmlFor="phoneno">
                  Father's PhoneNumber<b style={{ color: "red" }}>*</b>
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="fphoneno"
                  placeholder="ph.no"
                  value={this.state.fphoneno}
                  onChange={this.handleChange}
                />
              </div>
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.fphonenoError}
              </div>
              <div>
                <label htmlFor="phoneno">
                  Mother's PhoneNumber<b style={{ color: "red" }}>*</b>
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="Mphoneno"
                  placeholder="ph.no"
                  value={this.state.Mphoneno}
                  onChange={this.handleChange}
                />
              </div>
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.MphonenoError}
              </div>
              <div>
                <br />
                <label htmlFor="Gname">
                  Local Guardian Name<b style={{ color: "red" }}>*</b>
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="Gname"
                  placeholder="Guardian name"
                  value={this.state.Gname}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.GnameError}
                </div>
              </div>
              <div>
                <br />
                <label htmlFor="Goccupation">Guardian's Occupation:</label>{" "}
                <br />
                <input
                  type="text"
                  name="Goccupation"
                  placeholder="Guardian's occupation"
                  value={this.state.Goccupation}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label htmlFor="phoneno">
                  Guardian's PhoneNumber<b style={{ color: "red" }}>*</b>
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="Gphoneno"
                  placeholder="ph.no"
                  value={this.state.Gphoneno}
                  onChange={this.handleChange}
                />
              </div>
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.GphonenoError}
              </div>
              <div>
                <label htmlFor="Gemail">Guardian's Email:</label> <br />
                <input
                  type="text"
                  name="Gemail"
                  placeholder="Guardian's Email"
                  value={this.state.gemail}
                  onChange={this.handleChange}
                />
                <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.GemailError}
                </div>
              </div>
              <div>
                <label htmlFor="LAddress">Local Address:</label> <br />
                <input
                  type="text"
                  name="LAddress"
                  placeholder="Address"
                  value={this.state.LAddress}
                  onChange={this.handleChange}
                  style={{ height: "100px", textAlign: "top" }}
                />
              </div>
            </div>
            <div id="extra">
              <br />
              <h5>-- Extra Curriculam --</h5>
              <div>
                <br />
                <label htmlFor="Scholarship">
                  Scholarship Received(If any)
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="Scholarship"
                  placeholder="Scholarship Received"
                  value={this.state.Scholarship}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <br />
                <label htmlFor="Co-curricular">
                  Co-curricular Achievements(State Level and above)
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="Cocurricular"
                  placeholder="Co-curricular Achievements"
                  value={this.state.Cocurricular}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <br />
                <label htmlFor="Extracurricular">
                  Extra-curricular Achievements(State Level and above)
                </label>{" "}
                <br />
                <input
                  type="text"
                  name="Extracurricular"
                  placeholder="Extra-curricular Achievements"
                  value={this.state.Extracurricular}
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button className="final" type="submit">
              Submit
            </button>
          </form>
          <div></div>
        </div>
      </div></>
    );
  }
}
  /*render(){
    return(<> 
     <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">Proctor Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Image src = {this.state.img} alt = "" width = "40" rounded></Image>
            <NavDropdown title={this.state.email} id="collasible-nav-dropdown">
                <NavDropdown.Item href="" onClick ={this.state.authInstance.signOut} >Sign Out</NavDropdown.Item>
                <NavDropdown.Divider />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    <div className="container emp-profile">
      <div>
        <label >Google ID:</label>
        <input type="text" id="gid" name="gid" value={this.state.gId}readOnly/><br/><br/>
        <label >Role:</label>
        <input type="text" id="role" name="role" value="Student" readOnly/><br/><br/>
        <label >Name:</label>
        <input type="text"  name="name" value={this.state.name} readOnly/><br/><br/>
        <label >Email:</label>
        <input type="text"  name="email" value= {this.state.email} readOnly/><br/><br/>
        <label >DOB:</label>
        <input type="text"  name="dob" onChange={(e) => {this.setState({dob:e.target.value})}}/><br/><br/>
        <label >Proctor:</label>
        <input type="text"  name="proctor" onChange={(e)=> {this.setState({proctor:e.target.value})}}/><br/><br/>
        <label >USN:</label>
        <input type="text"  name="usn" onChange={(e)=> {this.setState({usn:e.target.value})}}/><br/><br/>
        <label >department:</label>
        <input type="text"  name="department" onChange={(e)=> {this.setState({department:e.target.value})}}/><br/><br/>
        <label >batch:</label>
        <input type="text"  name="batch" onChange={(e)=> {this.setState({batch:e.target.value})}}/><br/><br/>
        <label >Mobile Number:</label>
        <input type="text"  name="mobile_no" onChange={(e)=> {this.setState({mobile_no:e.target.value})}}/><br/><br/>
        <label >Semster:</label>
        <input type="text"  name="semester" onChange={(e)=> {this.setState({semester:parseInt(e.target.value)})}}/><br/><br/>
        <input type="submit" onClick= {this.post_it} value="Submit"/>
      </div>
    </div>
    </>
      <>
       <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
         <Navbar.Brand href="#home">Proctor Portal</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="mr-auto">
           </Nav>
           <Nav>
            <Image src = {this.state.img} alt = "" width = "40" rounded></Image>
           <NavDropdown title={this.state.email} id="collasible-nav-dropdown">
               <NavDropdown.Item href="" onClick ={this.state.authInstance.signOut} >Sign Out</NavDropdown.Item>
               <NavDropdown.Divider />
             </NavDropdown>
         </Nav>
         </Navbar.Collapse>
       </Navbar>
       <div className="container emp-profile">
         <Form>
           <Form.Group  md="8">
             <Form.Label>Email address</Form.Label>
             <Form.Control type="email" value={this.state.email} readOnly />
          </Form.Group>
           <Form.Group>
             <Form.Label>Name</Form.Label>
             <Form.Control type="email" value={this.state.name} readOnly />
           </Form.Group>
           <Form.Group controlId="dob">
             <Form.Label>Date of Birth</Form.Label>
             <Form.Control type="date" name="dob" placeholder="Date of Birth" />
           </Form.Group>
           <Form.Group>
             <Form.Label>Department</Form.Label>
             <Form.Control as="select">
              <option>CSE</option>
               <option>ISE</option>
               <option>MECH</option>
               <option>EC</option>
               <option>EEE</option>
               <option>Civil</option>
               <option>Aerospace</option>
               <option>Chemical</option>
             </Form.Control>
           </Form.Group>
           <Form.Group controlId="exampleForm.ControlSelect1">
             <Form.Label>Blood Group</Form.Label>
             <Form.Control as="select">
               <option>A+ve</option>
               <option>B+ve</option>
               <option>O+ve</option>
               <option>AB+ve</option>
               <option>A-ve</option>
               <option>B-ve</option>
               <option>O-ve</option>
               <option>AB-ve</option>
             </Form.Control>
           </Form.Group>
           <Form.Group>
             <ReactPhone/>
           </Form.Group>
           <Button variant="primary" type="submit">
             Submit
           </Button>

         </Form>
      </div>

       </> 
    </>))
  }*/






class HomePage extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      authInstance: 0,
      name: 0,
      email: 0,
      img: 0,
      gId: 0,
      role:0,
      message: 0,
      status: null      
    }
  }

  componentDidMount(){
  const authInstance = window.gapi.auth2.getAuthInstance()
  const user = authInstance.currentUser.get()
  const profile = user.getBasicProfile();
  const email = profile.getEmail();
  const name = profile.getName();
  const img = profile.getImageUrl();
  const googleId = profile.getId();
  fetch(`user/${googleId}`).then(res => res.json().then(value => {
    this.setState({
      authInstance: authInstance,
      name:name,
      email:email,
      img:img,
      gId:googleId,
      role:value.role,
      message: value.message,
      status: value.message==="Not found user"?false:true      
    })
  }))
  }

  what_to_do(){
    if (this.state.gId !== 10000 && this.state.role === "Student"){
      // console.log(this.state.status, this.state.gId)
      return (
        <StudentHome data ={this.state}/>
      )
    }
    if(this.state.status && this.state.role === "Proctor")
    {
      return (<ProctorHome data={this.state}/>);
    
    }
    if(this.state.status === false)
      return (<>
        <h1> </h1>
        {window.location.replace('/signup')}
      </>)
  }

  render(){
  return (
    <>
      {this.what_to_do()}
    </>
    );
  }  
}


class ProctorHome extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      authInstance:this.props.data.authInstance,
      students: [1, 2, 3],
      role: "Proctor",
      data: {department: "CSE", batch:"2024"},
      profile:{
        department:"",
        batch: ""
      },
      cgpa: 0.00,
      chosenStudent: null,
      tabValue: 2,
      selected : [],
      semesters: [1, 2, 3],
      studentsSorted: {1: [], 2:[], 3:[]}
    }
  }

  componentDidMount(){
    fetch(`http://localhost:8000/proctor/${this.props.data.gId}`).then(res => res.json().then(value => {
      // console.log(value)
      this.setState(value)
      this.cleanStudents()
    }))
  }


  cleanStudents(){
    var students = this.state.students
    var semesters = []
    var studentsSorted = {}
    for(let i = 0; i<students.length; i++)
    {
      semesters.push(students[i].semester)
      studentsSorted[students[i].semester] = [] 
    }
    semesters = [...new Set(semesters)]
    for(let x = 0; x < semesters.length; x++)
    {
      for(let y = 0; y<students.length; y++)
      {
        if(students[y].semester === semesters[x])
        {
          studentsSorted[semesters[x]].push(students[y])
        }
      }
    }
    studentsSorted["Total"] = students
    semesters.push("Total")
    this.setState({studentsSorted, semesters})
  }


  getStudent(gid){
    fetch(`http://localhost:8000/student/${gid}`).then(res => res.json().then(value=> {
      // console.log(value)
      var arr = this.state.selected
      arr.push(value)
      this.setState({selected: arr})
    }))
  }

  handleChange = (event, val) => {
    // const isCheckbox = event.target.type === "checkbox";
    this.setState({ tabValue: val});
  };

  toggleTab(value){
    // console.log(value)
    this.setState({tabValue: value})
  }

  clearStudent(){
    this.setState({chosenStudent: null, sgpa: undefined, cgpa: 0.00, gradesReal: undefined})
  }

  computeCGPA(credits, sem){
    var i = 1
    var cgpa = 0
    var sum = 0
    var s = {}

    for(; i<sem; i++){
      let sgpa = 0
      var grades = this.state.gradesReal[i]
      grades.map(course => {
        var score = 0
        score = course.internal+(course.see/2)
        if(score>= 90){
          sgpa += 10*course.credits
        }
        else if(score>= 80){
          sgpa += 9*course.credits
        }
        else if(score>= 75){
          sgpa += 8*course.credits
        }
        else if(score>= 60){
          sgpa += 7*course.credits
        }
        else if(score>= 50){
          sgpa += 6*course.credits
        }
        else if(score>= 40){
          sgpa += 5*course.credits
        }
        else{
          sgpa += 0
        }
       return 0
      })
      cgpa += sgpa
      sgpa /= credits[i]
      sum += credits[i]
      s[i] = sgpa
    }
    cgpa /= sum
    // console.log(cgpa)
    this.setState({sgpa: s, cgpa: cgpa})
  }


  cleanGrades(grades, sem){
    var i = 1
    var group = []
    var t_c = {}
    if(grades.message === "No grades found"){
      return
    }
    while(i< sem){
      var total_credits = 0
      group[i] = []
      for(var j = 0; j<grades.length; j++){
        var element = grades[j]
        if (element.course_semester === i){
          total_credits += element.credits
          
          group[i].push(element)
          
        }
      }
      t_c[i] = total_credits
      i += 1
    }
    this.setState({gradesReal: group})
    this.computeCGPA(t_c, sem)
  }

  async changeEditable(){
    console.log("Boom")
    if(this.state.editable === 0){
      var e_marks = document.getElementsByClassName("editable")
      for (var j=0; j < e_marks.length; j++) {
        e_marks[j].removeAttribute('readOnly')
      }
      this.setState({editable: 1})
    }
    else{
      var e_mark = document.getElementsByClassName("editable")
      for (var i=0; i < e_mark.length; i++) {
        e_mark[i].setAttribute('readOnly', 'readOnly')
      }
      this.setState({editable: 0})
      let cgrades = this.state.grades
      let l = cgrades.length
      for(let k = 0;k<l; k++) {
        var course = cgrades[k]
        var elements = document.getElementsByClassName(course.course_id)
        cgrades[k].internal = parseInt(elements[0].value)
        cgrades[k].see = parseInt(elements[1].value)
      }
      this.setState({grades: cgrades})
      this.cleanGrades(cgrades, this.state.profile.semester)
      var requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          grades: this.state.grades
  
      })}
      await fetch(`http://localhost:8000/student/grades`, requestOptions).then(() => console.log("Done"))
    }
  }







  render(){
    return(<>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">Proctor Portal</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
              </Nav>
              <Nav>
                <Image src = {this.props.data.img} alt = "" width = "40" rounded></Image>
              <NavDropdown title={this.props.data.email} id="collasible-nav-dropdown">
                  <NavDropdown.Item href="" onClick ={this.state.authInstance.signOut} >Sign Out</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
          </Navbar>
      <div className="container emp-profile">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                  <Image src={this.props.data.img} alt="" width = "2" rounded/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Name: {this.state.profile.p_name}</h5>
                <h5>Email: {this.state.profile.p_email}</h5>
                <h5>Phone Number: {this.state.profile.p_mobile_no}</h5>
              </div>
            </div>
          <div className="col-md-2">
            <input type="submit"  onClick = {this.state.authInstance.signOut} className="profile-edit-btn" name="btnAddMore" value="Sign Out"/>
          </div>
      </div>
        <div className="profile-tab" >
          <br/><br/>
            <div id="home" aria-labelledby="home-tab">
              <div className="tab navbar navbar-dark bg-dark">
                {
                this.state.semesters.map((sem, idx)=>{
                  return(
                  <div className={this.state.tabValue===sem? "active-tabs" : "tabs"} key ={idx*12+73}>
                    <Button className={(this.state.tabValue===sem)? "active-tabs" : "tabs"} onClick={()=> this.toggleTab(sem)}>{(sem!=='Total')?`Semester ${sem}`: 'All Students'}</Button>
                    </div>
                  )
                })            
                }
              </div>
            <div className="content-tabs">
              {
                        <MaterialTable 
                        columns={[
                          {title: 'Name', field: 'name'},
                          {title: 'USN', field: 'usn'},
                          {title: 'Email', field: 'email'},
                          {title: 'Section', field: 'section'},
                          {title: 'Mobile No.', field: 'mobile_no'},
                          {title: 'CGPA', field: 'cgpa'},
                          {title: 'D.O.B', field: 'dob'}
                        ]}
                        data = {this.state.studentsSorted[this.state.tabValue]}
                        options={{exportButton: true}}
                        title={(this.state.tabValue!=='Total')?`Semester ${this.state.tabValue}`: 'All Students'}
                        actions={[
                          {
                            icon: 'person',
                            onClick: (event, rowData) => {
                              fetch(`http://localhost:8000/student/${rowData.g_id}`).then(res => res.json().then(value => {
                                // console.log(value)
                                this.setState({chosenStudent: value})
                                this.setState({gradesReal: value.marks})
                                this.cleanGrades(value.marks, value.profile.semester)
                              }))
                            }
                          }
                        ]}
                        localization={{
                          header: {
                              actions: ''
                          },
                          body: {
                              emptyDataSourceMessage: 'No records to display',
                              filterRow: {
                                  filterTooltip: 'Filter'
                              }
                          }
                      }}
                        components={{
                          Action: props => (
                            <Button
                              className="Action-col"
                              onClick={(event) => props.action.onClick(event, props.data)}
                              color="primary"
                              variant="contained"
                              style={{textTransform: 'none'}}
                              size="small"
                            >
                              Get Details
                            </Button>
                          ),
                        }}
                        />
              }
            </div>
            <div className={(this.state.chosenStudent !== null)?"Chosen-Name":"content"}>
                {
                  (this.state.chosenStudent!== null)?
                     <div>
        <div className="profile-tab" >
            <div id="home" aria-labelledby="home-tab" style={{border: '2px solid black'}}>
            <br></br><br></br>
              <div className="row">
                  <div className="col-md-2">
                      <label>Name :</label>
                  </div>
                  <div className="col-md-4">
                      <p>{this.state.chosenStudent.profile.name}</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-2">
                      <label>Email :</label>
                  </div>
                  <div className="col-md-4">
                      <p>{this.state.chosenStudent.profile.email}</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-2">
                      <label>DoB : </label>
                  </div>
                  <div className="col-md-2">
                      <p>{this.state.chosenStudent.profile.dob}</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-2">
                      <label>Semester : </label>
                  </div>
                  <div className="col-md-2">
                      <p>{this.state.chosenStudent.profile.semester}</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-2">
                      <label>CGPA : </label>
                  </div>
                  <div className="col-md-2">
                      <p>{(this.state.chosenStudent.profile.cgpa !== 0.00 && this.state.chosenStudent.profile.cgpa !== 0.0)?this.state.cgpa.toFixed(2):"Not updated yet"}</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-2">
                      <label>USN : </label>
                  </div>
                  <div className="col-md-2">
                      <p>{this.state.chosenStudent.profile.usn}</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-2">
                      <label>Mobile No: </label>
                  </div>
                  <div className="col-md-2">
                      <p>{this.state.chosenStudent.profile.mobile_no}</p>
                  </div>
              </div>
              <div>
                 {
                   (this.state.gradesReal !== undefined && this.state.gradesReal.length <= 8 && this.state.sgpa !== undefined && this.state.gradesReal !== [])?<div>
                     {this.state.gradesReal.map((semester, idx)=>{
                       var sgpa = this.state.sgpa
                      //  console.log(typeof(semester), semester[0].course_semester, sgpa)
                       if(semester !== null){
                        //  console.log(semester)
                         return <MaterialTable key={idx}
                            columns={[
                              {title: 'Course Id', field: 'course_id'},
                              {title: 'Course Name', field: 'course_name'},
                              {title: 'Credits', field: 'credits'},
                              {title: 'Internal', field: 'internal'},
                              {title: 'Semester End', field: 'see'},
                            ]}
                            data = {semester}
                            options={{exportButton: true}}
                            title={`Semester ${semester[0].course_semester} SGPA: ${sgpa[semester[0].course_semester].toFixed(2)}`}
                         />
                       }
                       return <></>
                     })}
                   </div>:<></>
                 }
                </div>
              </div>
            </div>
                    <Button onClick={()=>{this.clearStudent()}}> Close </Button>
                    </div>: <></>
                }
              </div>
          </div>
              
          </div>           
        </div>
      </>)
  }
}



class StudentHome extends React.Component {
  constructor(props){
    super(props)
    this.changeEditable = this.changeEditable.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.state = {
      authInstance:0,
      name:false,
      email:0,
      img:0,
      gId:10000,
      sgpa:[0],
      status: null,
      role: "Student",
      data: {department: "CSE", batch:"2024"},
      isSignedIn: false,
      profile:{
        department:"",
        batch: ""
      },
      proctor: {
        p_name:"",
        p_email:""
      },
      gradesReal: [[{course_semester: 10, course_id: 1}, {course_semester: 9, course_id: 2}, {course_semester: 8, course_id:3}]],
      editable: 0
    }
  }
  async componentDidMount(){
    // console.log("Working")
    // console.log(this.props)
    await fetch(`/student/${this.props.data.gId}`).then(res => res.json().then( value=> {
      // console.log(value)
      this.setState({
        img: this.props.img,
        profile: value.profile,
        details: value.details,
        proctor: value.proc,
        grades: value.marks,
        isSignedIn: true
      })
      this.cleanGrades(value.marks, value.profile.semester)
    }))
  }

  computeCGPA(credits, sem){
    var i = 1
    var cgpa = 0
    var sum = 0
    var s = {}

    for(; i<sem; i++){
      let sgpa = 0
      var grades = this.state.gradesReal[i]
      grades.map(course => {
        var score = 0
        score = course.internal+(course.see/2)
        if(score>= 90){
          sgpa += 10*course.credits
        }
        else if(score>= 80){
          sgpa += 9*course.credits
        }
        else if(score>= 75){
          sgpa += 8*course.credits
        }
        else if(score>= 60){
          sgpa += 7*course.credits
        }
        else if(score>= 50){
          sgpa += 6*course.credits
        }
        else if(score>= 40){
          sgpa += 5*course.credits
        }
        else{
          sgpa += 0
        }
       return 0
      })
      cgpa += sgpa
      sgpa /= credits[i]
      sum += credits[i]
      s[i] = sgpa
    }
    cgpa /= sum
    // console.log(cgpa)
    this.setState({sgpa: s, cgpa: cgpa})
  }


  cleanGrades(grades, sem){
    var i = 1
    var group = []
    var t_c = {}
    if(grades.message === "No grades found"){
      return
    }
    while(i< sem){
      var total_credits = 0
      group[i] = []
      for(var j = 0; j<grades.length; j++){
        var element = grades[j]
        if (element.course_semester === i){
          total_credits += element.credits
          
          group[i].push(element)
          
        }
      }
      t_c[i] = total_credits
      i += 1
    }
    this.setState({gradesReal: group})
    this.computeCGPA(t_c, sem)
  }

  async changeEditable(){
    console.log("Boom")
    if(this.state.editable === 0){
      var e_marks = document.getElementsByClassName("editable")
      for (var j=0; j < e_marks.length; j++) {
        e_marks[j].removeAttribute('readOnly')
      }
      this.setState({editable: 1})
    }
    else{
      var e_mark = document.getElementsByClassName("editable")
      for (var i=0; i < e_mark.length; i++) {
        e_mark[i].setAttribute('readOnly', 'readOnly')
      }
      this.setState({editable: 0})
      let cgrades = this.state.grades
      let l = cgrades.length
      for(let k = 0;k<l; k++) {
        var course = cgrades[k]
        var elements = document.getElementsByClassName(course.course_id)
        cgrades[k].internal = parseInt(elements[0].value)
        cgrades[k].see = parseInt(elements[1].value)
      }
      this.setState({grades: cgrades})
      this.cleanGrades(cgrades, this.state.profile.semester)
      var requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          grades: this.state.grades
  
      })}
      await fetch(`http://localhost:8000/student/grades`, requestOptions).then(() => console.log("Done"))
    }
  }




  render(){
    return(<>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Navbar.Brand href="#home">Proctor Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Image src = {this.props.data.img} alt = "" width = "40" rounded></Image>
          <NavDropdown title={this.state.profile.email} id="collasible-nav-dropdown">
              <NavDropdown.Item href="" onClick ={this.state.authInstance.signOut} >Sign Out</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                  <Image src={this.props.data.img} alt="" width = "2" rounded/>
              </div>
          </div>
          <div className="col-md-6">
              <div className="profile-head">
                <h5>{this.state.profile.name}</h5>
                <h5>{this.state.profile.department} Deaprtment</h5>
                <h5>Batch - {this.state.profile.batch}</h5>
                <h5>Proctor - {this.state.proctor.p_name}</h5>
                <h5>Proctor Email - {this.state.proctor.p_email}</h5>
                <h5>Proctor Mobile No: {this.state.proctor.p_mobile_no}</h5>
              </div>
          </div>
          <div className="col-md-2">
              <input type="submit"  onClick = {this.props.data.authInstance.signOut} className="profile-edit-btn" name="btnAddMore" value="Sign Out"/>
          </div>
      </div>
        <div className="profile-tab" >
            <div id="home" aria-labelledby="home-tab">
            <br></br><br></br>
              <div className="row">
                  <div className="col-md-2">
                      <label>Name :</label>
                  </div>
                  <div className="col-md-4">
                      <p>{this.state.profile.name}</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-2">
                      <label>Email :</label>
                  </div>
                  <div className="col-md-4">
                      <p>{this.state.profile.email}</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-2">
                      <label>Date of Birth : </label>
                  </div>
                  <div className="col-md-2">
                      <p>{this.state.profile.dob}</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-2">
                      <label>Semester : </label>
                  </div>
                  <div className="col-md-2">
                      <p>{this.state.profile.semester}</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-2">
                      <label>CGPA : </label>
                  </div>
                  <div className="col-md-2">
                      <p>{(this.state.cgpa)?this.state.cgpa.toFixed(2):9}</p>
                  </div>
              </div>
              <div>
                <div>
                  <input id="edit" className="profile-edit-btn" type="button" onClick={this.changeEditable} value={(this.state.editable)?"Update":"Edit"}/>
                </div>
                {
                  this.state.gradesReal.map((semester, i)=> {
                    var sem = semester[0].course_semester
                    var sgpa = this.state.sgpa[sem]
                    return <div key={i}><Table responsive="sm">
                      <thead>
                      <tr>
                        <th>Semester : {semester[0].course_semester}</th>
                        <th>Course Name</th>
                        <th>Credits</th>
                        <th>Internals</th>
                        <th>Semester</th>
                      </tr>
                      </thead>
                      <tbody>{
                        semester.map((courses, idx)=> {
                          return (<tr key={idx}>
                            <td>{courses.course_id}</td>
                            <td>{courses.course_name}</td>
                            <td>{courses.credits}</td>
                            <td><input type="text" readOnly='readOnly' className={`editable ${courses.course_id} ${courses.course_semester}`} defaultValue={courses.internal}/></td>
                            <td><input type="text" readOnly='readOnly' className={`editable ${courses.course_id} ${courses.course_semester}`} defaultValue={courses.see}/></td>
                            </tr>)
                        })
                          }
                          </tbody>
                          <thead>
                      <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th>Semester GPA :   {(sgpa)?sgpa.toFixed(2):sgpa}</th>
                        <th></th>
                      </tr>
                      </thead>  
                    </Table>
                    </div>
                    })
                }
                </div>
              </div>
            </div>
          </form>           
        </div>
      </>)
  }
}

export default App;
