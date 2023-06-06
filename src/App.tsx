import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";

import Class from "./pages/Class";
import Login from "./pages/Login";
import Mentee from "./pages/Mentee";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import User from "./pages/User";
const App = () => {
  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Class" element={<Class />} />
          <Route path="/Mentee" element={<Mentee />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </CookiesProvider>
  );
};

export default App;
