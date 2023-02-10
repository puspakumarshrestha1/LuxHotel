import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function OurNews() {
    return (
        <div  className='news py-5'>
            <Container  className='py-5'>
                <Row>
                    <Col className='text-light head-text'>
                        <h5> HOTEL BLOG</h5>
                        <h2>Our Gallary</h2>
                    </Col>
                </Row>
                <Row className='py-3  position-relative'>
                    <Col>
                        <OwlCarousel className='owl-theme' loop margin={10} items={3} >
                            <div >
                                <div className= 'overflow'>
                                <img src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/04/1-4.jpg' alt='' />
                                </div>
                            </div>
                            <div className='position-relative overflow'>
                                <img src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/04/2-5.jpg' alt='' />
                                <div>

                                </div>
                            </div>
                            <div className='position-relative overflow'>
                                <img src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/04/3-5.jpg' alt='' />
                                <div>

                                </div>
                            </div>
                            <div className='position-relative overflow'>
                                <img src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/04/4-2.jpg' alt='' />
                                <div>

                                </div>
                            </div>
                            <div className='position-relative overflow'>
                                <img src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/04/6-1.jpg' alt='' />
                                <div>

                                </div>
                            </div>
                            <div className='position-relative overflow'>
                                <img src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/04/5-2.jpg' alt='' />
                                <div>

                                </div>
                            </div>
                        </OwlCarousel>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default OurNews
