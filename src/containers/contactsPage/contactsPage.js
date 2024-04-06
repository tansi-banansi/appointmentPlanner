import React, {useState} from "react";
import ContactForm from "../../components/contactForm/contactForm";
import TileList from "../../components/tileList/tileList";


export default function ContactsPage({contacts, setContacts}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setContacts([name, email, phone])
        /*setName('');
        setEmail('');
        setPhone('');*/


    }

    return(
        <div>
            <section>
                <h2>Add Contact</h2>
                <ContactForm 
                    name = {name}
                    email = {email}
                    phone = {phone}
                    setName = {setName}
                    setEmail = {setEmail}
                    setPhone = {setPhone}
                    handleSubmit={handleSubmit}
                    />
            </section>
            <section>
                <h2>Contacts</h2>
                <TileList data = {contacts} keys={[name,email,phone]} />
            </section>
        </div>
    )
}