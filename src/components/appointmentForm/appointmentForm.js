import React from "react";
import styles from './appointment.module.css'

export default function AppointmentForm({title,setTitle, date, setDate, time, setTime, contact, setContact, contacts, onSubmit}){
    
    const handleTitleChange = (e) =>{
        setTitle(e.target.value)
    }
    const handleDateChange = (e) =>{
        setDate(e.target.value)
    }
    const handleTimeChange = (e) =>{
        setTime(e.target.value)
    }

    const handleContactChange = (e) =>{
        setContact(e.target.value)
    }
    

    return(

        <form onSubmit={onSubmit} className={styles.AppointmentForm}>
            <div className={styles.InputContainer}>
                <label for='title'>Title:</label>
                <br/>
                <input className={styles.InputField} type="text" id="title" name="title" value={title} onChange={handleTitleChange} required/>
            </div>

            <div className={styles.InputContainer}>
                <label for='date'>Date:</label>
                <br/>
                <input className={styles.InputField} type='date' id="date" name="date" value={date} onChange={handleDateChange} required/>
            </div>

            <div className={styles.InputContainer}>
                <label for='time'>Time:</label>
                <br/>
                <input className={styles.InputField} type='time' id="time" name="time" value={time} onChange={handleTimeChange} required/>
            </div>

            <div className={styles.InputContainer}>
                <label for='contact'>Contact:</label>
                <br/>
                <select className={styles.SelectField} id="contact" name="contact" value={contact} onChange={handleContactChange} required>
                    {contacts.map(contact => <option key={contact.Name} value={contact.Name} >{contact.Name}</option>
                    )}
                </select>


            </div>

            <button className={styles.SubmitButton} type="submit">Add Appointment</button>

        </form>

    )
}