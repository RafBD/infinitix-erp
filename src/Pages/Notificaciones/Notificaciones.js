import React from 'react';
import { IoMdNotifications } from "react-icons/io";

import './Notificaciones.css'

const Notificaciones = () => {
    return (
        <div className='container-notificaciones'>
            <IoMdNotifications  className='icon-notifications'/>
            <h1>No Tienes Notificaciones</h1>
        </div>
        
    )
}

export default Notificaciones