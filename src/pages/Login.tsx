import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";

import loginImg from "../assets/login3.jpg";
import api from "../axios/API";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
  email: Yup.string().required("Email required"),
  password: Yup.string().required("Password required"),
});

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [cookies, setCookie] = useCookies<string>(["token"]);
  const [token] = useState<string>("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const LoginHandle = async () => {
    const user = {
      email: formik.values.email,
      password: formik.values.password,
    };

    if (user.email !== "" && user.password !== "") {
      try {
        const response = await api.Login(user.email, user.password);

        console.log(response.data);

        setCookie("token", response.data.data.token, { path: "/" });

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard");
      } catch (error) {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: "Pastikan Email & Password Benar !",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Check your email or password again!",
      });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full m-10">
      <div className="hidden sm:block">
        <img className="w-full h-full object-cover" src={loginImg} alt="" />
      </div>

      <div className="bg-White-800 flex flex-col justify-center">
        <form className="max-w-[400px] w-full mx-auto rounded-lg bg-teal-300 p-8 px-8">
          <h2 className="text-4xl text-black font-bold text-center">Login</h2>
          <div className="flex flex-col text-black py-2">
            <label>Email</label>
            <input
              value={formik.values.email}
              onChange={formik.handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline ${formik.values.email === "" ? "bg-white" : ""}`}
              id="email"
              type="text"
              placeholder="Email"
            />{" "}
          </div>
          <div className="flex flex-col text-black py-2">
            <label>Password</label>
            <input
              value={formik.values.password}
              onChange={formik.handleChange}
              className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 bg-gray-200 leading-tight focus:outline-none focus:shadow-outline ${formik.values.password === "" ? "bg-white" : ""}`}
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="********"
            />
            <a type="button" className="absolute right-2 mt-3 text-gray-500" onClick={togglePasswordVisibility}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </a>
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input className="mr-2 bg-white" type="checkbox" /> Remember Me
            </p>
            <p>Forgot Password</p>
          </div>

          <div className="flex items-center justify-center">
            <button onClick={LoginHandle} className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
    // <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center">
    //   <div className="bg-white p-6 rounded-md shadow-md">
    //     <Input id="username" name="username" value={username} label="Username" onChange={(e) => setUsername(e.target.value)} />
    //     <Input id="password" name="password" value={password} label="Password" onChange={(e) => setPassword(e.target.value)} />
    //     <Button id="login" label="Login" onClick={() => handleLogin()} />
    //   </div>
    // </div>
  );
};

export default Login;
