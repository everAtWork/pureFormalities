import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import SignupForm from "./components/SignupForm/SignupForm";

export default function App() {
  return (
    <div className="container-fluid">
      <div className="App">
        <h2>title</h2>
        <SignupForm />
      </div>
    </div>
  );
}
