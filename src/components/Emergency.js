import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'reactstrap'

function Emergency() {
    return (
        <div className="container">
            <div className="homepage">
                <h1 className="greeting">Would you like to ... assistance?</h1>
                <Link to='/emergency/receive'><Button style={{ color: "bisque", backgroundColor: "teal", width: "150px"}} size="lg" className="bt1">Receive</Button></Link>
                <Link to='/emergency/give'><Button style={{ color: "bisque", backgroundColor: "teal", width: "150px" }} size="lg" className="bt2">Give</Button></Link>
            </div>
        </div>
    )
}

export default Emergency
