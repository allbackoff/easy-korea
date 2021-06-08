import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import {db} from "../fire";

function EmergencyReceiveConfirmation() {
    const imgStyle = {
        maxHeight: 128,
        maxWidth: 128
    }
    db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    });
    console.log('test');
    return (
        <div className="container">
            <Breadcrumb className="top">
                <BreadcrumbItem>
                    <Link to="/emergency" className="link">Emergency</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Receive Help
                </BreadcrumbItem>
            </Breadcrumb>
            <div className="main">
            <h1>Here are some people that can help you right now!</h1>
                <Media >
                    <Media left middle>
                        <Media object src={'/images/photo.png'} alt={'name'} style={imgStyle} />
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>Leonel Mesi</Media>
                        <h6>3 years in Korea, professional footballer</h6>
                        <p>Phone Number: +7 777 777 77</p>
                    </Media>
                </Media>
                <Media >
                    <Media left middle>
                        <Media object src={'/images/photo.png'} alt={'name'} style={imgStyle} />
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>Jasan Steitem</Media>
                        <h6>2 years in Korea, actor</h6>
                        <p>Phone Number: +7 454 233 34</p>
                    </Media>
                </Media>
                <Media >
                    <Media left middle>
                        <Media object src={'/images/photo.png'} alt={'name'} style={imgStyle} />
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>Ilon Mask</Media>
                        <h6>6 years in Korea, entrepreneur</h6>
                        <p>Phone Number: +7 876 543 23</p>
                    </Media>
                </Media>
            </div>
        </div>
    )
}

export default EmergencyReceiveConfirmation
