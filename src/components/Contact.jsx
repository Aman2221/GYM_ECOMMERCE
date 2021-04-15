import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import '../styles/Contact.css'
import { db } from '../firebase'
const Contact = () => {

    const [name, setUserName] = useState();
    const [email, setUserEmail] = useState();
    const [phone, setUserPhone] = useState();

    const handleContact = () => {
        db.collection('user_messages').add({
            user_name : name,
            user_email : email,
            user_phone : phone
        }).then(() => {
            alert("Message Sent ✔️");
        }).catch((e) => {
            console.log(e.message);
        })
        setUserEmail('');
        setUserName('');
        setUserPhone('')
    }
    return (
        <div className='contact'>
            <div className='contact'>
                <div className="contact_header">
                    <div className=" data phone">
                        <h6>Phone</h6>
                        <p><small>+91 123123123</small></p>
                    </div>
                    <div className=" data email">
                        <h6>Email</h6>
                        <p><small>user@gmail.com</small></p>
                    </div>
                    <div className=" data address">
                        <h6>Address</h6>
                        <p><small>Mumbai, India</small></p>
                    </div>
                    </div>
                    <div className="contact_main">
                        <div className="contact_heading">
                            <h4>Get in Touch</h4>
                            </div>
                            <div className="contact_inputs">
                                <TextField id="outlined-basic" label="Your name" variant="outlined" 
                                 onChange={(e) => setUserName(e.target.value)}
                                 />
                                <TextField id="outlined-basic" label="Your email" variant="outlined"
                                 onChange={(e) => setUserEmail(e.target.value)} 
                                 />
                                <TextField id="outlined-basic" label="Your phone" variant="outlined"
                                 onChange={(e) => setUserPhone(e.target.value)} 
                                 />
                            </div>
                    <input className='messageArea' type="textarea" placeholder='Message'/>
                    <button type="button" onClick={handleContact} className="btn btn-primary sendMessageBtn">Send Message</button>
                </div>
            </div>
        </div>
    )
}

export default Contact
