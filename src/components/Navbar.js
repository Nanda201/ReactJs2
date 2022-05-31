import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import Service from './Service';

function Navbar() {
  return (
    <div>
     <BrowserRouter>
     <ul>
         <li>
             <Link to="/" className="active">Home</Link>
         </li>
         <li>
             <Link to="/Contact" className='active'>Contact</Link>
         </li>
         <li>
             <Link to="/About" className='active'>About</Link>
         </li>
         <li>
             <Link to="/Service" className='active'>Service</Link>
         </li>
     </ul>  
       <Routes>
           <Route path='/' element={<Home/>}/>
           <Route path='/Contact' element={<Contact/>}/>
           <Route path='/About' element={<About/>}/>
           <Route path='/Service' element={<Service/>}/>
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default Navbar;
