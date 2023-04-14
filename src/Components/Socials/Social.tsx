import React from 'react';
import './social.css';

const Social = () => {
  return (
    <section className="social-media">
        	<div className="container">
			<h1 className="social-title">Follow on Social Media</h1>
        		<div className="social-bar">
        			<div className="social-items">
					    <a href="https://twitter.com/techmata"  className="social-bar-link">
						  <i className="fab fa-twitter"></i>
					    </a>
					    <a href="https://facebook.com/techmata"  className="social-bar-link">
						  <i className="fab fa-facebook-f"></i>
					    </a>
					    <a href="https://www.linkedin.com/company/techmata"  className="social-bar-link">
						  <i className="fab fa-linkedin-in"></i>
					    </a>
					    <a href="services" className="social-bar-link">
						  <i className="fab fa-google"></i>
					    </a>
					    <a href="https://www.instagram.com/techmata_inc"  className="social-bar-link">
						  <i className="fab fa-instagram"></i>
					    </a>
					</div>
        		</div>
        	</div>
        </section>
  )
}

export default Social