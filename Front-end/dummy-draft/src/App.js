import React from "react";

import BasicForm from "./home";


// import {Navbar} from './components/Navbar';

// import Bananna from "./SignUp";
import ProcPage from "./procPage";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import "./App.css";

import { Navbar, Nav, NavDropdown, Image, Table,
  //  Tab, Tabs, Button
//   Form, Button
 } from 'react-bootstrap';

 //import ReactPhone  from './phone'

 import Fir_sem from './pages/1st_sem';
 import Sec_sem from './pages/2nd_sem';
 import thir_sem from './pages/3rd_sem';
 import fort_sem from './pages/4th_sem';
 import fiv_sem from './pages/5th_sem';
 import six_sem from './pages/6th_sem';
 import Home from './pages/home';
 import sev_sem from './pages/7th_sem';
 import eig_sem from './pages/8th_sem';
class LandingPage extends React.Component{
  async componentDidMount(){
      window.gapi.load("signin2", ()=> {
      window.gapi.signin2.render('login-button')
      })
         
  }render(){
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
        const authInstance =  window.gapi.auth2.getAuthInstance()
        const isSignedIn = authInstance.isSignedIn.get()
        // console.log(isSignedIn)
        this.setState({isSignedIn: isSignedIn, authInstance: authInstance})
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
                    <Route path='/' exact component={Home} />
                    <Route path='/1st_sem' exact component={<Fir_sem data={this.state}/>} />
                    <Route path='/2nd_sem' component={<Sec_sem data={this.state}/>} />
                    <Route path='/3rd_sem' component={thir_sem} />
                    <Route path='/4th_sem' component={fort_sem} />
                    <Route path='/5th_sem' component={fiv_sem} />
                    <Route path='/6th_sem' component={six_sem} />
                    <Route path='/7th_sem' component={sev_sem} />
                    <Route path='/8th_sem' component={eig_sem} />
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
  Accomodation: "",
  nameError: "",
  emailError: "",
  passwordError: "",
  usnError: "",
  DOBError: "",
  phonenoError: "",
  fnameError: "",
  femailError: "",
  MnameError: "",
  MemailError: "",
  GnameError: "",
  GemailError: ""
};


class SignUp extends React.Component{
  constructor(props){
    super(props)
    this.state = initialState
  }
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     authInstance:0,
  //     name:0,
  //     email:0,
  //     usn: 0,
  //     department: null,
  //     mobile_no: null,
  //     proctor_id: null,
  //     semester: 0,
  //     section: 0,
  //     batch: 0,
  //     role:"Student",
  //     img:0,
  //     gId:0,
  //     proctor:null,
  //     dob:null,
  //     respones:null,
  //   }
  // this.post_it=this.post_it.bind(this)

  // }
  // componentDidMount(){
  //   const authInstance = window.gapi.auth2.getAuthInstance()
  //   const user = authInstance.currentUser.get()
  //   const profile = user.getBasicProfile();
  //   const email = profile.getEmail();
  //   const name = profile.getName();
  //   const img = profile.getImageUrl();
  //   const googleId = profile.getId();
  //   this.setState({
  //     authInstance: authInstance,
  //     name:name,
  //     email:email,
  //     img:img,
  //     gId:googleId,
  //   })
  // }


  // post_it(){
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ 
  //       gid: this.state.gId,
  //       role:this.state.role,
  //       name:this.state.name,
  //       dob:this.state.dob,
  //       proctor:this.state.proctor,
  //       email:this.state.email,
  //       semester: this.state.semester,
  //       mobile_no: this.state.mobile_no,
  //       proctor_id: null,
  //       department: this.state.department,
  //       batch: this.state.batch,
  //       usn: this.state.usn,
  //       section:'B',

  //     })
  // }

  // fetch('http://localhost:8000/user', requestOptions).then(window.location.replace('/home'))
  // }
  
    handleChange = (event) => {
      const isCheckbox = event.target.type === "checkbox";
      this.setState({
        [event.target.name]: isCheckbox
          ? event.target.checked
          : event.target.value
      });
    };
  
