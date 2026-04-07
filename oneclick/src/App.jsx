import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import ServicesSection from './Components/Services/Services'
import About from './Components/About/About'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <ServicesSection/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default App
