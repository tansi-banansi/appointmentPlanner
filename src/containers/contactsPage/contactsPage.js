import React, {useState} from "react";
import ContactForm from "../../components/contactForm/contactForm";
import TileList from "../../components/tileList/tileList";
import styles from './contactsPage.module.css'
import Root from "../../components/root/root";


export default function ContactsPage({contacts, onAddContact, onRemoveContact}){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        onAddContact(name, email, phone)
        e.preventDefault();
        setName('');
        setEmail('');
        setPhone('');
    }

    return(

        <>
        <Root/>
        <div className={styles.ContactsPage}>
            
            <section>
                <h2 className={styles.Section}>Add Contact</h2>
                <ContactForm className={styles.ContactsPage}
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
                <h2 className={styles.Section}>Contacts</h2>
                <TileList data = {contacts} keys={['Name','Email','Phone']} onRemove={onRemoveContact}/>
            </section>
        </div>
        </>
        
    )
}