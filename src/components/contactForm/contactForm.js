import React from "react"
import '../../App.css'

export default function ContactForm({name, setName, phone, setPhone, email, setEmail ,onSubmit}){

    const handleNameChange = (e) =>{
        setName(e.target.value);
    }

    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    }

    const handlePhoneChange = (e) =>{
        setPhone(e.target.value);
    }

    return (
        <form className="contactForm" onSubmit={onSubmit}>
            <div className="inputContainer">
                <label for='name'>Name:</label> 
                <br/>
                <input className="inputField" type="text" id="name" name="name" value={name} onChange={handleNameChange} required/>
            </div>

            <div className="inputContainer">
                <label for='email'>Email:</label>
                <br/>
                <input className="inputField" type='email' id="email" name="email" value={email} onChange={handleEmailChange} required/>
            </div>

            <div className="inputContainer">
                <label for='phone'>Phone:</label>
                <br/>
                <input className="inputField" type='tel' id="phone" name="phone" value={phone} onChange={handlePhoneChange} required/>
            </div>
            
            <button type='submit'>Add Contact</button>
        </form>
    )
}


