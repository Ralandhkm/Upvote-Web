import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import j1 from '../assets/j1.png'
import j2 from '../assets/j2.png'
import j3 from '../assets/j3.png'

const Kart = () => {
    const cardStyle = {
        width: '20rem',
        backgroundColor: '#18163f', 
        borderRadius: '17px',
        marginRight:'50px',
        marginTop: '15px',
        marginBottom: '40px',
      };

  return (
    <div>
          <Container>
            <Row>
              <Col>   
                <Container className='kartu' >
                  <Card style={cardStyle} className='mx-auto'>
                    <Card.Img variant="top" src={j1} style={{ width: '100%' }} className='mb-2 rounded-4'/>
                    <Card.Body>
                      <div className='vote d-flex pt-1 px-3 justify-content-between rounded-3'>
                        <p className='my-auto'>Not Purchased</p>
                        <p className='my-auto'>40 Vote</p>
                      </div>
                      <Card.Title className='mt-4'>Luka Kata</Card.Title>
                      <Card.Text>
                        Chandra Malik
                      </Card.Text>
                      <Button className='mt-2' >Load More</Button>
                    </Card.Body>
                  </Card>
                </Container>  

              </Col>
            </Row>
          </Container>
    </div>
  )
}

export default Kart