import React from 'react'
import headervid from '../../assets/vid/headervid.mp4';
import './header.css';

const Header = () => {
  return (
    <section className="site-header center-content mb-4 ">
      <div className="container-sm">
        <div className="hero-inner section-inner">
          <div className="hero-content">
            <h1 className="mt-0 mb-5 display-4">We serve our <span className="text-primary">generation</span>
            </h1>
            <div className="container-xs">
              <h3 className="m-0 mb-5 text-muted">
                Meaningful youth’s engagement, non-discrimination, accountability and integrity.
              </h3>
            </div>
          </div>
          <div className="video-wrapper">
            <video width="896" height="504" playsInline autoPlay muted loop>
              <source src={headervid} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header