import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../../components/navbar';
import Footer from '../../components/footer';
import React, {useEffect } from "react";
import { run as runHolder } from 'holderjs/holder';



function Home() {

        useEffect(() => {        
            runHolder();
        });

    return (

     <div className='home_container'>
        <NavBar />
      	
        <Container className='py-5'>
        <h1 className='mb-5'>Home</h1>
        <Row>
            <Col>
            <Card>
            <Card.Img variant="top" src="holder.js/100px180"  />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>

        <Footer />
   
     
      </div>
    )
}
export default Home;