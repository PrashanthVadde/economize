import { AreaChart, Tooltip, Area, XAxis, YAxis,CartesianGrid } from "recharts"
import { IoIosArrowDown } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

import "./index.css"

const Content = () => {
    const data = [
        {
          "name": "Page A",
          "uv": 4000,
          "pv": 2400,
          "amt": 2400
        },
        {
          "name": "Page B",
          "uv": 3000,
          "pv": 1398,
          "amt": 2210
        },
        {
          "name": "Page C",
          "uv": 2000,
          "pv": 9800,
          "amt": 2290
        },
        {
          "name": "Page D",
          "uv": 2780,
          "pv": 3908,
          "amt": 2000
        },
        {
          "name": "Page E",
          "uv": 1890,
          "pv": 4800,
          "amt": 2181
        },
        {
          "name": "Page F",
          "uv": 2390,
          "pv": 3800,
          "amt": 2500
        },
        {
          "name": "Page G",
          "uv": 3490,
          "pv": 4300,
          "amt": 2100
        }
      ]
      

    return(
        <div className="content-container">
            <div className="top-information">
                <div className="box-container">
                    <div className="top-text-container">
                        <p className="top-text">Revenue</p>
                        <p className="percentage">+12.5%</p>
                    </div>
                    <h1 className="top-information-numbers">$32,621.72</h1>
                    <p className="bottom-text">433 Orders</p>
                </div>

                <div className="box-container">
                    <div className="top-text-container">
                        <p className="top-text">Subscribers</p>
                        <p className="percentage">+32.5%</p>
                    </div>
                    <h1 className="top-information-numbers">484,205</h1>
                    <p className="bottom-text">$56 Average Order</p>
                </div>

                <div className="box-container">
                    <div className="top-text-container">
                        <p className="top-text">Conversations</p>
                        <p className="percentage" style={{backgroundColor: "#FFDFDF", color: "#FF4B91"}}>-3.4%</p>
                    </div>
                    <h1 className="top-information-numbers">552,553</h1>
                    <p className="bottom-text">5min Average Response Time</p>
                </div>

                <div className="box-container" style={{borderRight: "none"}}>
                    <div className="top-text-container">
                        <p className="top-text" >Popup Conversion Rate</p>
                        <p className="percentage" >32.5%</p>
                    </div>
                    <h1 className="top-information-numbers">25%</h1>
                    <p className="bottom-text">5% Sales Conversion Rate</p>
                </div>
            </div>

            <AreaChart width={330} height={150} data={data} id="smallDeviceChart"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>

            <AreaChart width={730} height={250} data={data} id="mediumDeviceChart"
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>

            <div className="content-bottom-part">
                <div className="bottom-left-part">
                    <div className="bottom-buttons-container">
                        <button type="button" className="bottom-btn" style={{color: "black", borderColor: "#4942E4"}}>Automations</button>
                        <button type="button" className="bottom-btn">Campaigns</button>
                        <button type="button" className="bottom-btn">Segments</button>
                        <button type="button" className="last-month-btn">Last month <IoIosArrowDown size={22} style={{color: "#4942E4"}}/> </button>
                    </div>

                    <div className="bottom-orders-part">
                        <div className="bottom-order">
                            <div className="cart-part">
                                <div className="cart-logo">
                                    <IoCartOutline size={30} />
                                </div>
                                <div className="cart-part-text">
                                    <h1 className="cart-part-title">Abadoned Cart 7 days <FaArrowRight size={20} style={{marginLeft: "6px"}} /> </h1>
                                    <p className="cart-part-description">4024 sent  124 clicks</p>
                                </div>
                            </div>
                            <div className="amount-part">
                                <h1 className="bottom-amount">$5,231</h1>
                                <p className="bottom-orders-text">41 Orders  150 AOV</p>
                            </div>
                        </div>

                        <div className="bottom-order" style={{backgroundColor: "transparent"}}>
                            <div className="cart-part">
                                <div className="cart-logo">
                                    <IoCartOutline size={30} />
                                </div>
                                <div className="cart-part-text">
                                    <h1 className="cart-part-title" style={{color: "black"}}>Abadoned Cart 15min </h1>
                                    <p className="cart-part-description" style={{color: "grey"}}>4024 sent  124 clicks</p>
                                </div>
                            </div>
                            <div className="amount-part">
                                <h1 className="bottom-amount">$24,521</h1>
                                <p className="bottom-orders-text">41 Orders  150 AOV</p>
                            </div>
                        </div>

                        <div className="bottom-order" style={{backgroundColor: "transparent"}}>
                            <div className="cart-part">
                                <div className="cart-logo">
                                    <IoCartOutline size={30} />
                                </div>
                                <div className="cart-part-text">
                                    <h1 className="cart-part-title" style={{color: "black"}}>Abadoned Cart 15 min </h1>
                                    <p className="cart-part-description" style={{color: "grey"}}>4024 sent  124 clicks</p>
                                </div>
                            </div>
                            <div className="amount-part">
                                <h1 className="bottom-amount">$24,521</h1>
                                <p className="bottom-orders-text">41 Orders  150 AOV</p>
                            </div>
                        </div>

                        
                    </div>
                </div>

                <div className="bottom-right-part">
                    <h1 className="guage-level">Level 5</h1>
                    <p className="guage-description">+$32,050 in the last month</p>
                    <img src="https://icon-library.com/images/guage-icon/guage-icon-22.jpg"  
                    alt="guage" className="guage-img"/>
                    <p className="guage-amount">$24,495</p>
                </div>
            </div>


        </div>
    )
}

export default Content