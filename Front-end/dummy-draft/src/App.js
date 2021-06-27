import React from "react";

import BasicForm from "./home";

// import Bananna from "./SignUp";

import {BrowserRouter, Route, Switch} from "react-router-dom";

import "./App.css";

import { Navbar, Nav, NavDropdown, Image, Table
//   Form, Button
 } from 'react-bootstrap';

 //import ReactPhone  from './phone'

//  import fir_sem from './pages/1st_sem';
//  import sec_sem from './pages/2nd_sem';
//  import thir_sem from './pages/3rd_sem';
//  import fort_sem from './pages/4th_sem';
//  import fiv_sem from './pages/5th_sem';
//  import six_sem from './pages/6th_sem';
//  import Home from './pages/home';
//  import sev_sem from './pages/7th_sem';
//  import eig_sem from './pages/8th_sem';
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
        this.setState({isSignedIn})
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
                    <Route path='/signup' render={() => this.ifUserSignedIn(<>mango</>)}/>
                </Switch>
            </BrowserRouter>
      </div>
    );
  }
}



// class SignUp extends React.Component{
//   constructor(props){
//     super(props)
//     this.state = {
//       authInstance:0,
//       name:0,
//       email:0,
//       usn: 0,
//       department: null,
//       mobile_no: null,
//       proctor_id: null,
//       semester: 0,
//       section: 0,
//       batch: 0,
//       role:"Student",
//       img:0,
//       gId:0,
//       proctor:null,
//       dob:null,
//       respones:null,
//     }
//   this.post_it=this.post_it.bind(this)

//   }
//   componentDidMount(){
//     const authInstance = window.gapi.auth2.getAuthInstance()
//     const user = authInstance.currentUser.get()
//     const profile = user.getBasicProfile();
//     const email = profile.getEmail();
//     const name = profile.getName();
//     const img = profile.getImageUrl();
//     const googleId = profile.getId();
//     this.setState({
//       authInstance: authInstance,
//       name:name,
//       email:email,
//       img:img,
//       gId:googleId,
//     })
//   }


//   post_it(){
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ 
//         gid: this.state.gId,
//         role:this.state.role,
//         name:this.state.name,
//         dob:this.state.dob,
//         proctor:this.state.proctor,
//         email:this.state.email,
//         semester: this.state.semester,
//         mobile_no: this.state.mobile_no,
//         proctor_id: null,
//         department: this.state.department,
//         batch: this.state.batch,
//         usn: this.state.usn,
//         section:'B',

//       })
//   }

//   fetch('http://localhost:8000/user', requestOptions).then(window.location.replace('/home'))
//   }


