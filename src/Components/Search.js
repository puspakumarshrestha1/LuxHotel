import React from 'react'
import { Col, Container, Dropdown, Row } from 'react-bootstrap'

function Search() {
    return (
        <div className='search py-5'>
            <Container>
                <Row>
                    <Col className='py-5'>
                        <h6>CHECK NOW</h6>
                        <h1>Search Rooms</h1>
                    </Col>
                </Row>
                <Row className='check-in'>
                    <Col lg={2} className='border-end py-3 '>
                        <div>
                            <label htmlFor="start">Check in:</label>
                            <input type="date" id="start" />
                        </div>

                    </Col>
                    <Col lg={2} className='border-end py-3 '>
                        <div>
                            <label htmlFor="start">Check Out:</label>
                            <input type="date" id="start" />
                        </div>
                    </Col>
                    <Col lg={2} className='border-end py-4 '>
                        <Dropdown>
                            <Dropdown.Toggle className='bg-transparent border-0 text-dark adults' id="dropdown-basic">
                                Adults
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col lg={2} className='border-end py-4 '>
                    <Dropdown>
                            <Dropdown.Toggle className='bg-transparent border-0 text-dark adults' id="dropdown-basic">
                                Childerns
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col lg={2} className='border-end py-4 '>
                    <Dropdown>
                            <Dropdown.Toggle className='bg-transparent border-0 text-dark adults' id="dropdown-basic">
                                Rooms
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col lg={2} className='check-now py-4'>
                        <h5>Check Now</h5>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Search
