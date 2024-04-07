import React, {useState} from "react";
import AppointmentForm from "../../components/appointmentForm/appointmentForm";
import TileList from "../../components/tileList/tileList";


export default function AppointmentsPage({appointments, contacts, onAddAppointment}){
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) =>{
        onAddAppointment(title, date, time)
        e.preventDefault();

        /*setTitle('');
        setDate('');
        setTime('');*/
    }

    return(

        <div className="appointment">
            <section>
                <h2>Add Appointment</h2>

                <AppointmentForm 
                    title={title}
                    date={date}
                    time={time}
                    contacts={contacts}
                    setTitle={setTitle}
                    setDate={setDate}
                    setTime={setTime}
                    onSubmit={handleSubmit}
                />

            </section> 

            <section>
                <h2>Appointments</h2> 
                <TileList data = {appointments} keys={['Title','Date','Time', 'Contact']} />
            </section>
        </div>
    )
}

