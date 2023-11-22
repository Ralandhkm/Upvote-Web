import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Helmet } from 'react-helmet';
import Bar from '../component/Bar'
import Footer from '../component/Footer'
import Main from '../assets/main.png'
import lukakata from '../assets/lukakata.png'
import lukata from '../assets/g2.png'
import lutaka from '../assets/g3.png'
import j1 from '../assets/j1.png'
import j2 from '../assets/j2.png'
import j3 from '../assets/j3.png'
import accent from '../assets/accent.png'


const Home = () => {
  const cardStyle = {
    width: '20rem',
    backgroundColor: '#18163f', // Ganti warna latar belakang sesuai keinginan
    borderRadius: '20px',
    marginRight:'50px',
    marginTop: '35px',
  };

  return (
    <div>
      <Helmet>
      <meta charSet="utf-8" />
      <title>Home - Upvote</title>
    </Helmet>

      <div className='bg'>
        <Bar isUserPage={false}/>

        <section className='main mt-5 mb-5' id='main'>
          <Container>
            <Row>
              <Col className='main-content'>
                <h1 className='mt-4'>Request Book Here !</h1>
                <p className='mt-5'>You are welcome to request the books you want! Every request is a new opportunity to explore infinite literacy adventures together. Ask us what you want, and we'll try to make it happen for you.</p>
                <Button className='mt-5'> Create Now </Button>
              </Col>
              <Col className='main-img'>
                {/* <span className="blur border"></span>
                  <span className="blur border"></span> */}
                <img className='mx-auto' src={Main} alt='' />
              </Col>
            </Row>
          </Container>
        </section>

        <section className='rekom mt-5 mb-5' id='rekom'>
          <Container>
            <Row>
              <Col>
                <h1 className='mt-5 text-center'>Recomendation</h1>     

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

        <Footer/> 
      </div>
    </div>
    )
}

export default Home