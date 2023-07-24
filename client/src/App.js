import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Fragment } from 'react';
import ContactState from './context/contact/ContactState';

const App = ()=> {
  return (
    <ContactState>
      <Router>
        <Fragment>
            <Navbar/>
            <div className="container">
                <Routes>
                  <Route exact path='/' element ={<Home/>}/>
                  <Route exact path='/about' element ={<About/>}/>
                </Routes>
            </div>
        </Fragment>
      </Router>
    </ContactState>
  );
}

export default App;
