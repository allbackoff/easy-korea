import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap'

function Guide({title}) {
    return (
        <div className ="row allign-items-start">
        <div className="col-12 col-md m-1">
            <Card>
                <CardBody>
                    <CardTitle tag="h5">{title}</CardTitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                </CardBody>
                    <img src="C:\Users\Алишер\Desktop\easy-korea\src\components\hospital.png" alt="hospital"/>
            </Card>
        </div>
        </div>
    )
}


function Guides() {
    return (
        <div>
            <Guide title = {'Hospital'}/>
        </div>
    )
}

export default Guides
