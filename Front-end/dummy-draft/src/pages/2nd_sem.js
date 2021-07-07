import React from "react";
import {Table, Navbar} from '../components/Navbar';
const sec_sem = (props) => {
  return (<>
    <Navbar data={props}/>
    <div className="home">
      <h1 className="heading" >Computer Science & Engineering</h1>
        <h2 className="heading">II Semester</h2>
        <Table/>
    </div>
    </>
  );
};
  
export default sec_sem;