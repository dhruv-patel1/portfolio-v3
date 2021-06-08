import React, { useState } from "react";
import "./Form.scss";
import emailjs from 'emailjs-com';
import {Tween, Reveal} from "react-gsap";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from "../../assets/logo.svg";


const Form = () =>{

    const [msg, setMsg] = useState(false);

    function stopShow(){
        setTimeout( () => {setMsg(false)}, 10000);
    }


    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_510ccjj', 'template_9z1ti2w', e.target, 'user_kXMCW1EBaO7isBe2zpC0z')
        .then((result) => {
            console.log(result.text);
            setMsg(true);
            stopShow();
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();

    }

    return(
        <Reveal>
            <Tween from={{opacity: 0, y: "100"}} delay={1} ease="power2.out">
                <div className="form-container">
                
                    <div className="form-img-container">
                        <img src={logo} alt="" className="form-logo"/>
                    </div>
                    <form className="contact-form" onSubmit={sendEmail}>
                        <TextField
                            required
                            label="Name"
                            className="input"
                            name="from_name"
                        />
                        <TextField
                            required
                            label="Email"
                            className="input"
                            name="reply_to"
                        />
                        <TextField
                            label="Message"
                            multiline
                            required
                            rows={4}
                            className="input"
                            name="message"
                    />
                    <Button className="btn" type="submit" variant="outlined">Send</Button>
                    </form>
                    <div className="form-footer-area">
                        {msg && <p className="response">Thanks for messaging me. I will get back to you ASAP.</p>}
                    </div>
                </div>
            </Tween>
        </Reveal>
    )
}


export default Form;