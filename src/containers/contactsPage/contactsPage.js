import React, {useState} from "react";
import ContactForm from "../../components/contactForm/contactForm";
import TileList from "../../components/tileList/tileList";


export default function ContactsPage({contacts, onAddContact}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        onAddContact(name, email, phone)
        e.preventDefault();
   
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
                    onSubmit={handleSubmit}
                    />
            </section>
            <section>
                <h2>Contacts</h2>
                <TileList data = {contacts} keys={['Name','Email','Phone']} />
            </section>
        </div>
    )
}