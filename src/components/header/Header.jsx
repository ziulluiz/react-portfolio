import React from 'react';
import './header.css';
import { CTA } from "./CTA";
import ME from "../../assets/me.png";
import { HeaderSocials } from "./HeaderSocials";

export const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello</h5>
        <h1>Luis Guzmán</h1>
        <h5>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src= {ME} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>Scroll down</a>
      </div>
    </header>
  )
}
