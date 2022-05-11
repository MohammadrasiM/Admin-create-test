import React, { useState, useEffect } from 'react';
import './LoginCss.css'
import { Card } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import Login from "./loginFunction"
import { useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import {warningNotify,SuccessNotify} from '../toasts/toasts'
export default function Loginer( ){
const[name,setName]=useState("")
const[password,setPassword]=useState("")

const navigate=useNavigate()

  







return ( <div className="former">   <Card title="Login"  style={{ width:"100%" ,background:'transparent'}}><div style={{display:'flex',justifyContent: "center"}}> <Form
style={{    margin: "14px",
    background: "#ececec",
    borderRadius: "20px",
    padding: "24px",}}
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    initialValues={{
      remember: true,
    }}

    autoComplete="off"
  > 
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    
    >
      <Input  value={name} onChange={(e)=>{setName(e.target.value)}}  />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password
 value={password} onChange={(e)=>{setPassword(e.target.value)}}
    //    visibilityToggle={false}
       />
    </Form.Item>

    {/* <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
      >
      <Checkbox>Remember me</Checkbox>
    </Form.Item> */}

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
      style={{marginTop:"2%"}}
    >
      <Button type="primary" htmlType="submit" onClick={()=>Login(name,password,navigate,warningNotify,SuccessNotify)}>
        Submit
      </Button>
    </Form.Item>
   
  </Form>
  </div> 
  </Card>

  </div>)


}