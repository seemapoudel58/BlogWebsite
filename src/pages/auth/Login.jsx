import React from "react";
import Form from "./component/form/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    try {
      const response = await axios.post(
        "https://react30.onrender.com/api/user/login",
        data
      );
      if (response.status === 200) {
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
