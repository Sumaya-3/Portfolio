import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container,Col,Row } from "react-bootstrap";
import rate1 from "../assets/img/85.jpg"
import rate2 from "../assets/img/80.jpg"
import rate3 from "../assets/img/90.jpg"

import TrackVisibility from "react-on-screen";
import "animate.css"

export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return(
        <section className="skill" id="skills">
            <Container>
            <Row>
                <Col>
                <div className="skill-bx">
                <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible? "":""}>
                    <h2>Skills</h2>
                    <p>You Can see My Skills Here</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div className="item">
                            <img src={rate3} alt="image"/>
                            <h5>Web Development</h5>
                        </div>
                        <div className="item">
                            <img src={rate1} alt="image"/>
                            <h5>FrontEnd Development</h5>
                        </div>
                        <div className="item">
                            <img src={rate3} alt="image"/>
                            <h5>BackEnd Development</h5>
                        </div>
                        <div className="item">
                            <img src={rate2} alt="image"/>
                            <h5>Machine Learning</h5>
                        </div>
                    </Carousel>
                    </div>}
                    </TrackVisibility>
                </div>
                </Col>
            </Row>
            </Container>
            
        </section>
    )
}