import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Facility() {
    return (
        <>
            <Container data-aos="fade-up" data-aos-duration="2000" className='py-5'>
                <Row>
                    <Col className='facility-head'>
                   <h6> OUR SERVICES</h6>
                   <h2>Hotel Facilities</h2>

                    </Col>
                </Row>
                <Row className='py-5'>
                    <Col lg={4} className='face1 py-4'>
                        <h2><i class="bi bi-globe-asia-australia text-warning"></i></h2>
                        <h4>Pick Up & Drop</h4>
                        <p>We’ll pick up from airport while you comfy on <br/>your ride, mus nellentesque habitant.</p>

                    </Col>
                    <Col lg={4} className='face1 py-4'>
                    <h2><i class="bi bi-car-front-fill text-warning"></i></h2>
                        <h4> Parking Space</h4>
                        <p>Fusce tincidunt nis ace park norttito sit amet space,<br/> mus nellentesque habitant.</p>
                    </Col>
                    <Col lg={4} className='face1 py-4'>
                    <h2><i class="bi bi-hospital text-warning"></i></h2>
                        <h4>Room Service</h4>
                        <p>Room tincidunt nis ace park norttito sit amet space,<br/> mus nellentesque habitant.</p>
                    </Col>
                    <Col lg={4} className='face1 py-4'>
                    <h2><i class="bi bi-water text-warning"></i></h2>
                        <h4>Swimming Pool</h4>
                        <p>Swimming pool tincidunt nise ace park norttito sit space,<br/> mus nellentesque habitant.</p>

                    </Col>
                    <Col lg={4} className='face1 py-4'>
                    <h2><i class="bi bi-wifi text-warning"></i></h2>
                        <h4>Fibre Internet</h4>
                        <p>Wifi tincidunt nis ace park norttito sit amet space,<br/> mus nellentesque habitant.</p>

                    </Col>
                    <Col lg={4} className='face1 py-4'>
                    <h2><i class="bi bi-egg-fried text-warning"></i></h2>
                        <h4>Breakfast</h4>
                        <p>Eat tincidunt nisa ace park norttito sit amet space,<br/> mus nellentesque habitant</p>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Facility
