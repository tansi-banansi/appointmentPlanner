import React from "react"
import styles from './contactForm.module.css'

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
        <form className={styles.ContactForm} onSubmit={onSubmit}>
            <div className={styles.InputContainer}>
                <label for='name'>Name:</label> 
                <br/>
                <input className={styles.InputField} type="text" id="name" name="name" value={name} onChange={handleNameChange} required/>
            </div>

            <div className={styles.InputContainer}>
                <label for='email'>Email:</label>
                <br/>
                <input className={styles.InputField} type='email' id="email" name="email" value={email} onChange={handleEmailChange} required/>
            </div>

            <div className={styles.InputContainer}>
                <label for='phone'>Phone:</label>
                <br/>
                <input className={styles.InputField} type='tel' id="phone" name="phone" value={phone} onChange={handlePhoneChange} required/>
            </div>
            
            <button className={styles.SubmitButton} type='submit'>Add Contact</button>
        </form>
    )
}


