import React, { useState } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import { Link } from 'react-router-dom';
import { FormGroup } from '@material-ui/core';

function EmergencyGive() {
    const [emergencyCategory, setEmergencyCategory] = useState(null)
    const [checked, setChecked] = useState(false)
    const [text, setText] = useState('')

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };
    
    const handleChange = (event) => {
        setEmergencyCategory(event.target.value)
    }

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    return (
        <div>
            <div>
                <p>Please choose the available times</p>
                {/* TODO: Implement choosing dates */}
                <p>or just click to change your availability status</p>
                <FormGroup>
                    <FormControlLabel
                        control={<Switch checked={checked} onChange={toggleChecked} />}
                    />
                </FormGroup>
                <p>Enter your phone number please</p>
                <form>
                    <label>
                    Enter your phone number please:
                        <input type="text" value={text} onChange={handleTextChange} />
                    </label>
                </form>
            </div>
            <div>
                <p>Choose the topics that you can help with:</p>
                <FormControl component="fieldset">
                    <RadioGroup onChange={handleChange} value={emergencyCategory}>
                        <FormControlLabel value="hospital" control={<Radio />} label="Hospital" />
                        <FormControlLabel value="airport" control={<Radio />} label="Airport" />
                        <FormControlLabel value="documents" control={<Radio />} label="Documents" />
                    </RadioGroup>
                </FormControl>
            </div>
            <div>
                <Link to='/emergency/give/confirm'><button>Submit</button></Link>
            </div>
        </div>
    )
}

export default EmergencyGive
