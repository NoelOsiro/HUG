import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './contact.css';

const Contact = () => {
	return (
		<section id="contact" className="contact">
			<div className="container">
				<div className="row ">
					<h1 className="text-center contact-title">Contact us!</h1>
					<div className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-10 col-md-offset-1 col-xs-12 wow fadeInDown animated animated"
						data-wow-duration="500ms" data-wow-delay="300ms">
						<div className="contact-form">
							<form action="#" id="contact-form" >
								<div className="input-group name-email">
									<div className="input-field">
										<input type="text" name="name" id="name" placeholder="Name" className="form-control" />
									</div>
									<div className="input-field">
										<input type="email" name="email" id="email" placeholder="Email" className="form-control" />
									</div>
								</div>
								<div className="input-group">
									<textarea name="message" id="message" placeholder="Message" className="form-control"></textarea>
								</div>
								<div className="input-group text-center">
									<input type="submit" id="form-submit" value="Send message" />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<MapContainer center={[-1.3124, 36.7811]} zoom={13} scrollWheelZoom={false} style={{ height: '400px' }}>
				<TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
				<Marker position={[-1.3174,  36.7908]}>
					<Popup>
						Humble <br /> Generation.
					</Popup>
				</Marker>
			</MapContainer>
		</section>
	)
}

export default Contact