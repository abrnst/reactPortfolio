import React from 'react';
import { Jumbotron, Container, Row, Col } from 'reactstrap';

const Title = (props) => {
  return (
    <div className="title">
      <Jumbotron fluid  >
        <Container fluid id="header">
            <h1>Full-Stack Web Developer</h1>
            <p className="lead">Come in and take a look around.</p>        
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Title;