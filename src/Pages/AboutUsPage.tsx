import React from 'react'
import Services from '../Components/Services/Services'
import Contact from '../Components/Contact/Contact'
import Social from '../Components/Socials/Social'
import Activities from '../Components/Activities/Activities'
import Objectives from '../Components/Activities/Objectives'

const AboutUsPage: React.FC = () => {
  return (
    <>
      <Services bg={'about-bg'}/>
      <section id='mission' className='blue-bg'>
          <div className="container text-center mb-2">
            <h1 className="mission-title">Mission</h1>
            <p className='mission-text offset-6'>
              To promote the wellbeing of children, youths and women;
              spiritually, emotionally and physically<br/>
              through the promotion of their rights.  
            </p>
          </div>    
      </section>
      <Activities/>
      <Objectives/>
      <Social/>
      <Contact/>
      <Social/>
    </>
  )
}

export default AboutUsPage