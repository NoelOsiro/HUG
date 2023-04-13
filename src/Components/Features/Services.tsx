import React from 'react';
import './feat.css';
import empower from '../../assets/pics/4108.jpg';
import love from '../../assets/pics/love.png';
import sust from '../../assets/pics/sust.png';

interface Ivalues {
    image:string;
    title:string;
    text:string
}

const values: Ivalues[] = [
    {
        image:empower,
        title:"Empowerment",
        text:"Empowering through education, training, and resources to create positive change in lives and communities."
    },
    {
        image:love,
        title:"Inclusivity",
        text:"Promote inclusivity by valuing and respecting diversity and ensuring that all voices are heard and represented, regardless of gender, race, ethnicity, religion, or socio-economic status."
    },
    {
        image:sust,
        title:"Sustainability",
        text:"Prioritize sustainable practices & solutions.Promote eco-friendly practices, advocate for policies & empower individuals for a sustainable future"
    },
]

const Services = () => {
    return (
            <section id="services" className="services blue-bg">
                <div className="container text-center mb-2">
                    <h1 className="small-title">What we do?</h1>
                    <div className="">
                        <div className="row visible-xs">
                            <div className="container">
                                <div className="col-xs-10 col-xs-offset-1">
                                    <a href="empowerment" className="service_item">
                                        <div className="whiteBtns">
                                            <span className="">Empowerment</span><span></span><span className="pull-right"><i className="fas fa-chevron-right"></i></span>
                                        </div>
                                    </a>
                                    <a href="inclusivity" className="service_item"><div className="whiteBtns">
                                        <span className="">Inclusivity</span><span></span><span className="pull-right"><i className="fas fa-chevron-right"></i></span>
                                    </div></a>
                                    <a href="sustainability" className="service_item"><div className="whiteBtns">
                                        <span className="">Sustainability</span><span></span><span className="pull-right"><i className="fas fa-chevron-right"></i></span>
                                    </div></a>
                                </div>
                            </div>
                        </div>
                        <div className="row hidden-xs">
                            {values.map((value:Ivalues)=>(
                               <div className="col-sm-4 " key={value.title}>
                               <div className="service_link">
                                   <div className="services-image">
                                       <img alt="Web Development" src={value.image} className="services-img" />
                                   </div>
                                   <div className="service-title">{value.title}</div>
                                   <div className="service_links">
                                       <p className="service_item">{value.text}</p>
                                   </div>
                               </div>
                           </div> 
                            ))}

                        </div>
                    </div>
                </div>

            </section>
    )
}

export default Services;