import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Review() {
    return (
        <div className='review py-5'>
            <Container>
                <Row>
                    <Col lg={8} className='py-5 text-light offset-md-2 review-text'>
                        <h6> TESTIMONIALS</h6>
                        <h3>What Client's Say?</h3>
                    </Col>
                </Row>
                <Row>
                    <Col lg={8} className='py-1 text-light offset-md-2 review-text'>
                        <OwlCarousel className='owl-theme' loop margin={10} items={1}>
                            <div>
                                <p>Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman
                                    at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.</p>
                                <div className='info'>
                                <Container>
                                        <Row>
                                            <Col lg={2}>
                                            <img className='' src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/06/1-1.jpg' alt='' />
                                            </Col>
                                            <Col lg={10} className='text-start guest-text'>
                                            <p>
                                                <i class="bi bi-star-fill text-warning"></i>
                                                <i class="bi bi-star-fill text-warning"></i>
                                                <i class="bi bi-star-fill text-warning"></i>
                                                <i class="bi bi-star-fill text-warning"></i>
                                                <i class="bi bi-star-fill text-warning"></i>
                                            </p>
                                            <p>NOLAN WHITE</p>
                                            <p>Guest Review</p>
                                        </Col>
                                        </Row>
                                    </Container>
                                   
                                </div>
                            </div>
                            <div>
                                <p>Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman
                                    at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.</p>
                                <div className='info'>
                                    <Container>
                                    <Row>
                                        <Col lg={2}>
                                            <img className='' src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/06/5.jpg' alt='' />
                                        </Col>
                                        <Col lg={10} className='text-start guest-text'>
                                            <p>
                                                <i class="bi bi-star-fill text-warning"></i>
                                                <i class="bi bi-star-fill text-warning"></i>
                                                <i class="bi bi-star-fill text-warning"></i>
                                                <i class="bi bi-star-fill text-warning"></i>
                                                <i class="bi bi-star-fill text-warning"></i>
                                            </p>
                                            <p>OLIVIA MARTIN</p>
                                            <p>Guest Review</p>
                                        </Col>
                                    </Row>
                                    </Container>

                                </div>
                            </div>
                            <div>
                                <p>Hotel dapibus asue metus the nec feusiate eraten miss hendreri net ve ante the lemon sanleo nectan feugiat erat hendrerit necuis ve ante otel inilla duiman
                                    at finibus viverra neca the sene on satien the miss drana inc fermen norttito sit space, mus nellentesque habitan.</p>
                                <div className='info'>
                                    <Container>
                                        <Row>
                                            <Col lg={2}>
                                            <img className='' src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/06/4-1.jpg' alt='' />
                                            </Col>
                                            <Col lg={10} className='text-start guest-text'>
                                            <p>
                                                <i class="bi bi-star-fill text-warning"></i>
                                                <i class="bi bi-star-fill text-warning"></i>
                                                <i class="bi bi-star-fill text-warning"></i>
                                                <i class="bi bi-star-fill text-warning"></i>
                                                <i class="bi bi-star-fill text-warning"></i>
                                            </p>
                                            <p>EMILY BROWN</p>
                                            <p>Guest Review</p>
                                        </Col>
                                        </Row>
                                    </Container>
                                    
                                </div>
                            </div>
                        </OwlCarousel>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Review
