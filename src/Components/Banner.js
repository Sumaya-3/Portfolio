import { Container, Row,Col ,Nav } from "react-bootstrap"
import { BsArrowRightCircle } from "react-icons/bs"
import banner from "../assets/img/OIG1-removebg-preview.png"
import { useState,useEffect } from "react"
import 'animate.css'
import TrackVisibility from "react-on-screen"

export const Banner = () => {
    const [loopNum,setLoopNum]=useState(0)
    const [isDeleting,setIsDeleting]=useState(false)
    const toRotate=["Senior Computer Science ","FrontEnd Dev"]
    const [text,setText]=useState('')
    const [delta,setdelta]=useState(300-Math.random()*100)
    const period=2000;

    useEffect(()=>{
        let ticker=setInterval(()=>{
            tick()
        },delta)
        return()=>{clearInterval(ticker)}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[text])
    const tick=()=>{
        let i =loopNum%toRotate.length
        let fullText=toRotate[i]
        let updatedText=isDeleting?fullText.substring(0,text.length-1):fullText.substring(0,text.length+1)

        setText(updatedText)

        if(isDeleting){
            setdelta(prevDelta=>prevDelta/2)
        }
        if(!isDeleting && updatedText===fullText){
            setIsDeleting(true)
            setdelta(period)
        }else if(isDeleting && updatedText===''){
            setIsDeleting(false)
            setLoopNum(loopNum+1)
            setdelta(500)
        }
    }
    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-item-center">
                    <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible? "animate__animated animate__fadeIn":""}>
                        <span className="tagline">Welcome In My Portfolio</span>
                        <h1>{`Hi I'm Sumaia Abdullah, `}<span className="wrap">{text}</span></h1>
                        <p>Greetings, I Have Experiance In Web Development</p>
                        <Nav.Link href="#connect"><button className="vvd" onClick={() => console.log('connect')}>Let's Connect <BsArrowRightCircle size={25}/></button></Nav.Link>
                    </div>}
                    </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={banner} alt="banner img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}