    validate = () => {
      console.log("123")
      let nameError = "";
      let emailError = "";
      let passwordError = "";
      let usnError = "";
      let DOBError = "";
      let phonenoError = "";
      let fnameError = "";
      let femailError = "";
      let MnameError = "";
      let MemailError = "";
      let GnameError = "";
      let GemailError = "";
  
      if (!this.state.name) {
        nameError = "name cannot be blank";
      }
  
      if (!this.state.email.includes("@bmsce.ac.in")) {
        emailError = "invalid email";
      }
  
      if (!this.state.password) {
        passwordError = "password required";
      }
  
      if (!this.state.usn.includes("1BM")) {
        usnError = "invalid usn";
      }
  
      if (!this.state.DOB.includes("//")) {
        DOBError = "invalid date";
      }
  
      if (!this.state.phoneno.includes("0123456789")) {
        phonenoError = "invalid number";
      }
  
      if (!this.state.fname) {
        fnameError = "name cannot be blank";
      }
  
      if (!this.state.femail.includes("@")) {
        femailError = "invalid email";
      }
  
      if (!this.state.Mname) {
        MnameError = "name cannot be blank";
      }
  
      if (!this.state.Memail.includes("@")) {
        MemailError = "invalid email";
      }
  
      if (!this.state.Gname) {
        GnameError = "name cannot be blank";
      }
  
      if (!this.state.Gemail.includes("@")) {
        GemailError = "invalid email";
      }
  
      if (
        emailError ||
        nameError ||
        passwordError ||
        usnError ||
        DOBError ||
        phonenoError ||
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
          passwordError,
          usnError,
          DOBError,
          phonenoError,
          fnameError,
          femailError,
          MnameError,
          MemailError,
          GemailError,
          GnameError
        });
        return false;
      }
  
