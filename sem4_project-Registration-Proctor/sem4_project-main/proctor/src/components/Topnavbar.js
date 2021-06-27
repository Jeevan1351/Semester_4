import React,{useState, useRef} from 'react';
import '../app.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import logo from '../Images/bmscelogo.png';
import { useDetectOutsideClick } from "./useDetectOutsideClick";

function TopNavbar(){

  const [showlinks, setshowlinks]  = useState(false);

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  
  return (
  <div className="Navbar">
    <div className="leftSide">
     <div className="links" id={showlinks ? "hidden" : ""}>
      <img src={logo} alt="logo" width="40px" height="40px" /> 
       <a href="/https://bmsce.ac.in/home/Sitemap">
        BMSCE
       </a>
       <a href="/https://bmsce.ac.in/home/Computer-Science-and-Engineering-About">BMSCE CSE DEPARTMENT</a>
       <a href="/https://webcampus.bmsce.in/student">BMSCE CAMPUS PORTEL</a>
       <a href="/https://bmsce.ac.in/home/About-Placements">BMSCE PLACEMENTS</a>
     
     </div>
     <button onClick={() => setshowlinks(!showlinks)}>
      <ReorderIcon/>
     </button>
    </div>
     <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <i class="far fa-user fa-2x"></i>
          <span className="user">Prof. Selva Kumar S.</span>  
          {/* <img
            src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg"
            alt="User avatar"
          /> */}
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul>
            <li>
              <a href="#">Messages</a>
            </li>
            <li>
              <a href="#">Trips</a>
            </li>
            <li>
              <a href="#">Saved</a>
            </li>
          </ul>
        </nav>
      </div>
     
  </div>
  ); 

}

export default TopNavbar; 