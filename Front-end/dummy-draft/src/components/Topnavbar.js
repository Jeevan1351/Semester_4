import React,{useState, useRef, useEffect} from 'react';
// import './app.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import logo from '../Images/bmscelogo.png';
import { useDetectOutsideClick } from "./useDetectOutsideClick";


function TopNavbar(){

  const [showlinks, setshowlinks]  = useState(false);

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);
  
  // const SignOut= (props) =>{
  //   const [nameState , setNameState] = useState(props)
  //   useEffect(()=> {
  //     setNameState(props)
  //   }, [props])
  //   props.data.authInstance.signOut();
  // } 


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
    <button>Sign Out!!</button>
  </div>
  
  ); 

}

export default TopNavbar; 