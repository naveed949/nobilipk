import React from 'react'
import Cta from '../components/Cta'
import Hero from '../components/Hero'
import Intro from '../components/Intro'
import Contact from './Contact'
import Services from '../components/Services'

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      {/* <Portfolio /> */}
      <Contact />
      <Cta />
      {/* <Footer /> */}
    </>
  )
}

export default Home
