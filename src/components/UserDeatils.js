import React from "react";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { initial } from "../redux/storeData";
import "../Assets/Styles/Login.css";
function UserDeatils() {
  const userInfo = initial.login.succes;
  const navi = useNavigate();
  return (
    <div className="loginFormLayout">
      <Form>
        <Form.Item>
          <p className="formHeading">USER PROFILE</p>
        </Form.Item>

        <Form.Item label="User's Name">{userInfo.Name}</Form.Item>
        <Form.Item label="User's Email">{userInfo.Email}</Form.Item>
        <Form.Item label="User's Phone Number">
          {userInfo.MobileNumber}
        </Form.Item>
        <Form.Item label="User's Current City">{userInfo.City}</Form.Item>

        <Form.Item>
          <div className="loginButton">
            <Button className="formHead" onClick={() => navi("/booking")}>
              Ticket Booking
            </Button>
          </div>
        </Form.Item>
        <p
          className="lognavi"
          onClick={() => {
            localStorage.removeItem("Token");
            window.location.href = "/";
          }}
        >
          LOG Out
        </p>
      </Form>
    </div>
  );
}

export default UserDeatils;
