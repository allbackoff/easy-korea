import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function EmergencyReceiveConfirmation() {
    const imgStyle = {
        maxHeight: 128,
        maxWidth: 128
    }
    return (
        <div className="container">
            <div className="main">
            <h1>Here are some people that can help you right now!</h1>
                <Media tag="li">
                    <Media left middle>
                        <Media object src={'/images/photo.jpg'} alt={'name'} style={imgStyle} />
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>Leonel Mesi</Media>
                        <h6>3 years in Korea, professional footballer</h6>
                        <p>Phone Number: +7 777 777 77</p>
                    </Media>
                </Media>
            </div>
        </div>
    )
}

export default EmergencyReceiveConfirmation
