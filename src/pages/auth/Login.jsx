import React from "react";
import Form from "./component/form/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../config";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    try {
      const response = await axios.post(
        `${baseUrl}/login`, 
        data
      );
      if (response.status === 200) {
        localStorage.setItem('token', response.data.token)
        navigate("/");
      } else {
        alert("Login Failed.");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };

  return <Form type="Login" onSubmit={handleLogin} />;
};

export default Login;
