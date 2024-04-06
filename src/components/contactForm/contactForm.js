import React from "react"

export default function ContactForm({name, setName, phone, setPhone, email, setEmail ,handleSubmit}){

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
        <form className="contactForm" onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={handleNameChange}/>
            <input type='email' value={email} onChange={handleEmailChange}/>
            <input type='tel' value={phone} onChange={handlePhoneChange}/>
            <button type='submit'>Add Contact</button>
        </form>
    )
}


