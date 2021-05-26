import React, { useState } from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Switch from '@material-ui/core/Switch';
import { Link } from 'react-router-dom';
import { FormGroup } from '@material-ui/core';
import { Breadcrumb, BreadcrumbItem, Button } from "reactstrap"
import 'react-dates/initialize'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-dates/lib/css/_datepicker.css'
import { DateRangePicker } from 'react-dates'


function EmergencyGive() {
    const [emergencyCategory, setEmergencyCategory] = useState(null)
    const [checked, setChecked] = useState(false)
    const [text, setText] = useState('')
    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [focusedInput, setFocusedInput] = useState(null)

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };
    
    const handleChange = (event) => {
        setEmergencyCategory(event.target.value)
    }

    const handleTextChange = (event) => {
        setText(event.target.value)
    }

    const handleClick = () => {
        alert("Your information is well received!")
    }
    return (
        <div className = "container">
            <Breadcrumb className="top">
                <BreadcrumbItem>
                    <Link to="/emergency" className="link">Emergency</Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                    Give Assistance
                </BreadcrumbItem>
            </Breadcrumb>
            <div className="row">
            <div className = "col-md-6">
                <div className = "firsthalf">
                    <p className = "heading">Please choose the available times</p>
                    {/* TODO: Implement choosing dates */}
                    <DateRangePicker
                        startDate={startDate} // momentPropTypes.momentObj or null,
                        startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                        endDate={endDate} // momentPropTypes.momentObj or null,
                        endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                        onDatesChange={({ startDate, endDate }) => {
                            setStartDate(startDate)
                            setEndDate(endDate)
                        }}// PropTypes.func.isRequired,
                        focusedInput={focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={focusedInput => setFocusedInput( focusedInput )} // PropTypes.func.isRequired,
                    />

                    <p className="heading">or just click to change your availability status</p>
                    <FormGroup>
                        <FormControlLabel
                            control={<Switch checked={checked} onChange={toggleChecked} />}
                        />
                    </FormGroup>
                    
                    <form>
                        <label>
                            <p className="heading">Enter your phone number please:</p>
                            <input type="text" value={text} onChange={handleTextChange} style = {{borderRadius: "3px"}} />
                        </label>
                    </form>
                </div>
            </div>
            <div className = "col-md-6">
                <div className="secondhalf">
                    <p className = "heading">Choose the topics that you can help with:</p>
                    <FormControl component="fieldset">
                        <RadioGroup onChange={handleChange} value={emergencyCategory}>
                            <FormControlLabel value="hospital" control={<Radio />} label="Hospital" />
                            <FormControlLabel value="airport" control={<Radio />} label="Airport" />
                            <FormControlLabel value="documents" control={<Radio />} label="Documents" />
                        </RadioGroup>
                    </FormControl>
                </div>
            </div>
            </div>
            <div className="submitbut">
                <Link to={``}><Button onClick = {handleClick} style={{ color: "bisque", backgroundColor: "teal", width: "150px" }} size="lg" className="bt3">Submit</Button></Link>
            </div>
        </div>
    )
}

export default EmergencyGive
