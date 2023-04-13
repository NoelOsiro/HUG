import React from 'react';
import './feat.css';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row, } from 'reactstrap'
import { features } from './fetaures';

const Feature = () => {
    return (
        <>
            <section className="features-tiles section mt-5">
                <Container>
                    <div className="features-tiles-inner section-inner pt-0">
                        <div className="section-header center-content">
                            <div className="container-xs">
                                <h2 className="mt-0 mb-4 display-4">Build up the whole picture</h2>
                                <h3 className="m-0 text-muted mb-5">
                                    Excepteur sint occaecat cupidatat non proident,
                                    sunt in culpa qui officia deserunt mollit anim id est laborum —
                                    semper quis lectus nulla at volutpat diam ut venenatis.
                                </h3>
                            </div>
                        </div>
                        <Row>
                            {features.map((item) => (
                                <Col xs={4} key={item.title}>
                                    <Card className='m-3'>
                                        <CardImg
                                            alt="Card image cap"
                                            src={item.image} top
                                            width="100%"
                                        />
                                        <CardBody>
                                            <CardTitle tag="h5">
                                                <u>{item.title}</u>
                                            </CardTitle>
                                            <CardSubtitle className="mb-2 text-muted" tag="h6">
                                                Sex Education
                                            </CardSubtitle>
                                            <CardText>
                                                {item.text}
                                            </CardText>
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Container>
            </section>
            <section id="services" className="services blue-bg">
                <div className="container text-center">
                    <h1 className="small-title" style={{ margin: '70px 0', color: '#fff !important' }}>What service are you interested in?</h1>
                    <div className="">
                        <div className="row visible-xs">
                            <div className="container">
                                <div className="col-xs-10 col-xs-offset-1">
                                    <a href="branding" className="service_item">
                                        <div className="whiteBtns">
                                            <p><span className="">Branding &amp; Logo design</span><span></span><span className="pull-right"><i className="fas fa-chevron-right"></i></span></p>
                                        </div>
                                    </a>
                                    <a href="webapp" className="service_item">
                                        <div className="whiteBtns">
                                            <span className="">Web Development</span><span></span><span className="pull-right"><i className="fas fa-chevron-right"></i></span>
                                        </div>
                                    </a>
                                    <a href="android" className="service_item"><div className="whiteBtns">
                                        <span className="">Mobile App Development</span><span></span><span className="pull-right"><i className="fas fa-chevron-right"></i></span>
                                    </div></a>
                                    <a href="seo" className="service_item"><div className="whiteBtns">
                                        <span className="">SEO</span><span></span><span className="pull-right"><i className="fas fa-chevron-right"></i></span>
                                    </div></a>
                                    <a href="socialMediaMarketing" className="service_item"><div className="whiteBtns">
                                        <span className="">Social Media Marketing</span><span></span><span className="pull-right"><i className="fas fa-chevron-right"></i></span>
                                    </div></a>
                                </div>
                            </div>
                        </div>
                        <div className="row hidden-xs">
                            <div className="col-sm-4 ">
                                <div className="service_link">
                                    <div className="services-image">
                                        <img alt="Web Development" src="img/web.svg" className="services-img" />
                                    </div>

                                    <div className="service-title">Web Development</div>
                                    <div className="service_links">
                                        <a href="static_site" className="service_item">Static Sites</a>
                                        <a href="ecommerce" className="service_item">Ecommerce</a>
                                        <a href="webapp" className="service_item">Web Applications</a>
                                        <a href="seo" className="service_item">SEO</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="service_link">
                                    <div className="services-image text-center">
                                        <img alt="Mobile Development" src="img/mobile.svg" className="services-img" />
                                    </div>
                                    <div className="service-title">Mobile Development</div>
                                    <div className="service_links">
                                        <a href="android" className="service_item">Android</a>
                                        <a href="ios" className="service_item">iOS</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="service_link">
                                    <div className="services-image">
                                        <img alt="Web Development" src="img/magic-wand.svg" className="services-img" />
                                    </div>
                                    <div className="service-title">Other Services</div>
                                    <div className="service_links">
                                        <a href="payment" className="service_item">Payment Integrations</a>
                                        <a href="consultancy" className="service_item">Software Consultancy</a>
                                        <a href="socialMediaMarketing" className="service_item">Social Media Marketing</a>
                                        <a href="branding" className="service_item">Branding &amp; Logo design</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Feature