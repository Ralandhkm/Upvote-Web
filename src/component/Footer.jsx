import React from "react"
import { Container } from "react-bootstrap";
import { FaYoutube, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return(
    <footer id="footer" className="footer"> 
      <Container className="text-center">
        <h2>Follow Our Socials</h2>
        <div className="ikon">
          <a href="/" > <FaYoutube size={33} /> </a>
          <a href="/"> <FaTwitter size={33} /> </a>
          <a href="/"> <FaFacebook size={33} /> </a>
          <a href="/"> <FaInstagram size={33} /> </a>
        </div>
      </Container>
      <hr className="custom"/>

      <Container>
        <div className='d-flex justify-content-center pb-3'>
          <p>© 2023 Library Service  Inc. All rights reserved.</p>       
        </div>
      </Container>
    </footer>    
  ) 
}

export default Footer