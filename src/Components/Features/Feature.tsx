import React from 'react';
import { Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row, } from 'reactstrap'
import { features } from './fetaures';

const Feature = () => {
    return (
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
    )
}

export default Feature