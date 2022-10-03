import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Full House',
    github: 'https://github.com/franchex/full_house',
    demo: 'http://fullhouseapp.me/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Hagamos Composta',
    github: 'https://github.com/avelinamaier/hagamos_composta',
    demo: '#'
  }
]

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className='portfolio_item'>
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>

    </section>
  )
}
