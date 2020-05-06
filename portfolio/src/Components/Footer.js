import React from 'react';
import { Navbar, Container, Row, Col} from 'react-bootstrap';

function Footer(){
    return (
    <>
        <div className="footer">
        <Navbar sticky="bottom" bg="dark" variant="dark" width="100%" expand='xxl'> 
            <Navbar.Brand>
                Jordan Taylor
                </Navbar.Brand>
                        <span className="footertext">
                            © Copyright 2020
                         </span>
                        <span className="footertext"> Los Angeles, CA</span>
                        <span className="footertext">
                        <a href="mailto:jtjavascripture@gmail.com">Contact me!</a>
                        </span>
        </Navbar>
        </div>
    </>
        )
}
export default Footer;