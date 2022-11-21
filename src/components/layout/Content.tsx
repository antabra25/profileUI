import Profiles from "../pages/Profiles"
import Info from "../pages/Info"
import Home from "../pages/Home"
import Client from "../client/Client";
import {Routes, Route} from "react-router-dom"

const Content = () => {

    return (
        <div className="content-container">
            <div className="content x-container">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/profiles" element={<Profiles/>}/>
                    <Route path="/info" element={<Info/>}/>
                    <Route path="/profile/:id" element={<Client/>}/>
                </Routes>

            </div>
        </div>
    )

}

export default Content;