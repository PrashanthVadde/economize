import { MdDateRange } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

import "./index.css"

const Navbar = () => (
    <nav className="nav-bar">
       <div className="nav-bar-emoji-name-container">
            <div className="nav-bar-emoji-container">
                <img src="https://th.bing.com/th/id/OIP.i-5VtHQ8b6VFDiWIE-PzqwHaHa?w=500&h=500&rs=1&pid=ImgDetMain" 
                alt="personImg" className="nav-bar-emoji" />
            </div>
            <div className="nab-bar-person-name-container">
                <h1 className="nav-bar-person-name" >Good Morning! Prashanth</h1>
                <p className="nab-bar-person-status">Here are your status for Today, 9 Jan 2024</p>
            </div>
       </div>

       <div className="nav-bar-options">
        <div className="nav-bar-option">
            <MdDateRange size={22} style={{color: "#3559E0"}}/>
            <h1 className="option-name">Today</h1>
        </div>

        <p className="compare-to">Compare to</p>

        <div className="nav-bar-option">
            <h1 className="option-name">Previous Period</h1>
            <IoIosArrowDown size={25} style={{color: "#3559E0", fontWeight: 600 }} />
        </div>
       </div>
    </nav>
)

export default Navbar