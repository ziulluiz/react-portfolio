import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="Portfolio" />
          </div>
          <h3>Portfolio title</h3>
          <a href="#" className='btn'>Github</a>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt="Portfolio" />
          </div>
          <h3>Portfolio title</h3>
          <a href="#" className='btn'>Github</a>
          <a href="#" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
      </div>

    </section>
  )
}
