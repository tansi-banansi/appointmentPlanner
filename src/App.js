import React, {useState} from "react";
import ContactsPage from "./containers/contactsPage/contactsPage";
import AppointmentsPage from "./containers/appointmentsPage/appointmentsPage";
import Root from "./components/root/root";
import { BrowserRouter, Routes, Route } from "react-router-dom";



export default function App(){
    const [contacts, setContacts] = useState([]);
    const [appointments, setAppointments] = useState([]);


    return(
        <BrowserRouter>
            <Routes>
                <Route  path = '/' element= {<Root/>}>
                    <Route  path = 'contacts' element= {<ContactsPage contacts={contacts} setContacts={setContacts}/>}/>
                    <Route  path = 'appointments' element= {<AppointmentsPage appointments={appointments} setAppointments= {setAppointments}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
