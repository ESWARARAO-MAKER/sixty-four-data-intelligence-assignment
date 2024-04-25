import { IoCalendar } from 'react-icons/io5'
import './index.css'
import { IoTimeOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";


export const MainNavbar = () => {
    return(
        <div className='main-navbar'>
            <div className='main-navbar-profile-container'>
                <span className='greeting'>Good Afternoon, Akshay</span>
                <small>You are subscribed to retail plan</small>
            </div>
            <div className='date-notification-container'>
                <div className='date-time-container'>
                    <span className='time'><IoCalendar/></span>
                    <span>Today, 14 February</span>
                    <span className='time'><IoTimeOutline/></span>
                    <span>16:42</span>
                </div>
                <span><IoIosNotificationsOutline/></span>
            </div>
        </div>
    )
}