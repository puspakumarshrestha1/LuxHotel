import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Service() {
    return (
        <>
            <Container data-aos="fade-up" data-aos-duration="3000" className='my-5 py-5'>
                <Row className='restaurants'>
                    <Col lg="6">
                        <div className='overflow'>
                            <img className='w-100' src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/06/1-3.jpg' alt='' />
                        </div>
                    </Col>
                    <Col lg="6" className='py-5 restaurant-text'>
                        <h6>DISCOVER</h6>
                        <h3>The Restaurant</h3>
                        <p>Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                        <Button className='border-0 py-2 px-3'>Learn More</Button>
                    </Col>
                </Row>
                <Row className='restaurants'>
                    <Col lg="6" className='py-5 restaurant-text'>
                        <h6>EXPERIENCES</h6>
                        <h3>Spa Center</h3>
                        <p>Spa center inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.</p>
                        <Button className='border-0 py-2 px-3'>Learn More</Button>
                    </Col>
                    <Col lg="6">
                        <div className='overflow'>
                            
                            <img className='w-100' src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/06/3-2.jpg' alt='' />
                        </div>

                    </Col>
                </Row>
                <Row className='restaurants'>
                    <Col lg="6">
                        <div className='overflow'>
                        <img className='w-100 img-22' src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/06/2-4.jpg' alt='' />
                        </div>

                    </Col>
                    <Col lg="6" className='py-5 restaurant-text'>
                        <h6>MODERN</h6>
                        <h3>Fitness Center</h3>
                        <p>Restaurant inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.
                        </p>
                        <Button className='border-0 py-2 px-3'>Learn More</Button>
                    </Col>
                </Row>
                <Row className='restaurants'>
                    <Col lg="6" className='py-5 restaurant-text'>


                        <h6>EXPERIENCES</h6>
                        <h3>The Health Club & Pool</h3>
                        <p>The health club & pool at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie the fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.
                        </p>
                        <Button className='border-0 py-2 px-3'>Learn More</Button>
                    </Col>
                    <Col lg="6">
                        <div className='overflow'>
                            <img className='w-100' src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/06/1-2.jpg' alt='' />
                        </div>

                    </Col>
                </Row>

            </Container>
        </>
    )
}

export default Service
