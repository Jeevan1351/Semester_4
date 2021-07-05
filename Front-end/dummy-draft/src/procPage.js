import React from 'react';
// import './app.css';
import {Navbar} from './components/Navbar';


function App(props) {
  return (
    <>
    <Navbar data={props}/>
    </>
  );
}

export default App;