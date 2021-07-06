import React, { useState,useEffect } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
// import '../app.css';
import { IconContext } from 'react-icons';
import TopNavbar from './Topnavbar';
import MaterialTable from 'material-table';

let sem;

function getData(id){
    sem = id
    console.log(sem);
}

let properties;

function Navbar(props) {
  const [sidebar, setSidebar] = useState(false);
  properties = props
  const showSidebar = () => setSidebar(!sidebar);
 

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
        
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <TopNavbar props={props}/>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName} >
                  <Link to={item.path} onClick={() => getData(item.id)} data={props}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );

  
}

function Table()
{
  //  console.log(properties.data.data)

   const columns=[
     {
      title: 'Name',field: 'name'
     },
     {
      title: 'USN',field: 'usn'
     },
     {
      title: 'Department',field: 'department'
     },
     {
      title: 'Email',field: 'email'
     },
     
     {
      title: 'Section',field: 'section'
     },
     {
      title: 'PhoneNumber',field: 'mobile_no'
     }
   ]
   const [data, setData] = useState([])
   console.log(data)
   useEffect(()=>{
       fetch(`http://localhost:8000/proctor/${properties.data.data.gId}`)
       .then(resp=>resp.json())
       .then(resp=>{
        //  console.log(resp)
        setData(resp.students)})
   },[])
  return(
     <div className="table-proc">
       <MaterialTable 
        title="" 
        data={data}
        columns={columns}
        options={{
          search:true,
          paging:false,
          exportButton:true
        }}
       />
    
     </div>
  )
}

export {Navbar, Table};