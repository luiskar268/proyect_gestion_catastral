import React from "react";
import ReactDOM from "react-dom"
import App from "./components/App"
import Dashboard from "./components/Dashboard"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


ReactDOM.render(
    <Router>
        <Routes>
            //<Route exact path="/" element={<App />} />
            <Route exact path="/index" element={<App />} />
            <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Router>,
document.getElementById('root')
);