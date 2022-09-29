import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";


export const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={ME} alt='about me' />
          </div>
        </div>

        <div className="about_content">
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>1 year</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Proyects</h5>
              <small>2 proyects</small>
            </article>

            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Proyects</h5>
              <small>2 proyects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,eius nobis id atque nostrum enim aliquam dolorem, veritatis rerum culpa quas aliquid vitae illum, obcaecati praesentium. Debitis, esse. Pariatur, magni!
          </p>
          <a href="#contact" className='btn btn-primary'> Let´s Talk</a>
        </div>
      </div>
    </section>
  )
}
