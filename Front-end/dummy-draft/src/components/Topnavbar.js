import React,{useState,
  //  useRef
  } from 'react';

import {Image, Nav, NavDropdown} from 'react-bootstrap'
// import './app.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import logo from '../Images/bmscelogo.png';
// import { useDetectOutsideClick } from "./useDetectOutsideClick";


function TopNavbar(props){

  const [showlinks, setshowlinks]  = useState(false);

  // const dropdownRef = useRef(null);
  // const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  return (
  <div className="Navbar">
    <div className="leftSide">
     <div className="links" id={showlinks ? "hidden" : ""}>
      <img src={logo} alt="logo" width="40px" height="40px" /> 
       <a href="/https://bmsce.ac.in/home/Sitemap">
        Proctor Portal
       </a>
     </div>
     <button onClick={() => setshowlinks(!showlinks)}>
      <ReorderIcon/>
     </button>
     
    </div>
    <div className="rightSide">
    <Nav>
          <Image src = {props.props.data.data.img} alt = "" width = "40" rounded></Image>
          <NavDropdown title={props.props.data.data.email} id="collasible-nav-dropdown">
              <NavDropdown.Item href="" onClick ={props.props.data.data.authInstance.signOut} >Sign Out</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
    </Nav>
    </div>
    </div>
  
  ); 

}

export default TopNavbar; 