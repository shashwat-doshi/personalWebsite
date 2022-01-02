import React, { useState } from 'react';

import "./contact.scss";

import "../projects/stars.scss";

import { db } from "../firebase";


const Contact = () => {

    const [name, setName] = useState(""); // states 
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => { // e stands for event.
        e.preventDefault();

        db.collection('contacts').add({
            name: name,
            email: email,
            message: message,
        })
            .then(() => { // this is called a "promise". it is executed whenever the above db.collection runs and finishes successfully.
                alert('Message has been submitted :)');
            })
            .catch(error => { // if there is any error in the sending the email, aka in the database.
                alert(error.message); // firebase will handle all the error stuff. We do not need to do anything.
            })
    }


    return (

        <div id="home" className="intro route bg-image background">
            <div id="stars" />
            <div id="stars2" />
            <div id="stars3" />

            <div className="contact">
                <form className="form" onSubmit={handleSubmit}>
                    <h1>Contact Form</h1>

                    <label>Name <span id="required">*</span></label>
                    <input placeholder="Name" value={name}
                        onChange={(e) => setName(e.target.value)} required />

                    <label>Email <span id="required">*</span></label>
                    <input placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)} required />

                    <label>Message <span id="required">*</span></label>
                    <textarea placeholder="Type your message here..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)} required>
                    </textarea>
                    {/* we have textarea instead of input as we want the text box to be customizbale.. and as message is a lot of words, we need text area instead of input. */}

                    <button type="submit">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Contact;
