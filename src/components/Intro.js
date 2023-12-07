import { Col, Container, Row, Button } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro'> 
          <Container className='text-white d-flex'>
            <Row>
              <Col>
                <div className='title'>EXPLORE</div>
                <div className='title'>INDONESIA</div>
                <div className='introButton mt-5'>
                    <Button href='#popular' variant='light'>See All Destination</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro