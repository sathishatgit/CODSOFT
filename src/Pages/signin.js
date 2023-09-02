import React from "react";
import "../Assets/Styles/Login.css";
import LoginForm from "../components/LoginForm";
function Signin() {
  return (
    <div className="SignUpLayout">
      <h1 className="animate-charcter">SS Travels Ticket Booking</h1>
      <LoginForm />
    </div>
  );
}

export default Signin;
