import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
          
          <Nav className="me-auto">
            
              <Link className="text-white" style={{margin: "20px"}} to="/">
                Home
              </Link>
            
              <Link className="text-white" style={{margin: "20px"}} to="/about">
                About
              </Link>
            
            
              <Link className="text-white" style={{margin: "20px"}} to="/contact">
                Contact Us
              </Link>
           
          </Nav>      
      
    </Navbar>
  );
}