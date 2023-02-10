import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Booking() {
    return (
        <>
            <div className='booking py-5'>
                <Container className='py-5 text-light book-text'>
                    <Row >
                        <Col lg={6}>
                            <p>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                                <i class="bi bi-star-fill text-warning"></i>
                            </p>
                            <h5>Each of our guest rooms feature a private bath, wi-fi, cable television and include full breakfast.</h5>

                            <h5><span>Reservation</span> <br />855 100 4444</h5>
                            <p><i class="bi bi-check-lg"></i> Call us, it's toll-free.</p>
                        </Col>
                        <Col lg={6}>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                                <Button className='bg-transparent border-0'>Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='bg-light'>
                <OwlCarousel className='owl-theme' loop margin={10} items={5} >
                    <div>
                        <img src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/06/3.png' alt='' />
                    </div>
                    <div>
                        <img src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/06/4.png' alt='' />
                    </div>
                    <div>
                        <img src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/06/5.png' alt='' />
                    </div>
                    <div>
                        <img src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/06/6.png' alt='' />
                    </div>
                    <div>
                        <img src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/06/1.png' alt='' />
                    </div>
                    <div>
                        <img src=' https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/06/2.png' alt='' />
                    </div>

                </OwlCarousel>
            </div>
        </>
    )
}

export default Booking
