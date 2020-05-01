import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';

function Header() {

    return (
        <>
        <Container fluid>
            <Row>
                <Col> </Col>
                <Col xs={10}>
                <img src={require('../Images/jordantaylorlogo.png')} style={{width:'100%'}}/>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row className="menubar">
                <Col><p className="menuitems">projects</p></Col>
                <Col><p className="menuitems">|</p></Col>
                <Col><p className="menuitems">resume</p></Col>
                <Col><p className="menuitems">|</p></Col>
                <Col><p className="menuitems">github</p></Col>
                <Col><p className="menuitems">|</p></Col>
                <Col><p className="menuitems">linkedin</p></Col>
                <Col><p className="menuitems">|</p></Col>
                <Col><p className="menuitems">blog</p></Col>
            </Row>
        </Container>
        {/* <div>slanted div text</div>
        <div>
          slanted div text<br/> on several lines<br/> an other line
        </div>
        <div>wider slanted div text with more text inside</div> */}
        </>
    )
}

export default Header;