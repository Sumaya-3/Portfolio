import { Col } from "react-bootstrap"
import { BsArrowRightCircle } from "react-icons/bs"

export const ProjectCard=({title,description,imgUrl,url})=>{
    return(
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="project"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <button onClick={()=>console.log('connect')}><a href={url}>See Project</a> <BsArrowRightCircle size={25}/></button>
                </div>
            </div>
        </Col>
    )
}