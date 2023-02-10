import React from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Extra() {
    return (
        <div  className='extra text-light'>
            <Container data-aos="fade-up" data-aos-duration="2000" className='py-5'>
                <Row>
                    <Col lg={4} className='py-5 extra1'>
                        <h6>BEST PRICES</h6>
                        <h2>Extra Services</h2>
                        <p> The best prices for your relaxing vacation. The utanislen quam nestibulum ac quame odion elementum sceisue the aucan.</p>
                        <p>Orci varius natoque penatibus et magnis disney parturient monte nascete ridiculus mus nellen etesque habitant morbine.</p>
                        <Container className='my-4'>
                            <Row >
                                <Col lg={2}>
                                    <h2><i class="bi bi-telephone"></i></h2>
                                </Col>
                                <Col lg={10}>
                                    <h6>For information</h6>

                                    <h3> 855 100 4444</h3>
                                </Col>
                            </Row>
                        </Container>

                    </Col>
                    <Col lg={8} className='py-5'>
                        <OwlCarousel className='owl-theme' loop margin={10} items={2} >
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src="https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/06/3.jpg" />
                                <Card.Body>
                                    <Card.Title className='py-4 ms-3' >Room Breakfast</Card.Title>
                                    <Card.Text className='ms-3'>
                                        <h1>$30/<span>daily</span></h1>
                                        <p><i class="bi bi-check-lg"></i> Hotel ut nisan the duru</p>
                                        <p><i class="bi bi-check-lg"></i> Orci miss natoque vasa ince</p>
                                        <p><i class="bi bi-x"></i> Clean sorem ipsum morbin</p>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src="https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/06/4.jpg" />
                                <Card.Body>
                                    <Card.Title className='py-4 ms-3'>Safe & Secure</Card.Title>
                                    <Card.Text className='ms-3'>
                                        <h1>$30/<span>daily</span></h1>
                                        <p><i class="bi bi-check-lg"></i> Hotel ut nisan the duru</p>
                                        <p><i class="bi bi-check-lg"></i> Orci miss natoque vasa ince</p>
                                        <p><i class="bi bi-x"></i> Clean sorem ipsum morbin</p>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src="https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/06/2-2.jpg" />
                                <Card.Body>
                                    <Card.Title className='py-4 ms-3'>Drinks Included</Card.Title>
                                    <Card.Text className=' ms-3'>
                                        <h1>$30/<span>daily</span></h1>
                                        <p><i class="bi bi-check-lg"></i> Hotel ut nisan the duru</p>
                                        <p><i class="bi bi-check-lg"></i> Orci miss natoque vasa ince</p>
                                        <p><i class="bi bi-x"></i> Clean sorem ipsum morbin</p>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                            <Card style={{ width: '20rem' }}>
                                <Card.Img variant="top" src="https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/06/1.jpg" />
                                <Card.Body>
                                    <Card.Title className='py-4 ms-3'>Room Cleaning</Card.Title>
                                    <Card.Text className='ms-3'>
                                        <h1>$30/<span>daily</span></h1>
                                        <p><i class="bi bi-check-lg"></i> Hotel ut nisan the duru</p>
                                        <p><i class="bi bi-check-lg"></i> Orci miss natoque vasa ince</p>
                                        <p><i class="bi bi-x"></i> Clean sorem ipsum morbin</p>
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </OwlCarousel>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Extra
