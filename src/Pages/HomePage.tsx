import React from 'react'
import Header from '../Components/Header/Header'
import Contact from '../Components/Contact/Contact'
import Facts from '../Components/Facts/Facts'
import Services from '../Components/Services/Services'
import Social from '../Components/Socials/Social'
import Solutions from '../Components/Solutions/Solutions'

const HomePage = () => {
  return (
    <>
        <Header />
        <Services/>
        <Solutions/>
        <Facts/>
        <Contact/>
        <Social/>
        
    </>
  )
}

export default HomePage