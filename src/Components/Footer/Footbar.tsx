import React from 'react';
import './foot.css';

const Footbar = () => {
  return (
    <footer id="footer" className="footer">
			<div className="container">
				<div className="row">
				
					<div className="col-md-3 col-sm-6 col-xs-12 ">
						<div className="footer-single">
							<img src="img/logo2.png" alt="" style={{width: "127px",padding: "0px 9px 11px 9px"}}/>
							<p><a href="services">info@humblegen.co.ke</a></p>
							<p><a href="services">+254 729 732 440</a></p>
						</div>
					</div>
				
					<div className="col-md-3 col-sm-6 col-xs-12 ">
						<div className="footer-single">
							<h6>Menu </h6>
							<ul>
		                        <li><a href="services">Services</a></li>
		                        <li><a href="clients">Home</a></li>
		                        <li><a href="services">About us</a></li>
		                        <li><a href="resources">Blog</a></li>
		                        <li><a href="contact">Contact</a></li>
		                    </ul>
						</div>
					</div>
				
					<div className="col-md-3 col-sm-6 col-xs-6">
						<div className="footer-single">
							<h6>Activities</h6>
							<ul>
								<li><a href="ecommerce">Training</a></li>
								<li><a href="webapp">Volunteer</a></li>
								<li><a href="seo">Donate</a></li>
								<li><a href="android">Blog</a></li>
								<li><a href="ios">Reach out</a></li>
							</ul>
						</div>
					</div>
				
					<div className="col-md-3 col-sm-6 col-xs-6 ">
						<div className="footer-single">
							<h6>Follow</h6>
							<ul>
								<li><a href="../sparkERP">Gallery</a></li>
								<li><a href="../loanman" target="_blank">Blog</a></li>
								<li><a href="services">Activities</a></li>
							</ul>
						</div>
					</div>
					
				</div>
				<div className="row">
					<div className="col-md-12">
						<p className="copyright text-center">
							Copyright © 2023 <a href="https://techmata.co.ke/">Humble Generation</a>.
						</p>
					</div>
				</div>
			</div>
		</footer>
  )
}

export default Footbar