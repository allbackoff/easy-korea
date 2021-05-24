import React, { useState } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { Link } from 'react-router-dom';

function EmergencyReceive() {
    const [emergencyCategory, setEmergencyCategory] = useState(null)
    
    const handleChange = (event) => {
        setEmergencyCategory(event.target.value)
    }

    return (
        <div>
            <div>
                <p>What do you need help with?</p>
                <FormControl component="fieldset">
                    <RadioGroup onChange={handleChange} value={emergencyCategory}>
                        <FormControlLabel value="hospital" control={<Radio />} label="Hospital" />
                        <FormControlLabel value="airport" control={<Radio />} label="Airport" />
                        <FormControlLabel value="documents" control={<Radio />} label="Documents" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div>
                <Link to={`/emergency/${emergencyCategory}`}><button>Submit</button></Link>
            </div>
        </div>
    )
}

export default EmergencyReceive 
