import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import Input from "../components/Input";
import Button from "../components/Button";
import { AuthContext } from "../context/AuthContext";
import loginImg from "../assets/login3.jpg";
// import fake credentials
import { data } from "../dummy/fakeapi.json";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [cookies, setCookie] = useCookies<string>();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string | number>("");

  const handleLogin = () => {
    // if (username !== "" && password !== "") {
    //   login(username, password);
    //   navigate("/home");
    // } else {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Login Failed",
    //     text: "Fill your username and password",
    //   });
    // }

    if (username === data[0].username && password == data[0].password) {
      setCookie("username", username, { path: "/" });
      setCookie("status", data[0].status, { path: "/" });
      navigate("/Dashboard", {
        state: {
          username: username,
        },
      });
    } else if (username === data[1].username && password == data[1].password) {
      setCookie("username", username, { path: "/" });
      setCookie("status", data[1].status, { path: "/" });
      navigate("/home", {
        state: {
          username: username,
        },
      });
    } else if (username === data[2].username && password == data[2].password) {
      setCookie("username", username, { path: "/" });
      setCookie("status", data[2].status, { path: "/" });
      navigate("/home", {
        state: {
          username: username,
        },
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: "Fill your username and password",
      });
    }
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
            <label>Username</label>
            <Input id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="flex flex-col text-black py-2">
            <label>Password</label>
            <Input id="password" name="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="flex justify-between text-gray-400 py-2">
            <p className="flex items-center">
              <input className="mr-2 bg-white" type="checkbox" /> Remember Me
            </p>
            <p>Forgot Password</p>
          </div>
          <Button id="login" label="Login" onClick={() => handleLogin()} />
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
