import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import Swal from 'sweetalert2';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async () => {
      if (username === 'ServeRichTest' && password === '123') {
        sessionStorage.setItem('username', username);
        await Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Password is correct!',
            showConfirmButton: false,
            timer: 2000
          })
          navigate('/home'); }
      else {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Wrong Password!'
          })
      }
    };
  return (
    <div className='FormLogin'>
    <Form className="login-form">
    <p className='welcome'>Welcome</p>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} 
        placeholder="Username" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="text" htmlType="submit" className="login-form-button" onClick={handleLogin}>
          Log in
        </Button>
      </Form.Item>
    </Form>
    </div>
  );
};
export default Login;