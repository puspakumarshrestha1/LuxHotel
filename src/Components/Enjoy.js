import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Enjoy() {
    return (
        <>
            <Container data-aos="fade-up" data-aos-duration="2000" className='my-5 py-5'>
                <Row>
                    <Col lg={6} className='enjoy-text'>
                        <h6>THE CAPPA LUXURY HOTEL</h6>
                        <h2>Enjoy a Luxury Experience</h2>
                        <p>Welcome to the best five-star deluxe hotel in New York.Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat. Donec in quis the pellentesque velit. Donec id velit acarcu posuere blane. </p>
                        <p> Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue the aucan ligula. Orci varius natoque penatibus et magnis dis parturient monte nascete ridiculus mus nellentesque habitant morbine.</p>
                    
                    </Col>
                    <Col lg={6} className=' position-relative'>
                        <Row className='ms-2'>
                            <Col lg={6} >
                                
                            <img className=' enjoy-img position-absolute' src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/06/8.jpg' alt=''/>
                      
                            </Col>
                            <Col lg={6}>
                            <img className=' enjoy-img2 position-absolute' src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/06/2-1.jpg' alt=''/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Enjoy
