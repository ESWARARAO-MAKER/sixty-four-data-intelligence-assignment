import './index.css'
import { IoSearch } from "react-icons/io5";
import { FiMonitor } from "react-icons/fi";
import { MdOutlineHelpOutline } from "react-icons/md";
import { IoMdCalendar } from "react-icons/io";
import { MdApartment } from "react-icons/md";
import { AiFillDollarCircle } from "react-icons/ai";
import { IoMdHeadset } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";


export const SideNavbar = () => {
    return(
        <div className = "side-navbar">
            <div className='profile-options-container'>
                <span>E</span>
                <div className='options-container'>
                    <span><IoSearch/></span>
                    <span><FiMonitor/></span>
                    <span><MdOutlineHelpOutline/></span>
                    <span><IoMdCalendar/></span>
                    <span><MdApartment/></span>
                    <span><AiFillDollarCircle/></span>
                    <span><IoMdHeadset/></span>
                </div>
            </div>
            <span><IoMdSettings/></span>
        </div>
    )
}