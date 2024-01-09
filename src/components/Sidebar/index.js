import { RiChatSmile2Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { IoMailOpen } from "react-icons/io5";
import { TbAlignBoxLeftStretch, TbAlignBoxBottomCenter, TbMessages } from "react-icons/tb";
import { BsChatSquareText } from "react-icons/bs";
import { SiCircle } from "react-icons/si";
import { GrIntegration } from "react-icons/gr";


import "./index.css"


const Sidebar = () => (
    <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="small-device-nav-bar">
        <a class="navbar-brand" >Economize</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a class="nav-link active" >
                Dashboard
                <span class="sr-only">(current)</span>
            </a>
            <a class="nav-link" >Automation</a>
            <a class="nav-link">Campaigns</a>
            <a class="nav-link">Popup</a>
            <a class="nav-link">Live Chat</a>
            <a class="nav-link">Segments</a>
            <a class="nav-link">Integrations</a>
            </div>
        </div>
        </nav>
        
        <div className="side-bar-container">
            <div className="side-bar-options-container">
                <button type="button" className="side-bar-title-btn">
                    <RiChatSmile2Line size={25} style={{color: "#3559E0", fontWeight: "bold"}} />
                    <h1 className="side-bar-title">Blue Receipt</h1>
                </button>
                <div className="side-bar-search">
                    <FiSearch size={25} />
                    <input type="search" className="search-input-styles" placeholder="Search" />
                </div>

                
                <button type="button" className="side-bar-button">
                    <IoMailOpen size={25} style={{color: "#3559E0"}} />
                    <p className="side-bar-option">Dashboard</p>
                </button>

                <hr className="side-hr-line" />

                <button type="button" className="side-bar-button" style={{color: "grey", backgroundColor: "transparent",}}>
                    <RiChatSmile2Line size={25} style={{color: "grey"}} />
                    <p className="side-bar-option">Dashboard</p>
                </button>

                <button type="button" className="side-bar-button" style={{color: "grey", backgroundColor: "transparent"}}>
                    <TbAlignBoxLeftStretch size={25} style={{color: "grey"}} />
                    <p className="side-bar-option">Automation</p>
                </button>

                <button type="button" className="side-bar-button" style={{color: "grey", backgroundColor: "transparent"}}>
                    <TbAlignBoxBottomCenter size={25} style={{color: "grey"}} />
                    <p className="side-bar-option">Campaigns</p>
                </button>

                <button type="button" className="side-bar-button" style={{color: "grey", backgroundColor: "transparent"}}>
                    <TbMessages size={25} style={{color: "grey"}} />
                    <p className="side-bar-option">Popup</p>
                </button>

                <button type="button" className="side-bar-button" style={{color: "grey", backgroundColor: "transparent"}}>
                    <BsChatSquareText size={22} style={{color: "grey"}} />
                    <p className="side-bar-option">Live Chat</p>
                </button>

                <button type="button" className="side-bar-button" style={{color: "grey", backgroundColor: "transparent"}}>
                    <SiCircle size={22} style={{color: "grey"}} />
                    <p className="side-bar-option">Segments</p>
                </button>

                <button type="button" className="side-bar-button" style={{color: "grey", backgroundColor: "transparent"}}>
                    <GrIntegration size={22} style={{color: "grey"}} />
                    <p className="side-bar-option">Integrations</p>
                </button>
            </div>
            <div className="side-bar-person-name">
                <div className="side-bar-emoji">
                    <img src="https://th.bing.com/th/id/OIP.i-5VtHQ8b6VFDiWIE-PzqwHaHa?w=500&h=500&rs=1&pid=ImgDetMain"  
                    alt="personImg" className="side-bar-profile"/>
                </div>
                
                
                <div className="person-name">
                    <h1 className="side-bar-prashanth">Prashanth</h1>
                    <p className="store-name">Store Name</p>
                </div>
            </div>
        </div>
    </>
)

export default Sidebar