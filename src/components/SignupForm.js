import React from "react";
import axios from "axios";
import { Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import "../Assets/Styles/Login.css";
function SignupForm() {
  const submit = async (values) => {
    console.log(values);
    try {
      let config = {
        method: "post",
        url: "http://localhost:5000/users/signup",
        // headers: {},
        data: values,
      };
      const userData = await axios(config);
      if (userData.status === 200) {
        navi("/");

        message.success("User Profile Created SucessFully");
      }
      console.log(userData);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const navi = useNavigate();
  return (
    <div className="loginFormLayout">
      <Form onFinish={submit}>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Email",
            },
            {
              pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
              message: "Invalid email format",
            },
          ]}
        >
          <Input placeholder="Enter Your Email" />
        </Form.Item>

        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your Name",
            },
          ]}
        >
          <Input placeholder="Enter Your Name" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please Enter your Password",
            },
          ]}
        >
          <Input placeholder="Enter Your Password" type="password" />
        </Form.Item>

        <Form.Item
          name="mobilenumber"
          rules={[
            {
              required: true,
              message: "Please input your Mobile Number",
            },
            {
              pattern: "[0-9]{10}",
              message: "Please enter a valid 10-digit mobile number",
            },
          ]}
        >
          <Input placeholder="Enter Your Mobile Number" type="tel" />
        </Form.Item>

        <Form.Item
          name="city"
          rules={[
            {
              required: true,
              message: "Please input your Lived City",
            },
          ]}
        >
          <Input placeholder="Enter Your Lived City" />
        </Form.Item>

        <Form.Item>
          <div className="loginButton">
            <Button className="formHead" htmlType="submit">
              Sign Up
            </Button>
          </div>
        </Form.Item>
        <p className="lognavi" onClick={() => navi("/")}>
          Already Have Account?
        </p>
      </Form>
    </div>
  );
}

export default SignupForm;
