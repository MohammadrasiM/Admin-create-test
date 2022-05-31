import React, { useState, useEffect } from "react";
import { InputNumber, Button } from "antd";
import { Card, Row, Col } from "antd";

export default function Thelist({ data, warning, search }) {
  console.log(data, "data");

  function Delete(id) {
    const requestOptions = {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIwOTIxNDkxNTkwNSIsImF1dGgiOnsiYXV0aG9yaXR5IjoiUk9MRV9BRE1JTiJ9LCJpYXQiOjE2NTM5OTUwMzYsImV4cCI6MTY1NDU5OTgzNn0.qEol-af6NZXkyuYY3iNFohNAfAzGopgSmWcY0_FGQUs",
      },
    };

    fetch(
      `http://185.239.106.26:8080/api/admin/payLink/delete/${id}`,
      requestOptions
    )
      .then((response) => response.json(response))
      .then((data) => {
        if (data.status == "ok") {
          warning("deleted");
          search();
        }
        //     if (data.data.length > 0) {
        //       setResponse(data.data);
        //       Success("there you go");
        //     } else {
        //       warning("No data Available");
        //     }
        //   } else {
        //     warning("something went wrong");
        //   }
      });
  }
  return (
    <>
      <Card style={{ marginTop: "2%" }} title="لیست لینک ها" bordered={false}>
        {data?.length > 0 ? (
          <>
            {" "}
            <Row>
              <Col span={4}> </Col>
              <Col span={5}>مقدار</Col>
              <Col span={5}>کود</Col>
              <Col span={5}> نام خانوادگی</Col>
              <Col span={5}>نام</Col>
            </Row>
            {data?.map((d) => (
              <Row style={{ margin: "5px" }}>
                <Col span={4}>
                  <Button danger size="small" onClick={() => Delete(d?.id)}>
                    حذف
                  </Button>
                </Col>
                <Col span={5}>{d?.amount}</Col>
                <Col span={5}>{d?.code}</Col>
                <Col span={5}> {d?.student?.last_name}</Col>
                <Col span={5}> {d?.student?.name}</Col>
              </Row>
            ))}
          </>
        ) : (
          " اطلاعاتی موجود نیست"
        )}
      </Card>
    </>
  );
}
