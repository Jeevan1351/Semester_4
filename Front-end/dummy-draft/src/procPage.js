import React from 'react';
// import {BrowserRouter, Route, Switch} from "react-router-dom";

// import './app.css';
import {Navbar} from './components/Navbar';
// import fir_sem from './pages/1st_sem';
// import sec_sem from './pages/2nd_sem';
// import thir_sem from './pages/3rd_sem';
// import fort_sem from './pages/4th_sem';
// import fiv_sem from './pages/5th_sem';
// import six_sem from './pages/6th_sem';
// import Home from './pages/home';
// import sev_sem from './pages/7th_sem';
// import eig_sem from './pages/8th_sem';


function App(props) {
  return (
    <>
    <Navbar data={props}/>
    {/* <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/1st_sem' exact component={fir_sem} />
                    <Route path='/2nd_sem' component={sec_sem} />
                    <Route path='/3rd_sem' component={thir_sem} />
                    <Route path='/4th_sem' component={fort_sem} />
                    <Route path='/5th_sem' component={fiv_sem} />
                    <Route path='/6th_sem' component={six_sem} />
                    <Route path='/7th_sem' component={sev_sem} />
                    <Route path='/8th_sem' component={eig_sem} />
                </Switch>
            </BrowserRouter> */}
    </>
  );
}

export default App;