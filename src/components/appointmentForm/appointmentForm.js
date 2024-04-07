import React from "react";

export default function AppointmentForm({title,setTitle, date, setDate, time, setTime, contacts, onSubmit}){
    
    const handleTitleChange = (e) =>{
        setTitle(e.target.value)
    }
    const handleDateChange = (e) =>{
        setDate(e.target.value)
    }
    const handleTimeChange = (e) =>{
        setTime(e.target.value)
    }
    

    return(
        <div className="appointmentForm">
            <form onSubmit={onSubmit}>
                <label for='title'>Title:</label>
                <input type="text" id="title" name="title" value={title} onChange={handleTitleChange} required/>

                <label for='date'>Date:</label>
                <input type='date' id="date" name="date" value={date} onChange={handleDateChange} required/>

                <label for='time'>Time:</label>
                <input type='time' id="time" name="time" value={time} onChange={handleTimeChange} required/>

                <label for='contact'>Contact:</label>
                <select id="contact" name="contact">
                    {contacts.map(contact => <option key={contact.Name} value={contact.Name} required>{contact.Name}</option>
                    )}
                </select>
                <button type="submit">Add Appointment</button>
            </form>
        </div>
    )
}