import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SignupForm from "./components/SignupForm/SignupForm";
import "./styles.scss";

export default function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="App mx-auto">
          <SignupForm />
        </div>
      </div>
    </Router>
  );
}
