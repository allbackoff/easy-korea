import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from 'reactstrap'

function AskQuestion() {
    return (
        <div className='forumask'>
            <form className='forumcont'>
                <label>
                    Category:
                    <select>
                        <option>Choose your option</option>
                        <option value="Documents">Documents</option>
                        <option value="Food">Food</option>
                        <option value="Airport">Airport</option>
                        <option value="Phone Number">Phone Number</option>
                        <option value="Housing">Housing</option>
                        <option value="Others">Others</option>
                    </select>
                </label>
                <label>
                    Please, write your question:
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" />
                </label>
                <input type="submit" value="Post" />
            </form>
        </div>
    )
}

export default AskQuestion