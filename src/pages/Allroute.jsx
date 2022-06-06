import {Route, Routes} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Login from "./Login"
import Home from "./Home"
function AllRoutes(){
    return(
        <div>
            <Navbar />
            <div>
                <Routes>
                    <Route path="/" element={<div>Home</div>} />
                    <Route path="/login" element={<Login/>}/> 
                </Routes>
            </div>
        </div>
    );
};
export default AllRoutes