import React from "react";

import { NavLink , Outlet} from "react-router-dom";
import styles from './root.module.css'

export default function Root(){

    return (
        <>
            <div className={styles.Root}>
                <section >
                    <NavLink to='/contacts' className={styles.NavLink}> Contacts </NavLink>
                </section>
    
                <section>
                    <NavLink to='/appointments' className={styles.NavLink}> Appointments </NavLink>
                </section>
            
            </div>

            <Outlet/>
        </>
    )
}