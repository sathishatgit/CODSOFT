import React from "react";
import { useDispatch } from "react-redux";
import { loginLoading } from "../redux/action";
import { Form, Input, Button, message } from "antd";
import "../Assets/Styles/Login.css";
import { useNavigate } from "react-router-dom";
function LoginForm() {
  const navi = useNavigate();
  const dispatch = useDispatch();
  const submit = async (values) => {
    console.log(values);
    dispatch(loginLoading(values));
  };
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
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password",
            },
          ]}
        >
          <Input placeholder="Enter Your Password" type="password" />
        </Form.Item>

        <Form.Item>
          <div className="loginButton">
            <Button className="formHead" htmlType="submit">
              Sign Up
            </Button>
          </div>
        </Form.Item>
        <p className="lognavi" onClick={() => navi("/signup")}>
          You Don't Have Account?
        </p>
      </Form>
    </div>
  );
}

export default LoginForm;
