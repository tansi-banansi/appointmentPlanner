import React from "react";
import { NavLink , Outlet} from "react-router-dom";

export default function Root(){

    return (
        <>
            <div className='root'>
                <section className="contact">
                    <NavLink to='/contacts' className='navLink'> Contacts </NavLink>
                </section>
    
                <section className="appointment">
                    <NavLink to='/appointments' className='navLink'> Appointments </NavLink>
                </section>
            
            </div>

            <Outlet/>
        </>
    )
}