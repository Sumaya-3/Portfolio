import { Row, Col, Container,Nav,Tab} from "react-bootstrap";
import Img1 from "../assets/img//pro1.jpg"
import Img2 from "../assets/img/pro2.jpg"
import Img3 from "../assets/img/pro3.jpg"
import Img4 from "../assets/img/pro1.jpg"
import Img5 from "../assets/img/pro2.jpg"
import Img6 from "../assets/img/pro3.jpg"
import { ProjectCard } from "./ProjectCard";
import "animate.css"
import TrackVisibility from "react-on-screen";

export const Projects=()=>{
    const projects=[
        {
            title:"Business Startup",
            description:"Design & Development",
            imgUrl:Img1
        },
        {
            title:"Business Startup",
            description:"Design & Development",
            imgUrl:Img2  
        },
        {
            title:"Business Startup",
            description:"Design & Development",
            imgUrl:Img3
        },
        {
            title:"Business Startup",
            description:"Design & Development",
            imgUrl:Img4
        },
        {
            title:"Business Startup",
            description:"Design & Development",
            imgUrl:Img5
        },
        {
            title:"Business Startup",
            description:"Design & Development",
            imgUrl:Img6
        },
    ]
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible? "":""}>
                    <h2>Projects</h2>
                    <p>My Name Is SUMAIA, This Is My Project In React Development.</p>
                    </div>}
                    </TrackVisibility>
                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                        <Nav.Item>
                            <Nav.Link eventKey="first">Tab One</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Tab Two</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey='third'>Tab Three</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project,index)=>{
                                        return(
                                            <ProjectCard key={index} {...project}/>
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            <p>My Name Is SUMAIA, This Is My Project In React Development.</p>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}