      return true;
    };
  
    handleSubmit = (event) => {
      console.log(this.state)
      event.preventDefault();
      const isValid = this.validate();
      if (isValid) {
        console.log(this.state);
        // clear form
        this.setState(initialState);
      }
    };
  render() {
    return (
      <div id="login-box">
        <h1 className="heading" align="center" style={{ paddingTop: "1.2em" }}>
          Registration-form
        </h1>
        <br />
        
        <div id="general" className="tabcontent">
          <div id="right-box">
            <form onSubmit={this.handleSubmit}>
              <div align="center" style={{ marginLeft: "10%" }}>
                <br />
                <div>
                  <label htmlFor="name">Name:</label> <br />
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
                  <label htmlFor="Email">Email:</label> <br />
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
                  <label htmlFor="usn">USN:</label> <br />
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
                  <label htmlFor="DOB">DATE of BIRTH:</label> <br />
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
                  <label htmlFor="phoneno">Phone Number:</label> <br />
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
                  <label htmlFor="bloodgroup">Blood Group:</label> <br />
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
                
                <div>
                  <br />
                  <label htmlFor="fname">Father Name:</label> <br />
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
                  <label htmlFor="Mname">Mother Name:</label> <br />
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
                  <label htmlFor="Address">Permanent Address:</label> <br />
                  <input
                    type="text"
                    name="Address"
                    placeholder="Address"
                    value={this.state.Address}
                    onChange={this.handleChange}
                    style={{ height: "100px", textAlign: "top" }}
                  />
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
                  <label htmlFor="phoneno">Father's PhoneNumber:</label> <br />
                  <input
                    type="text"
                    name="fphoneno"
                    placeholder="ph.no"
                    value={this.state.fphoneno}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phoneno">Mother's PhoneNumber:</label> <br />
                  <input
                    type="text"
                    name="Mphoneno"
                    placeholder="ph.no"
                    value={this.state.Mphoneno}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <br />
                  <label htmlFor="Gname">Local Guardian Name:</label> <br />
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
                  <label htmlFor="Goccupation">Guardian's Occupation:</label> <br />
                  <input
                    type="text"
                    name="Goccupation"
                    placeholder="Guardian's occupation"
                    value={this.state.Goccupation}
                    onChange={this.handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="phoneno">Guardian's PhoneNumber:</label> <br />
                  <input
                    type="text"
                    name="Gphoneno"
                    placeholder="ph.no"
                    value={this.state.Gphoneno}
                    onChange={this.handleChange}
                  />
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
                <button className="final" type="submit">
                Submit
              </button> 
                </form>
                <div>
              </div>
              
              
           </div> 
          </div>
        
      </div>
    );
  }

  // render(){
  //   return(<> 
  //    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  //       <Navbar.Brand href="#home">Proctor Portal</Navbar.Brand>
  //       <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //       <Navbar.Collapse id="responsive-navbar-nav">
  //         <Nav className="mr-auto"></Nav>
  //         <Nav>
  //           <Image src = {this.state.img} alt = "" width = "40" rounded></Image>
  //           <NavDropdown title={this.state.email} id="collasible-nav-dropdown">
  //               <NavDropdown.Item href="" onClick ={this.state.authInstance.signOut} >Sign Out</NavDropdown.Item>
  //               <NavDropdown.Divider />
  //           </NavDropdown>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Navbar>
  //   <div className="container emp-profile">
  //     <div>
  //       <label >Google ID:</label>
  //       <input type="text" id="gid" name="gid" value={this.state.gId}readOnly/><br/><br/>
  //       <label >Role:</label>
  //       <input type="text" id="role" name="role" value="Student" readOnly/><br/><br/>
  //       <label >Name:</label>
  //       <input type="text"  name="name" value={this.state.name} readOnly/><br/><br/>
  //       <label >Email:</label>
  //       <input type="text"  name="email" value= {this.state.email} readOnly/><br/><br/>
  //       <label >DOB:</label>
  //       <input type="text"  name="dob" onChange={(e) => {this.setState({dob:e.target.value})}}/><br/><br/>
  //       <label >Proctor:</label>
  //       <input type="text"  name="proctor" onChange={(e)=> {this.setState({proctor:e.target.value})}}/><br/><br/>
  //       <label >USN:</label>
  //       <input type="text"  name="usn" onChange={(e)=> {this.setState({usn:e.target.value})}}/><br/><br/>
  //       <label >department:</label>
  //       <input type="text"  name="department" onChange={(e)=> {this.setState({department:e.target.value})}}/><br/><br/>
  //       <label >batch:</label>
  //       <input type="text"  name="batch" onChange={(e)=> {this.setState({batch:e.target.value})}}/><br/><br/>
  //       <label >Mobile Number:</label>
  //       <input type="text"  name="mobile_no" onChange={(e)=> {this.setState({mobile_no:e.target.value})}}/><br/><br/>
  //       <label >Semster:</label>
  //       <input type="text"  name="semester" onChange={(e)=> {this.setState({semester:parseInt(e.target.value)})}}/><br/><br/>
  //       <input type="submit" onClick= {this.post_it} value="Submit"/>
  //     </div>
  //   </div>
  //   </>
  //    /* <>
  //      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  //        <Navbar.Brand href="#home">Proctor Portal</Navbar.Brand>
  //        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  //        <Navbar.Collapse id="responsive-navbar-nav">
  //          <Nav className="mr-auto">
  //          </Nav>
  //          <Nav>
  //           <Image src = {this.state.img} alt = "" width = "40" rounded></Image>
  //          <NavDropdown title={this.state.email} id="collasible-nav-dropdown">
  //              <NavDropdown.Item href="" onClick ={this.state.authInstance.signOut} >Sign Out</NavDropdown.Item>
  //              <NavDropdown.Divider />
  //            </NavDropdown>
  //        </Nav>
  //        </Navbar.Collapse>
  //      </Navbar>
  //      <div className="container emp-profile">
  //        <Form>
  //          <Form.Group  md="8">
  //            <Form.Label>Email address</Form.Label>
  //            <Form.Control type="email" value={this.state.email} readOnly />
  //         </Form.Group>
  //          <Form.Group>
  //            <Form.Label>Name</Form.Label>
  //            <Form.Control type="email" value={this.state.name} readOnly />
  //          </Form.Group>
  //          <Form.Group controlId="dob">
  //            <Form.Label>Date of Birth</Form.Label>
  //            <Form.Control type="date" name="dob" placeholder="Date of Birth" />
  //          </Form.Group>
  //          <Form.Group>
  //            <Form.Label>Department</Form.Label>
  //            <Form.Control as="select">
  //             <option>CSE</option>
  //              <option>ISE</option>
  //              <option>MECH</option>
  //              <option>EC</option>
  //              <option>EEE</option>
  //              <option>Civil</option>
  //              <option>Aerospace</option>
  //              <option>Chemical</option>
  //            </Form.Control>
  //          </Form.Group>
  //          <Form.Group controlId="exampleForm.ControlSelect1">
  //            <Form.Label>Blood Group</Form.Label>
  //            <Form.Control as="select">
  //              <option>A+ve</option>
  //              <option>B+ve</option>
  //              <option>O+ve</option>
  //              <option>AB+ve</option>
  //              <option>A-ve</option>
  //              <option>B-ve</option>
  //              <option>O-ve</option>
  //              <option>AB-ve</option>
  //            </Form.Control>
  //          </Form.Group>
  //          <Form.Group>
  //            <ReactPhone/>
  //          </Form.Group>
  //          <Button variant="primary" type="submit">
  //            Submit
  //          </Button>

  //        </Form>
  //     </div>

  //      </> 
  //   </>)*/)
  // }
}





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
        <StudentHome data = {this.state}/>
      )
    }
    if(this.state.status && this.state.role === "Proctor")
    {
      return (<ProcPage data={this.state}/>);
    
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


// class ProctorHome extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       authInstance:this.props.data.authInstance,
//       students: [1, 2, 3],
//       role: "Proctor",
//       data: {department: "CSE", batch:"2024"},
//       profile:{
//         department:"",
//         batch: ""
//       },
//       selected : [],
//       semesters: [1, 2, 3],
//       studentsSorted: {1: [], 2:[], 3:[]}
//     }
//   }

//   componentDidMount(){
//     fetch(`http://localhost:8000/proctor/${this.props.data.gId}`).then(res => res.json().then(value => {
//       console.log(value)
//       this.setState(value)
//       this.cleanStudents()
//     }))
//   }


//   cleanStudents(){
//     var students = this.state.students
//     var semesters = []
//     var studentsSorted = {}
//     for(let i = 0; i<students.length; i++)
//     {
//       semesters.push(students[i].semester)
//       studentsSorted[students[i].semester] = [] 
//     }
//     semesters = [...new Set(semesters)]
//     for(let x = 0; x < semesters.length; x++)
//     {
//       for(let y = 0; y<students.length; y++)
//       {
//         if(students[y].semester === semesters[x])
//         {
//           studentsSorted[semesters[x]].push(students[y])
//         }
//       }
//     }
//     this.setState({studentsSorted, semesters})
//   }


//   getStudent(gid){
//     fetch(`http://localhost:8000/student/${gid}`).then(res => res.json().then(value=> {
//       console.log(value)
//       var arr = this.state.selected
//       arr.push(value)
//       this.setState({selected: arr})
//     }))
//   }


//   render(){
//     return(<>
//       <div className="container emp-profile">
//           <div className="row">
//             <div className="col-md-4">
//               <div className="profile-img">
//                   <Image src={this.props.data.img} alt="" width = "2" rounded/>
//               </div>
//             </div>
//             <div className="col-md-6">
//               <div className="profile-head">
//                 <h5>Name: {this.state.profile.p_name}</h5>
//                 <h5>Email: {this.state.profile.p_email}</h5>
//                 <h5>Phone Number: {this.state.profile.p_mobile_no}</h5>
//               </div>
//             </div>
//           <div className="col-md-2">
//             <input type="submit"  onClick = {this.state.authInstance.signOut} className="profile-edit-btn" name="btnAddMore" value="Sign Out"/>
//           </div>
//       </div>
//         <div className="profile-tab" >
//           <div>

//           </div>
//           <br/><br/>
//             <div id="home" aria-labelledby="home-tab">
//             <Tabs defaultActiveKey={`Semester ${this.state.semesters[0]}`} id="noanim-tab-example">
//               {
//                 this.state.semesters.map((sem, id) => {
//                   return(
//                   <Tab key={id} title={`Semester ${sem}`} eventKey={sem}>
//                     {
//                       this.state.studentsSorted[sem].map((student, idx) => {
//                         return(
//                         <div key={idx} className="Students">
//                           <p>Student Name : {student.name}</p>
//                           <p>Student USN: {student.usn}</p>
//                           <p>Student Semester: {student.semester}</p>
//                           <p>Student Phone Number: {student.mobile_no}</p>
//                           <p>Student DOB: {student.dob}</p>
//                           <Button variant="outline-secondary" onClick={() => this.getStudent(student.g_id)}>Get Student</Button>
//                         </div>
//                         )
//                       })
//                     }
                    
//                   </Tab>)
//                 })
//               }
              
//               {/* <Tab eventKey="home" title="Home">
//                 <p>Home tab</p>
//               </Tab>
//               <Tab eventKey="profile" title="Profile">
//                 <p>Profile tab</p>
//               </Tab> */}
//             </Tabs>
//             </div>
//           </div>           
//         </div>
//       </>)
//   }
// }



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
            <Image src = {this.props.img} alt = "" width = "40" rounded></Image>
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
