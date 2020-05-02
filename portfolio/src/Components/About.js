import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import TextLoop from "react-text-loop";

function About() {
    return(
       <Container fluid>
           <div className="square" id="diamond">
                <p className="about">Hi I'm Jordan and I'm a </p> 
                <p className="about">
                <TextLoop springConfig={{ stiffness: 180, damping: 8 }} children={["Frontend Developer", "Full-stack Developer", "Blogger", "Textile Artist", "Animal Enthusiast"]}>
                </TextLoop>
                .
                </p>
           </div>
       </Container> 
    )
}

export default About;