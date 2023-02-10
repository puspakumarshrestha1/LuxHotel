import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Promotional() {
    return (
        <div className='promo'>
            <Container className='text-center py-5'>
                <Row>
                    <Col className='py-5 text-light'>
                        <p className='py-3'>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                            <i class="bi bi-star-fill text-warning"></i>
                        </p>
                        <h6>THE CAPPA LUXURY HOTEL</h6>
                        <h2>Promotional Video</h2>
                        <div className='rounded-circle circle'>
                            <h1><a href='https://www.youtube.com/watch?v=B2aTVknKt7w' target={'_blank'}><i class="bi bi-play"></i></a></h1>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Promotional
