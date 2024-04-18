import React, {useState} from "react";
import AppointmentForm from "../../components/appointmentForm/appointmentForm";
import TileList from "../../components/tileList/tileList";
import styles from './appointmentsPage.module.css'
import Root from "../../components/root/root";


export default function AppointmentsPage({appointments, contacts, onAddAppointment, onRemoveAppointment}){
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [contact, setContact] = useState('');

    const handleSubmit = (e) =>{
        onAddAppointment(title, date, time, contact)
        e.preventDefault();
        /*setTitle('');
        setDate('');
        setTime('');
        setContact('');*/
    }
    return(

       <>
        <Root/>
        
        <div className={styles.AppointmentsPage}>
           
            <section>
                <h2 className={styles.Section}>Add Appointment</h2>
                <AppointmentForm 
                    title={title}
                    date={date}
                    time={time}
                    contact={contact}
                    contacts={contacts}
                    setTitle={setTitle}
                    setDate={setDate}
                    setTime={setTime}
                    onSubmit={handleSubmit}
                    setContact={setContact}
                />
            </section> 

            <section>
                <h2 className={styles.Section}>Appointments</h2> 
                <TileList data = {appointments} keys={['Title','Date','Time', 'Contact']} onRemove={onRemoveAppointment}/>
            </section>
        </div>
        </>
    )
}

