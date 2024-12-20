"use client";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./aboutUs/page";
import Contact from "./contactUs/page";

import Services from "./services/page";
import Home from ".";
import Login from "./login/login_page";
import Dashboard from "./dashbord/page";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/signin" element={<Login/>} />
        {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
      </Routes>
    </Router>
  );
}
