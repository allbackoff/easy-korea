import React from 'react'
import {Link} from 'react-router-dom'


function Page({ handleLogout }) {
    return (
        <div>
            <nav>
                <h2>Welcome to Easy Korea</h2>
                <Link to='/login' ><button onClick={handleLogout}>Logout</button></Link>
            </nav>
        </div>
    )
}

export default Page