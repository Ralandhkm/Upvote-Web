import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import { Helmet } from 'react-helmet';
import Bar from '../component/Bar'
import Footer from '../component/Footer'
import Kart from '../component/Kart';
import SearchBar from '../component/SearchBar';

const Browse = () => {
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
            <title>Browse - Upvote</title>
        </Helmet>

        <div className='bg'>
            <Bar isUserPage={false}/>

            <SearchBar/>

            <Col className='d-flex justify-content-center'>
                <Kart/>
                <Kart/>
                <Kart/>
            </Col>

            <Col className='d-flex justify-content-center'>
                <Kart/>
                
            </Col>
            <Footer/> 
        </div>


    </div>
  )
}

export default Browse