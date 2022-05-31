import React, { useState, useEffect } from "react";
import { InputNumber, Button } from "antd";
import { Card, Row, Col } from "antd";
import Thelist from "./Thelist";
export default function AdminGet({ Success, warning }) {
  const [response, setResponse] = useState([]);
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [userId, setUserId] = useState("612c61335975b03ac35d99ea");
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwOTIxNDkxNTkwNSIsImF1dGgiOnsiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9LCJpYXQiOjE2NTM5OTUwMzYsImV4cCI6MTY1NDU5OTgzNn0.qEol-af6NZXkyuYY3iNFohNAfAzGopgSmWcY0_FGQUs",
    },
  };

  function search() {
    fetch(
      `http://185.239.106.26:8080/api/admin/payLink/links?used=false&expired=false&userId=612c61335975b03ac35d99ea&minValue=${min}&maxValue=${max}`,
      requestOptions
    )
      .then((response) => response.json(response))
      .then((data) => {
        console.log(data);
        if (data?.status == "ok") {
          if (data?.data?.length > 0) {
            setResponse(data?.data);
            Success("there you go");
          } else {
            warning("No data Available");
          }
        } else {
          warning("something went wrong");
        }
      });
  }
  return (
    <>
      <Card
        style={{ marginTop: "2%" }}
        title="فیلتر لیست لینک ها "
        bordered={false}
      >
        <Row>
          <Col span={10}>
            <InputNumber
              style={{ width: "100%" }}
              placeholder={"حداکثر مبلغ"}
              value={max}
              onChange={(e) => setMax(e)}
            />
          </Col>
          <Col span={3}></Col>
          <Col span={10}>
            <InputNumber
              style={{ width: "100%" }}
              placeholder={"حداقل مبلغ"}
              value={min}
              onChange={(e) => setMin(e)}
            />
          </Col>

          <Button
            disabled={min?.length == 0 || max?.length == 0}
            type="primary"
            onClick={() => search()}
            style={{ marginTop: "2%" }}
          >
            جستجو
          </Button>
        </Row>
      </Card>
      <Thelist data={response} warning={warning} search={search} />
    </>
  );
}
