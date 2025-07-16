import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import PlantsCard from './PlantsCard/PlantsCard'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <div className='overflow-hidden'>
        <Hero />
        <PlantsCard/>
        <About />
        <Footer />
    </div>
  )
}

export default Home
