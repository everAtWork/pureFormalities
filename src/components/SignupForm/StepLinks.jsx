import React from 'react'
import { NavLink, BrowserRouter as Router } from "react-router-dom";
export default function StepLinks() {
    return (
        <div className="step-links">
            <Router>
            <NavLink to="/" exact>Profile</NavLink>
            <NavLink to="/social">Social</NavLink>
            <NavLink to="/review">Review</NavLink>
            </Router>
        </div>
    )
}
