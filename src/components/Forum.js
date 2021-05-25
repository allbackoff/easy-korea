import React, {useState, useEffect} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import {Button} from 'reactstrap'
import { Link } from 'react-router-dom'

function Forum() {
    const [hideText, setHideText] = useState(false)
    const onClick = () => setHideText(!hideText)

    
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };
    return (
        <div>
            <div className="forumcontainer">
                <div className="row allign-items-start">
                    <div className="col-md-3" style={{ marginTop: "20px", marginBottom: "10px" }}    >
                        <div className='categories'>
                            <List component="nav" aria-label="main folders" className='category'>
                                <ListItem>           
                                    <ListItemText primary={<Typography variant='h5' style={{ color: 'black' }}>Categories</Typography>} />
                                </ListItem>
                            </List>
                            <Divider />
                            <List component="nav" aria-label="secondary folder">
                                <ListItem
                                button
                                selected={selectedIndex === 2}
                                onClick={(event) => handleListItemClick(event, 2)}
                                >
                                    <ListItemText primary={<Typography variant='h6' style={{ color: 'black' }}>Documents</Typography>} />
                                </ListItem>
                                <ListItem
                                button
                                selected={selectedIndex === 3}
                                onClick={(event) => handleListItemClick(event, 3)}
                                >
                                    <ListItemText primary={<Typography variant='h6' style={{ color: 'black' }}>Food</Typography>} />
                                </ListItem>
                                <ListItem
                                button
                                selected={selectedIndex === 4}
                                onClick={(event) => handleListItemClick(event, 4)}
                                >
                                    <ListItemText primary={<Typography variant='h6' style={{ color: 'black' }}>Airport</Typography>} />
                                </ListItem>
                                <ListItem
                                button
                                selected={selectedIndex === 5}
                                onClick={(event) => handleListItemClick(event, 5)}
                                >
                                    <ListItemText primary={<Typography variant='h6' style={{ color: 'black' }}>Phone Number</Typography>} />
                                </ListItem>
                                <ListItem
                                button
                                selected={selectedIndex === 6}
                                onClick={(event) => handleListItemClick(event, 6)}
                                >
                                    <ListItemText primary={<Typography variant='h6' style={{ color: 'black' }}>Housing</Typography>} />
                                </ListItem>
                                <ListItem
                                button
                                selected={selectedIndex === 7}
                                onClick={(event) => handleListItemClick(event, 7)}
                                >
                                    <ListItemText primary={<Typography variant='h6' style={{ color: 'black' }}>Others</Typography>} />
                                </ListItem>
                            </List>
                        </div>
                    </div>

                    <div className="col-md-6" style={{ marginTop: "20px", marginBottom: "10px"  }}    >
                        <div class="addquestion">
                            <div>
                            <Link to='/forum/ask'><Button style={{ color: "bisque", backgroundColor: "teal", width: "200px" }} size="lg" className="askq">Ask Question</Button></Link>
                            </div>
                        <p>Questions</p>
                        
                            <div className="question">
                                <div className="title">
                                    <h6>Dentistry in Ulsan</h6>
                                </div>
                                <div className="content">
                                    <p>Looking for the cheapest option to save my poor teeth in Ulsan</p>
                                </div>
                                <div className="date">
                                    <p>Posted on: March 26, 2021, Jeph Bessos</p>
                                </div>
                                
                                    
                                
                                
                            </div>
                       
                        <div className="question">
                            <div className="title">
                                <h6>Dentistry in Ulsan</h6>
                            </div>
                            <div className="content">
                                <p>Looking for the cheapest option to save my poor teeth in Ulsan</p>
                            </div>
                            <div className="date">
                                <p>Posted on: March 26, 2021, By Adam Saydlen</p>
                            </div>




                        </div>
                        <div className="question">
                            <div className="title">
                                <h6>Dentistry in Ulsan</h6>
                            </div>
                            <div className="content">
                                <p>Looking for the cheapest option to save my poor teeth in Ulsan</p>
                            </div>
                            <div className="date">
                                <p>Posted on: March 26, 2021, By Kyle Mbappe </p>
                            </div>




                        </div>
                    </div>

                    <div className="col-md-3" style={{ marginTop: "20px", marginBottom: "10px"  }}    >
                        <h2>Frequently Asked Questions</h2>

                        <div className="faq">
                            <div className="faq_text">
                                <h4>Where can I find a flat for rent?</h4>
                                {hideText ? <p id='1' style={{display: 'block'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p> : null}
                            </div>
                            <span className="btnkotak" onClick={onClick}>+</span>
                        </div>

                        <div className="faq">
                            <div className="faq_text">
                                <h4>How can I find my lost items?</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <span className="btnkotak">+</span>
                        </div>

                        <div className="faq">
                            <div className="faq_text">
                                <h4>Where can I get a telephone number?</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <span className="btnkotak">+</span>
                        </div>

                        <div className="faq">
                            <div className="faq_text">
                                <h4>How to get to Seoul from Incheon?</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <span className="btnkotak">+</span>
                        </div>

                        <div className="faq">
                            <div className="faq_text">
                                <h4>How can I get my ARC?</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <span className="btnkotak">+</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forum