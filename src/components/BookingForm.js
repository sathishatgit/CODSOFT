import React, { useState } from "react";
import "../Assets/Styles/Login.css";
import { useDispatch } from "react-redux";
import { Form, Button, Select, DatePicker, message, Modal } from "antd";
import { initial } from "../redux/storeData";
import { BookingLoading } from "../redux/action";
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const dispatch = useDispatch();
  const navi = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const bookingHistory = initial.login.succes.journey;
  console.log(bookingHistory);
  const submit = (values) => {
    console.log(initial.login.succes);
    console.log(values);
    values.Date = `${values.Date.$D}/${values.Date.$M + 1}/${values.Date.$y}`;
    dispatch(BookingLoading(values));
  };

  const option = [
    {
      value: "Coimbatore",
      label: "Coimbatore",
    },
    {
      value: "Chennai",
      label: "Chennai",
    },
    {
      value: "Trichy",
      label: "Trichy",
    },
  ];
  const seat = [
    {
      value: 1,
      label: "One",
    },
    {
      value: 2,
      label: "Two",
    },
    {
      value: 3,
      label: "Three",
    },
    {
      value: 4,
      label: "Four",
    },
  ];
  return (
    <div className="loginFormLayout">
      <Form onFinish={submit}>
        <Form.Item>
          <p className="formHeading">TICKET BOOKING</p>
        </Form.Item>
        <Form.Item
          name="From"
          rules={[
            {
              required: true,
              message: "Please input your From Station",
            },
          ]}
        >
          <Select
            placeholder="From"
            options={[
              {
                value: "Nagappatinam",
                label: "Nagappatinam",
              },
            ]}
          />
        </Form.Item>
        <Form.Item
          name="To"
          rules={[
            {
              required: true,
              message: "Please input your To Station",
            },
          ]}
        >
          <Select placeholder="To" options={option} />
        </Form.Item>
        <Form.Item
          name="Seats"
          rules={[
            {
              required: true,
              message: "Please input your Num Of Seats",
            },
          ]}
        >
          <Select placeholder="Enter The Num Of Seats" options={seat} />
        </Form.Item>
        <Form.Item
          name="Date"
          rules={[
            {
              required: true,
              message: "Please input your Journey Date",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>
        <Form.Item>
          <div className="loginButton">
            <Button className="formHead" htmlType="submit">
              Book
            </Button>
          </div>
        </Form.Item>
        <Form.Item>
          <p className="lognavi" onClick={() => setOpenModal(true)}>
            BOOKING HISTORY
          </p>
        </Form.Item>
        <Form.Item>
          <p className="lognavi" onClick={() => navi("/")}>
            PROFILE MENU
          </p>
        </Form.Item>
      </Form>
      <Modal
        title="User Booking History"
        open={openModal}
        onCancel={() => setOpenModal(false)}
        onOk={() => setOpenModal(false)}
      >
        {bookingHistory.map((data) => (
          <p className="historyTag" key={data._id}>
            Route:{data.route}
            <br />
            Date: {data.date}
            <br />
            SeatsBooked:{data.seatsBooked}
          </p>
        ))}
      </Modal>
    </div>
  );
}

export default BookingForm;
