import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SignupForm from "./components/SignupForm/SignupForm";
import "./styles.scss";

export default function App() {
  return (
    <Router>
      <div className="App container">
        <h2>hey</h2>
        <SignupForm />
      </div>
    </Router>
  );
}
