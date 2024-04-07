import React, {useState} from "react";
import ContactsPage from "./containers/contactsPage/contactsPage";
import AppointmentsPage from "./containers/appointmentsPage/appointmentsPage";
import Root from "./components/root/root";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'



export default function App(){
    const [contacts, setContacts] = useState([]);
    const [appointments, setAppointments] = useState([]);

    const handleAddContact = (Name, Email, Phone) => {
        const newContact = {Name, Email, Phone};
        setContacts([...contacts, newContact]);

      };

    const handleAddAppointment = (Title, Date, Time, Contact) =>{
        const newAppointment = {Title, Date, Time, Contact};
        setAppointments([...appointments, newAppointment]);
    }
    

    return(
        <div className="appContainer">
        <BrowserRouter>
            <Routes>
                <Route path = '/' element= {<Root className='root'/>}>
                    <Route  path = 'contacts' element= {<ContactsPage contacts={contacts} onAddContact={handleAddContact}/>}/>
                    <Route  path = 'appointments' element= {<AppointmentsPage appointments={appointments} contacts={contacts} onAddAppointment={handleAddAppointment}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
        </div>
    )
}

