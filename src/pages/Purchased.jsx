import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Helmet } from 'react-helmet';
import Bar from '../component/Bar'
import Footer from '../component/Footer'
import Kart from '../component/Kart';
import SearchBar from '../component/SearchBar';


const Purchased = () => {
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
        <Helmet>
            <meta charSet="utf-8" />
            <title>Purchased - Upvote</title>
        </Helmet>

        <div className='bg'>
            <Bar isUserPage={false}/>

            <SearchBar/>

            <section className='rekom mt-5 mb-5' id='rekom'>
                <Container>
                    <Row>
                        <Col>


                            <Container className='kartu' >
                            <Card style={cardStyle} className='mx-auto'>
                                <Card.Img variant="top" src={j1} style={{ width: '100%' }} className='mb-2'/>
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
                        <Card style={cardStyle} className='mx-auto'>
                            <Card.Img variant="top" src={j2} style={{ width: '100%' }} />
                            <Card.Body>
                            <div className='vote d-flex pt-1 px-3 justify-content-between rounded-3'>
                                <p className='my-auto'>Not Purchased</p>
                                <p className='my-auto'>40 Vote</p>
                            </div>
                            <Card.Title className='mt-4'>Luka Kata</Card.Title>
                            <Card.Text>
                                Chandra Malik
                            </Card.Text>
                            <Button className='mt-2'>Load More</Button>
                            </Card.Body>
                        </Card>
                        <Card style={cardStyle} className='mx-auto'>
                            <Card.Img variant="top" src={j3} style={{ width: '100%' }} />
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
                </section>

            <Col className='d-flex justify-content-center'>
                <Kart/>
                <Kart/>
                <Kart/>
            </Col>
            <Footer/> 
        </div>
    </div>
  )
}

export default Purchased