import React from "react";
import "../Assets/Styles/Login.css";
import SignupForm from "../components/SignupForm";
function Signup() {
  return (
    <div className="SignUpLayout">
      <h1 className="animate-charcter">SS Travels Ticket Booking</h1>
      <SignupForm />
    </div>
  );
}

export default Signup;
