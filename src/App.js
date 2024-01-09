
import "./App.css"

import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import Content from "./components/Content"

const App = () => (
  <div className="app-container">
    <Sidebar />
    <div className="right-part">
      <Navbar />
      <Content />
    </div>
    
  </div>
)

export default App