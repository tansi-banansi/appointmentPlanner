import React from "react";
import { NavLink , Outlet} from "react-router-dom";

export default function Root(){

    return (
        <>
            <div className='root'>
                <section className="contact">
                    <NavLink to='/contacts'> Contacts </NavLink>
                </section>
    
                <section className="appointment">
                    <NavLink to='/appointments'> Appointments </NavLink>
                </section>
            
            </div>

            <Outlet/>
        </>
    )
}