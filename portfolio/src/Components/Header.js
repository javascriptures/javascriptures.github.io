import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'react-bootstrap';
import pdf from '../Images/JordanTaylorResume.PDF';

function Header() {

    return (
        <>
        <Container fluid>
            <Row>
                <Col> </Col>
                <Col xs={10}>
                <Link to={'/me'}>
                    <img src={require('../Images/jordantaylorlogo.png')} style={{width:'100%'}}/>
                </Link>
                </Col>
                <Col>
                </Col>
            </Row>
            <Row className="menubar">
                <Link to={'/me/projects'}><Col><p className="menuitems">projects</p></Col></Link>
                <Col><p className="menuitems">|</p></Col>
                <a href = {pdf} target = "_blank"><Col><p className="menuitems">résumé</p></Col></a>
                <Col><p className="menuitems">|</p></Col>
                <a href="https://github.com/javascriptures"><Col><p className="menuitems">github</p></Col></a>
                <Col><p className="menuitems">|</p></Col>
                <a a href="https://www.linkedin.com/in/jordan-tay/"><Col><p className="menuitems">linkedin</p></Col></a>
                <Col><p className="menuitems">|</p></Col>
                <a href="https://medium.com/@jordan_taylor"><Col><p className="menuitems">blog</p></Col></a>
            </Row>
        </Container>
        </>
    )
}

export default Header;