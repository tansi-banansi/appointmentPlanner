import React, {useState} from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ContactsPage from "./containers/contactsPage/contactsPage";
import AppointmentsPage from "./containers/appointmentsPage/appointmentsPage";
import Root from "./components/root/root";
import './App.css'



export default function App(){
    const [contacts, setContacts] = useState([]);
    const [appointments, setAppointments] = useState([]);

    const handleAddContact = (Name, Email, Phone) => {
        const newContact = {Name, Email, Phone};
        setContacts([...contacts, newContact]);

      };

    const handleRemoveContact = (contact) =>{
        setContacts(contacts.filter(item => item !== contact))

    }

    const handleAddAppointment = (Title, Date, Time, Contact) =>{
        const newAppointment = {Title, Date, Time, Contact};
        setAppointments([...appointments, newAppointment]);
    }
    
    const handleRemoveAppointment = (appointment) =>{
        setAppointments(appointments.filter(item => item !== appointment))

    }

    return(
        <div className="appContainer">
        <Router>
            <Routes>
                <Route path = '/' element= {<Root className='root'/>}/>
                <Route  path = '/contacts' element= {<ContactsPage contacts={contacts} onAddContact={handleAddContact} onRemoveContact = {handleRemoveContact}/>}/>
                <Route  path = '/appointments' element= {<AppointmentsPage appointments={appointments} contacts={contacts} onAddAppointment={handleAddAppointment} onRemoveAppointment = {handleRemoveAppointment}/>}/>
                
            </Routes>
        </Router>
        </div>
    )
}

