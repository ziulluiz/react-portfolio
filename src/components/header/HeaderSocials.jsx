import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export const HeaderSocials = () => {
  return (
    <div className='header_socials'>
      <a href="https://github.com/ziulluiz" target="_blank"><BsGithub/></a>
      <a href="https://www.linkedin.com/in/luis-guzp/" target="_blank"><BsLinkedin/></a>
    </div>
  )
}
