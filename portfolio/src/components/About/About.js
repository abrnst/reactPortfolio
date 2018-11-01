import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container, Row, Col } from 'reactstrap';

const About = (props) => {
    return (
        <div className='about2'>
            <h2 id="aboutme">About Me</h2>
            <Container>
                <Row  className="about">          
                    <Col lg="6" md="8" className='about3'>
                        {/* <h3 id='aboutTitle'>About Me</h3> */}
                        <p>Hello! I am a front-end and back-end web developer that is living in Austin, TX.  I am fluent in  HTML, CSS, JS, Node, SQL, bootstrap,
                            and ReactJs.</p>
                        <p>I take pride in my work. Nothing feels better than solving problems.  Take a look around and check out my work!</p>
                    </Col>
                    <Col lg="6" md="8">
                        <img src={require("../../assets/profilepic.jpg")} id='pic' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;