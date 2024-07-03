import { Row, Col, Container,Nav,Tab} from "react-bootstrap";
import Img1 from "../assets/img/project1.PNG"
import Img2 from "../assets/img/project2.PNG"
import Img3 from "../assets/img/project3.PNG"
import Img4 from "../assets/img/project4.PNG"
import Img5 from "../assets/img/project5.PNG"
import Img6 from "../assets/img/project6.PNG"
import colorSharp2 from "../assets/img/color-sharp2.png"
import { ProjectCard } from "./ProjectCard";
import "animate.css"
import TrackVisibility from "react-on-screen";

export const Projects=()=>{
    const projects=[
        {
            title:"Business Startup",
            description:"Design & Development",
            imgUrl:Img1,
            url:"https://mahmoudgado1.github.io/EcommercePlatform/"
        },
        {
            title:"Business Startup",
            description:"Design & Development",
            imgUrl:Img2,
            url:"https://mahmoudgado1.github.io/Template-2/"
        },
        {
            title:"Business Startup",
            description:"Design & Development",
            imgUrl:Img3,
            url:"https://mahmoudgado1.github.io/Template-3/"
        },
        {
            title:"Business Startup",
            description:"Design & Development",
            imgUrl:Img4,
            url:"https://mahmoudgado1.github.io/Shopping-Cart/"
        },
        {
            title:"Business Startup",
            description:"Design & Development",
            imgUrl:Img5,
            url:"https://to-do-list-six-red.vercel.app/"
        },
        {
            title:"Business Startup",
            description:"Design & Development",
            imgUrl:Img6,
            url:"https://mahmoudgado1.github.io/Template-1/"
        },
    ]
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible? "animate__animated animate__bounce":""}>
                    <h2>Projects</h2>
                    <p>My Name Is Mahmoud , I Live In Egypt , This Is The 11th Proj In React Dev.</p>
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
                            <p>My Name Is Mahmoud , I Live In Egypt , This Is The 11th Proj In React Dev.</p>
                        </Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp2} alt="image" className="background-image-right"/>
        </section>
    )
}