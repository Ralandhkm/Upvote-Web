import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Helmet } from 'react-helmet';
import Bar from '../component/Bar'
import Footer from '../component/Footer'
import Kart from '../component/Kart';

const Purchased = () => {
  return (
    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Purchased - Upvote</title>
        </Helmet>

        <div className='bg'>
            <Bar isUserPage={false}/>

            
            <Col className='border d-flex justify-content-center'>
                <Kart/>
                <Kart/>
                <Kart/>
            </Col>

            <Col className='border d-flex justify-content-center'>
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