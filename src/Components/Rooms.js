import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Rooms() {
    return (
        <div className='rooms py-5'>
            <Container>
                <Row>
                    <Col className='room-text pt-5'>
                        <h6>THE CAPPA LUXURY HOTEL</h6>
                        <h2>Rooms & Suites</h2>
                    </Col>
                </Row>
                <Row className='row1'>
                    <Col lg={4} className='py-2'>
                        <div className='position-relative room-text2 overflow'>
                            <img src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/04/1-2.jpg' alt='' />
                            <div className='position-absolute img-text'>
                                <h6>150$/Night</h6>
                                <h3>Junior Suite</h3>
                                <div>
                                    <Button className='bg-transparent px-3 py-2 d-none btn1 border-0'>Details</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className='py-2'>
                        <div className='position-relative room-text2 overflow'>
                            <img src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/04/2-3.jpg' alt='' />
                            <div className='position-absolute img-text'>
                                <h6>200$ / NIGHT</h6>
                                <h3>Family Room</h3>
                                <div>
                                    <Button className='bg-transparent px-3 py-2 d-none btn1 border-0'>Details</Button>
                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col lg={4} className='py-2'>
                        <div className='position-relative room-text2 overflow'>
                            <img src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/04/3-3.jpg' alt='' />
                            <div className='position-absolute img-text'>
                                <h6> 250$ / NIGHT </h6>
                                <h3>Double Room</h3>
                                <div>
                                    <Button className='bg-transparent  px-3 py-2 d-none btn1 border-0'>Details</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className='row2 py-3 mb-5'>
                    <Col lg={6}>
                        <div className='position-relative room-text2 overflow'>
                            <img src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/04/4.jpg' alt='' />
                            <div className='position-absolute img-text2'>
                                <h6>300$ / NIGHT</h6>
                                <h3>Deluxe Room</h3>
                                <div>
                                    <Button className='bg-transparent px-3 py-2 d-none btn2 border-0'>Details</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className='position-relative room-text2 overflow'>
                            <img className='img-21' src='https://shtheme.com/demosd/thecappa/wp-content/uploads/2022/04/7-1.jpg' alt='' />
                            <div className='position-absolute img-text2'>
                                <h6> 350$ / NIGHT</h6>
                                <h3>Superior Room</h3>
                                <div>
                                    <Button className='bg-transparent px-3 py-2 d-none btn2 border-0'>Details</Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Rooms
