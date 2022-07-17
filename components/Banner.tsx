import React from 'react'
import './Banner.css';
// import noise from "../assets/noise.mp4"

const Banner = () => {

  const adjectives = [
    "Aggressive",
    "Arrogant",
    "Boastful",
    "Bossy",
    "Boring",
    "Careless",
    "Clingy",
    "Cruel",
    "Cowardly",
    "Deceitful",
    "Dishonest",
    "Fussy",
    "Greedy",
    "Grumpy",
    "Harsh",
    "Impatient",
    "Impulsive",
    "Jealous",
    "Moody",
    "Narrow-minded",
    "Overcritical",
    "Rude",
    "Selfish",
    "Untrustworthy",
    "Unhappy",
    "Grumpy",
    "Harsh",
    "Impatient",
    "Impulsive",
    "Jealous",
    "Moody",
    "Narrow-minded",
    "Overcritical",
    "Rude",
    "Selfish",
    "Untrustworthy",
    "Unhappy",
  ]

  const removeHilight = (element: Element) => {
    element.classList.remove("higlighted")
  }

  const randomHiglight = () => {
    const items = document.getElementsByClassName('adjective')
    const random  = items[Math.floor(Math.random()*items.length)];
    random.classList.add("higlighted")
    setTimeout(() => removeHilight(random), 3000)
  }

  setInterval(randomHiglight, 3000); 


  return (
    <div className='banner-container'>
      <video id="background-video" autoPlay loop muted >
      {/* <source src={noise} type="video/mp4" /> */}
      </video>
      <h1 className='banner-title'>We are</h1>
      {adjectives.map((adj, i) => <p key={i} className='banner-title adjective'>{adj.toLowerCase()}</p>)}
      </div>
  )
}

export default Banner