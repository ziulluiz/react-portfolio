import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

export const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article ClassName='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-ligth'>Experienced</small>
              </div>
            </article>
            <article ClassName='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </article>
            <article ClassName='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </article>
            <article ClassName='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-ligth'>Experienced</small>
              </div>
            </article>
            <article ClassName='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Tailwind</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </article>
            <article ClassName='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>React</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </article>
            <article ClassName='experience_details'>
              <BsFillPatchCheckFill className='experience_details-icon'/>
              <div>
                <h4>Next JS</h4>
                <small className='text-ligth'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
{/* END OF FRONT END */}
        <div className="experience_backend">
          <h3>Backend Development</h3>
            <div className="experience_content">
              <article ClassName='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Ruby on Rails</h4>
                  <small className='text-ligth'>Intermediate</small>
                </div>
              </article>
              <article ClassName='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-ligth'>Intermediate</small>
                </div>
              </article>
              <article ClassName='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>PostgreSQL</h4>
                  <small className='text-ligth'>Intermediate</small>
                </div>
              </article>
              <article ClassName='experience_details'>
                <BsFillPatchCheckFill className='experience_details-icon'/>
                <div>
                  <h4>Phyton</h4>
                  <small className='text-ligth'>Beginner</small>
                </div>
              </article>
            </div>
        </div>
      </div>
    </section>
  )
}
