import React from 'react'
import './contact.css'
import { FiMail } from 'react-icons/fi'
import { BsLinkedin } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'


export const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <FiMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>luis.guzp13@gmail.com</h5>
            <a href="mailto:luis.guzp13@gmail.com" targer='_blank'>Send a Mail</a>
          </article>
          <article className='contact_option'>
            <BsLinkedin className='contact_option-icon'/>
            <h4>linkedIn</h4>
            <h5>Luis Guzmán</h5>
            <a href="https://www.linkedin.com/in/luis-guzp/" targer='_blank'>Go To Profile</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+525538856480</h5>
            <a href="https://api.whatsapp.com/send?phone=+525538856480" targer='_blank'>Send a Message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}