//   render(){
//     return(<> 
//      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
//         <Navbar.Brand href="#home">Proctor Portal</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="mr-auto"></Nav>
//           <Nav>
//             <Image src = {this.state.img} alt = "" width = "40" rounded></Image>
//             <NavDropdown title={this.state.email} id="collasible-nav-dropdown">
//                 <NavDropdown.Item href="" onClick ={this.state.authInstance.signOut} >Sign Out</NavDropdown.Item>
//                 <NavDropdown.Divider />
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     <div className="container emp-profile">
//       <div>
//         <label >Google ID:</label>
//         <input type="text" id="gid" name="gid" value={this.state.gId}readOnly/><br/><br/>
//         <label >Role:</label>
//         <input type="text" id="role" name="role" value="Student" readOnly/><br/><br/>
//         <label >Name:</label>
//         <input type="text"  name="name" value={this.state.name} readOnly/><br/><br/>
//         <label >Email:</label>
//         <input type="text"  name="email" value= {this.state.email} readOnly/><br/><br/>
//         <label >DOB:</label>
//         <input type="text"  name="dob" onChange={(e) => {this.setState({dob:e.target.value})}}/><br/><br/>
//         <label >Proctor:</label>
//         <input type="text"  name="proctor" onChange={(e)=> {this.setState({proctor:e.target.value})}}/><br/><br/>
//         <label >USN:</label>
//         <input type="text"  name="usn" onChange={(e)=> {this.setState({usn:e.target.value})}}/><br/><br/>
//         <label >department:</label>
//         <input type="text"  name="department" onChange={(e)=> {this.setState({department:e.target.value})}}/><br/><br/>
//         <label >batch:</label>
//         <input type="text"  name="batch" onChange={(e)=> {this.setState({batch:e.target.value})}}/><br/><br/>
//         <label >Mobile Number:</label>
//         <input type="text"  name="mobile_no" onChange={(e)=> {this.setState({mobile_no:e.target.value})}}/><br/><br/>
//         <label >Semster:</label>
//         <input type="text"  name="semester" onChange={(e)=> {this.setState({semester:parseInt(e.target.value)})}}/><br/><br/>
//         <input type="submit" onClick= {this.post_it} value="Submit"/>
//       </div>
//     </div>
//     </>
//      /* <>
//        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
//          <Navbar.Brand href="#home">Proctor Portal</Navbar.Brand>
//          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//          <Navbar.Collapse id="responsive-navbar-nav">
//            <Nav className="mr-auto">
//            </Nav>
//            <Nav>
//             <Image src = {this.state.img} alt = "" width = "40" rounded></Image>
//            <NavDropdown title={this.state.email} id="collasible-nav-dropdown">
//                <NavDropdown.Item href="" onClick ={this.state.authInstance.signOut} >Sign Out</NavDropdown.Item>
//                <NavDropdown.Divider />
//              </NavDropdown>
//          </Nav>
//          </Navbar.Collapse>
//        </Navbar>
//        <div className="container emp-profile">
//          <Form>
//            <Form.Group  md="8">
//              <Form.Label>Email address</Form.Label>
//              <Form.Control type="email" value={this.state.email} readOnly />
//           </Form.Group>
//            <Form.Group>
//              <Form.Label>Name</Form.Label>
//              <Form.Control type="email" value={this.state.name} readOnly />
//            </Form.Group>
//            <Form.Group controlId="dob">
//              <Form.Label>Date of Birth</Form.Label>
//              <Form.Control type="date" name="dob" placeholder="Date of Birth" />
//            </Form.Group>
//            <Form.Group>
//              <Form.Label>Department</Form.Label>
//              <Form.Control as="select">
//               <option>CSE</option>
//                <option>ISE</option>
//                <option>MECH</option>
//                <option>EC</option>
//                <option>EEE</option>
//                <option>Civil</option>
//                <option>Aerospace</option>
//                <option>Chemical</option>
//              </Form.Control>
//            </Form.Group>
//            <Form.Group controlId="exampleForm.ControlSelect1">
//              <Form.Label>Blood Group</Form.Label>
//              <Form.Control as="select">
//                <option>A+ve</option>
//                <option>B+ve</option>
//                <option>O+ve</option>
//                <option>AB+ve</option>
//                <option>A-ve</option>
//                <option>B-ve</option>
//                <option>O-ve</option>
//                <option>AB-ve</option>
//              </Form.Control>
//            </Form.Group>
//            <Form.Group>
//              <ReactPhone/>
//            </Form.Group>
//            <Button variant="primary" type="submit">
//              Submit
//            </Button>

//          </Form>
//       </div>

//        </> 
//     </>)*/)
//   }
// }





class HomePage extends React.Component{
  constructor(props){
    super(props)
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
      console.log(this.state.status, this.state.gId)
      return (
        <StudentHome data = {this.state}/>
      )
    }
    if(this.state.status && this.state.role === "Proctor")
    {
      return ( <>
        
      </>
      );
    
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
      {this.what_to_do()}
    </>
    );
  }  
}


class StudentHome extends React.Component {
  constructor(props){
    super(props)
    this.changeEditable = this.changeEditable.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.state = this.props.data
  }
  async componentDidMount(){
    console.log("Working")
    console.log(this.props)
    await fetch(`/student/${this.props.data.gId}`).then(res => res.json().then( value=> {
      console.log(value)
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
    console.log(cgpa)
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
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                  <Image src={this.state.img} alt="" width = "2" rounded/>
              </div>
          </div>
          <div className="col-md-6">
              <div className="profile-head">
                          <h5>{this.state.name}</h5>
                          <h5>{this.state.profile.department} Deaprtment</h5>
                          <h5>Batch - {this.state.profile.batch}</h5>
                          <h5>Proctor - {this.state.proctor.p_name}</h5>
                          <h5>Proctor email - {this.state.proctor.p_email}</h5>
                          <h5>Proctor Mobile No: {this.state.proctor.p_mobile_no}</h5>
              </div>
          </div>
          <div className="col-md-2">
              <input type="submit"  onClick = {this.state.authInstance.signOut} className="profile-edit-btn" name="btnAddMore" value="Sign Out"/>
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
                      <p>{this.state.name}</p>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-2">
                      <label>Email :</label>
                  </div>
                  <div className="col-md-4">
                      <p>{this.state.email}</p>
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
