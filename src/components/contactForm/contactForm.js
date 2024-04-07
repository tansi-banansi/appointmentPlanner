import React from "react"

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
            <label for='name'>Name:</label>
            <input type="text" id="name" name="name" value={name} onChange={handleNameChange} required/>

            <label for='email'>Email:</label>
            <input type='email' id="email" name="email" value={email} onChange={handleEmailChange} required/>

            <label for='phone'>Phone:</label>
            <input type='tel' id="phone" name="phone" value={phone} onChange={handlePhoneChange} required/>

            <button type='submit'>Add Contact</button>
        </form>
    )
}


