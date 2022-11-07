import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Menu from "./components/Menu";
import Dashboard from "./components/Dashboard";
import Coinflipping from "./components/Coinflipping";
import "./index.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="App">
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Dashboard" element={<Dashboard />}/>
          <Route path="/coin-flipper" element={<Coinflipping />}/>
        </Routes>
        < Footer />
      </div>
    </>
  )
  }

export default App;