

import { Card, CardBody, CardText, CardTitle, Col, Container, Row } from 'reactstrap';
import './act.css';

function Activities() {
  

  return (
    <section id='activities'>
        <h1 className="social-title mb-5">Our Activities</h1>
    <Container>
      <Row>
        <Col md="6" className='mb-2'>
          <Card data-aos="fade-right">
            <CardTitle><h1>a)</h1></CardTitle>
            <CardBody>
            <CardText>Awareness on Sexual and Reproductive Health issues</CardText>
            </CardBody>

          </Card>
        </Col>
        <Col md="6" className='mb-2' style={{marginTop:'4rem'}} >
        <Card data-aos="fade-uCardText">
            <CardTitle><h1>b)</h1></CardTitle>
            <CardBody>
            <CardText>Child Protection  and Suport program</CardText>
            </CardBody>
            
          </Card>
        </Col>
        <Col md="6" className='mb-2' >
        <Card data-aos="fade-left">
            <CardTitle><h1>c)</h1></CardTitle>
            <CardBody>
            <CardText>Food Security and Livelihoods Support</CardText>
            </CardBody>
            
        </Card>
        </Col>
        <Col md="6" className='mb-2 mt-4' style={{marginTop:'4rem'}}>
        <Card data-aos="fade-down" >
            <CardTitle><h1>d)</h1></CardTitle>
            <CardBody>
            <CardText>Education</CardText>
            </CardBody>
            
          </Card>
        </Col>
        <Col md="6" className='mb-2' >
        <Card data-aos="fliCardText-right">
            <CardTitle><h1>e)</h1></CardTitle>
            <CardBody>
            <CardText>Advocacy peace Building and Reconciliation.</CardText>
            </CardBody>
            
          </Card>
        </Col>
        <Col md="6" className='mb-5'  style={{marginTop:'4rem'}}>
        <Card data-aos="zoom-in">
            <CardTitle><h1>f)</h1></CardTitle>
            <CardBody>
            <CardText>Environmental Protection and conservation</CardText>
            </CardBody>
            
          </Card>
        </Col>
      </Row>
    </Container>
    </section>
  );
}

export default Activities;
