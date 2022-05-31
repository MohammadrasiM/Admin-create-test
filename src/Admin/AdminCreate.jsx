import React, { useState } from "react";
import { InputNumber, Button } from "antd";
import { Card, Row, Col } from "antd";
import { warningNotify, Success, warning } from "../toasts/toasts";
import AdminGet from "./adminGet";
export default function AdminCreate() {
  const [response, setResponse] = useState();
  const [amount, setAmount] = useState("");
  const [userId, setUserId] = useState("612c61335975b03ac35d99ea");
  const requestOptions = {
    // mode: "no-cors",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwOTIxNDkxNTkwNSIsImF1dGgiOnsiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9LCJpYXQiOjE2NTM5OTUwMzYsImV4cCI6MTY1NDU5OTgzNn0.qEol-af6NZXkyuYY3iNFohNAfAzGopgSmWcY0_FGQUs",
    },
    body: JSON.stringify({
      amount: amount,
      userId: userId,
    }),
  };
  function create() {
    fetch("http://185.239.106.26:8080/api/admin/payLink/store", requestOptions)
      .then((response) => response.json(response))
      .then((data) => {
        if (data.code) {
          localStorage.setItem("code", JSON.stringify(data?.code));
          Success(
            `code:${data?.code} successfully stored in your localstorage `
          );
        } else {
          //   warningNotify();
        }
      });
  }

  const onChange = (value) => {
    setAmount(value);
  };
  return (
    <>
      <Card bordered={true}>ایجاد لینک پرداخت</Card>
      <Card style={{ marginTop: "1%" }} title="مبلغ" bordered={false}>
        <Row>
          <Col span={6}>
            <Button type="primary" onClick={() => create()}>
              ساخت
            </Button>
          </Col>
          <Col span={6}></Col>
          <Col span={12}>
            <InputNumber
              style={{ width: "100%" }}
              placeholder={"مبلغ"}
              value={amount}
              onChange={onChange}
            />
          </Col>
        </Row>
      </Card>
      <AdminGet warning={warning} Success={Success} />
    </>
  );
}
