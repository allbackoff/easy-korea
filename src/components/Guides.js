import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Col, CardImgOverlay
} from 'reactstrap'
import { Link } from 'react-router-dom'


const imgStyle = {
    maxHeight: 350,

}

function Guide({title}) {
    return (
        <div>
            
            <Card style = {{border:"1px black solid", borderRadius:"20px"}}>
                <Link to ={`/guides/${title}`} className="link">
                <CardImg src={`/images/${title}.png`} alt="hospital" style={{  borderRadius: "20px 20px 0 0", maxHeight: "350px" }}/>
                <CardBody>
                    
                    <CardTitle tag="h5">{title}</CardTitle>
                        
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                </Link>
            </Card>
        </div>
        
    )
}


function Guides() {
    return (
        <div className="container">
            <div className="row allign-items-start">
                <div className="col-md-4" style={{ marginTop: "20px", marginBottom: "10px" }}    >
                    <Guide title={"Hospital"} />
                </div>
                <div className="col-md-4" style={{ marginTop: "20px", marginBottom: "10px"  }}    >
                    <Guide title={"Airport"} />
                </div>
                <div className="col-md-4" style={{ marginTop: "20px", marginBottom: "10px"  }}    >
                    <Guide title={"Documents"} />
                </div>
                <div className="col-md-4" style={{ marginTop: "10px" , marginBottom: "10px"   }}    >
                    <Guide title={"Food"} />
                </div>
                <div className="col-md-4" style={{ marginTop: "10px", marginBottom: "10px" }}    >
                    <Guide title={"Transport"} />
                </div>
                

                
            </div>
        </div>
        
    )
}

export default Guides
