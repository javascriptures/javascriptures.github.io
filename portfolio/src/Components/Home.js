import React, { useState } from 'react';
import { Carousel, Container, Col, Row } from 'react-bootstrap';

function Home() {
    const [index, setIndex] = useState(0);
    const fontStyle = { color: 'white', opacity: '100%' };
    const containerStyle = { background: '#055864', opacity: '85%', 'border-radius': '20px'};

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);  };
    return (
        <>
        <Container fluid="sm">
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <a href={'https://javascriptures.github.io/Simon-Memory/'}>
                    <img
                    className="d-block w-100"
                    src={require('../Images/SimonGame.png')}
                    alt="First slide"
                    />
                </a>
                <Carousel.Caption>
                    <Container style={containerStyle}>
                <h3 style={fontStyle}>Simon Memory Game</h3>
                <p style={fontStyle}>An online game based on the handheld classic. Built with vanilla JS DOM.</p>
                </Container>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href={'https://jobble-frontend.herokuapp.com/'}>
                    <img
                    className="d-block w-100"
                    src={require('../Images/Jobble.png')}
                    alt="Second slide"
                    />
                </a>
                <Carousel.Caption>
                <Container style={containerStyle}>
                <h3 style={fontStyle}>Jobble</h3>
                <p style={fontStyle}>A job-hunting site for developers. Built using a MERN stack.</p>
                </Container>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <a href={'https://catspotting-frontend.herokuapp.com/'}>
                    <img
                    className="d-block w-100"
                    src={require('../Images/Catspotting.png')}
                    alt="Third slide"
                    />
                </a>
                <Carousel.Caption>
                <Container style={containerStyle}>
                <h3 style={fontStyle}>Catspotting</h3>
                <p style={fontStyle}>
                    A social media platform for cat lovers. Built using a ReactJS/Django stack.
                </p>
                </Container>
                </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
    </Container>
</>
    )
}

export default Home;