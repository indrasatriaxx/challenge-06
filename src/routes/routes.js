import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/Login';
import CarRental from '../pages/CarRental';
import DashboardAdmin from '../pages/DashboardAdmin';
import Register from '../pages/Register';


const RouteApp = () => {
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/home" element={<CarRental/>}/>
            <Route path="/dashboard" element={<DashboardAdmin/>}/>
        </Routes>
        </BrowserRouter>
        </>
    )
}
export default RouteApp;