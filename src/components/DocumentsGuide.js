import React from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'
import { Link } from 'react-router-dom'
import { Breadcrumb, BreadcrumbItem } from "reactstrap"


function DocumentsGuide() {
    return (
        <div className='container'>
            <Breadcrumb className="top">
                <BreadcrumbItem>
                    <Link to="/guides" className="link">Guides</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Documents
                </BreadcrumbItem>
            </Breadcrumb>
            <div className = 'listOfDoc'>
                <h4>Which Document information you are looking for?</h4>
                <ListGroup className = "list">
                    <ListGroupItem className='link'><Link to={"/guides/documents/arc"} className="link">ARC</Link></ListGroupItem>
                    <ListGroupItem className='link'><Link to={"/guides/documents/visa"} className="link">Visa</Link></ListGroupItem>
                    <ListGroupItem className='link'><Link to={"/guides/documents/residency"} className="link">Residency</Link></ListGroupItem>
                    
                </ListGroup>
            </div>
        </div>
    )
}

export default DocumentsGuide
