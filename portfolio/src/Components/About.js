import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import TextLoop from "react-text-loop";

function About() {
    return(
       <Container fluid>
           <div className="square" id="diamond">
                <p className="about">Hi I'm Jordan and I'm a </p> 
                <p className="signed"><TextLoop springConfig={{ stiffness: 180, damping: 8 }} children={["Frontend Developer", "Full-stack Developer", "Blogger", "Published Author", "Textile Artist", "Animal Enthusiast"]}></TextLoop>.</p>
                <p className="details">Greetings from sunny Los Angeles! I'm so glad you found your way here! I'm currently open to job/freelancing opportunities, so feel free to click around or reach out! My professional contact info is listed in the footer.</p>
                <p className="signed"> - Jordan</p>
           </div>
       </Container> 
    )
}

export default About;