import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div className='footer py-5'>
      <Container>
        <Row>
          <Col xs={6} sm={6} md={6} lg={4}>
            <h4> About Hotel</h4>
            <p>Welcome to the best five-star deluxe hotel in New York. Hotel elementum sesue the aucan vestibulum aliquam justo in sapien rutrum volutpat.
            </p>
            <Button className=' bg-transparent border-0'>LEARN MORE</Button>
          </Col>
          <Col xs={6} sm={6} md={6} lg={4}>
            <ul>
              <h5><a href=''>Explore</a></h5>
              <li><a href=''>Home</a></li>
              <li><a href=''>Rooms & Suites</a></li>
              <li><a href=''>Restaurant</a></li>
              <li><a href=''>Spa & Wellness</a></li>
              <li><a href=''>About Hotel</a></li>
              <li><a href=''>Contact</a></li>
            </ul>
          
          </Col>
          <Col xs={12} sm={12} md={12} lg={4}>
          <h4>Contact</h4>
          <p>1616 Broadway NY, New York 10001<br/>
        United States of America</p>
        <h4> <i class="bi bi-telephone"></i> 855 100 4444</h4>
        <p className='email'>info@luxuryhotel.com</p>
        <p><i class="bi bi-facebook"></i> <i class="bi bi-github"></i> <i class="bi bi-instagram"></i> <i class="bi bi-google"></i> <i class="bi bi-discord"></i></p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer
