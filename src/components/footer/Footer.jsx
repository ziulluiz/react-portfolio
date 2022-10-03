import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from "react-icons/bs"
import { BsTwitter } from "react-icons/bs"

export const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>LUIS GP</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.linkedin.com/in/luis-guzp/"><BsLinkedin/></a>
        <a href="https://github.com/ziulluiz"><BsGithub/></a>
        <a href="https://twitter.com/_Haku13"><BsTwitter/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Luis Enrique Guzmán Pineda. All rigths reserved.</small>
      </div>
    </footer>
  )
}
