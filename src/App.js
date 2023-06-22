
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home"
import Login from './Pages/Login/Login';
import SharedLayout from './SharedLayout';
import Signup from './Pages/SignUp/Signup';
import ForgotPassword from './Pages/ForgotPassword/ForgotPassword';
import ResetPassword from './Pages/ResetPassword/ResetPassword';
import Aboutus from './Pages/AboutUs/Aboutus';
import Contactus from './Pages/Contactus/Contactus';
import Protected from './Pages/Protected/Protected';
import Dashboard from './Pages/DashboardPages/index';
import SharedLayoutDashboard from './SharedLayout/DashboardTheme';
import ScenarioPlanning from './Pages/DashboardPages/ScenarioPlanning/index';
import  Settings from './Pages/DashboardPages/Settings/index';
import BalanceSourceBoard from './Pages/DashboardPages/BalanceSourceboard/index';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<SharedLayoutDashboard />} >
          {/* <MenuItems/> */}
          {/* <Route path='/dashboard' element={<Protected Component={Dashboard} />} /> */}
          <Route path='/settings' element={<Settings />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/scenarioPlanning' element={<ScenarioPlanning />} />
          <Route path='/balancesourceboard' element={<BalanceSourceBoard />} />
        </Route>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgotpassword' element={<ForgotPassword />} />
        <Route path='/resetpassword/:id/*' element={<ResetPassword />} />
        <Route path='/' element={<SharedLayout />} >
          {/* <MenuItems/> */}
          <Route index element={<Home/>} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/contactus' element={<Contactus />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
