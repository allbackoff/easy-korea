import React from 'react'
import { Link } from 'react-router-dom'

function Emergency() {
    return (
        <div>
            <h1>Would you like to ... assistance?</h1>
            <Link to='/emergency/receive'><button>Receive</button></Link>
            <Link to='/emergency/give'><button>Give</button></Link>
        </div>
    )
}

export default Emergency
