import { Col, Container, Row } from "react-bootstrap"
import { MailchimpForm } from "./MailchimpForm"
import logo from "../assets/img/logo.PNG"
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import TrackVisibility from "react-on-screen";
import "animate.css"

export const Footer=()=>{
    return(
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible? "animate__animated animate__bounce":""}>
                    <MailchimpForm/>
                    </div>}
                    </TrackVisibility>
                    <Col sm={6}>
                        <img src={logo} alt="Logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                    <div className="social-icon">
                    <a href="https://www.linkedin.com/in/mahmoud-gado-b53028244"><img src={navIcon1} alt="Icon" /></a>
                    <a href="https://www.facebook.com/mhaomod.gado?mibextid=ZbWKwL"><img src={navIcon2} alt="Icon" /></a>
                    <a href="https://www.instagram.com/ma7moudgado1?igsh=MTIyaHo3bWRobGtmcQ=="><img src={navIcon3} alt="Icon" /></a> 
                    </div>
                    <p>CopyRight. All Right Reserved Here By Mahmoud Gado</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}