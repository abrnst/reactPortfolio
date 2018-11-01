import React from 'react';
import {Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap';

const Cards = (props) => {
  return (
    <div id='portBackground'>
        <h2 id="portfolio">Portfolio</h2>
        <Container>
            <Row>
                <Col lg="4" md="6">
                    <Card className='card'>
                        <CardBody>
                        <img src={require('../../assets/hang.png')} target="_blank"  />
                        <CardTitle className='cardTitle'>Hang</CardTitle>
                        <Button href="https://aqueous-beach-17383.herokuapp.com/" target="_blank">Visit</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4" md="6">
                    <Card className='card'>
                        <CardBody>
                        <img src={require('../../assets/restaurant.jpg')} id='portPic' />
                        <CardTitle className='cardTitle'>Where2Eat</CardTitle>
                        <Button href="https://abrnst.github.io/Where2eat-1.1/" target="_blank">Visit</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col lg="4" md="6">
                    <Card className='card'>
                        <CardBody>
                        <img src={require('../../assets/train.jpeg')} id='portPic' />
                        <CardTitle className='cardTitle'>Train Times</CardTitle>
                        <Button href="https://abrnst.github.io/traintimes/" target="_blank">Visit</Button>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    </div>
  );
};

export default Cards;