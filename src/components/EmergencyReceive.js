import React, { useState } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Link } from 'react-router-dom';
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap"



function EmergencyReceive() {
    const [emergencyCategory, setEmergencyCategory] = useState(null)
    
    const handleChange = (event) => {
        setEmergencyCategory(event.target.value)
    }

    

    return (
        <div className="container">
            <Breadcrumb className="top">
                <BreadcrumbItem>
                    <Link to="/emergency" className="link">Emergency</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Receive Emergency
                </BreadcrumbItem>
            </Breadcrumb>
            <div className="homepage">
                <h3 className="greeting">What do you need help with?</h3>
                <FormControl component="fieldset" >
                    <div className="options">
                    <RadioGroup onChange={handleChange} value={emergencyCategory} row>
                        <div className="col-4 col-md-4">
                            <FormControlLabel value="hospital" control={<Radio />} label="Hospital" />
                        </div>
                        <div className="col-4 col-md-4">
                            <FormControlLabel value="airport" control={<Radio />} label="Airport" />
                        </div>
                        <div className="col-4 col-md-4">
                            <FormControlLabel value="documents" control={<Radio />} label="Documents" />
                        </div>
                    </RadioGroup>
                    </div>
                </FormControl>
            </div>
            <div className= "submitbut">
                <Link to={`/emergency/receive/${emergencyCategory}`}><Button style={{ color: "bisque", backgroundColor: "teal", width: "150px" }} size="lg" className="bt3">Submit</Button></Link>
            </div>
        </div>
    )
}

export default EmergencyReceive 
