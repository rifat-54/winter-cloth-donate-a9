import React, { useContext, useRef, useState } from "react";
import { authContex } from "../Routes/AuthProvider";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoIosEye } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {
  const { handleLogin,handleForgetPassword, user, setUser, handleGoogleLogin } =
    useContext(authContex);
  const location = useLocation();
  // console.log(location)

  const [toggle, setToggle] = useState(false);

  const [error, setError] = useState("");
  const emailRef = useRef();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    setError("");
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);
    handleLogin(email, password)
      .then((res) => {
        if (location?.state) {
          navigate("/details", { state: location.state });
        } else {
          navigate("/");
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handeGoogle = () => {
    handleGoogleLogin().then((res) => {
      if (location?.state) {
        navigate("/details", { state: location.state });
      } else {
        navigate("/");
      }
    });
  };

  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  const handleForget = () => {
    const email=emailRef.current.value;
    // console.log(email);
    if(!email)
    {
        toast.error('set a valid email');
        return;
    }

    handleForgetPassword(email)
    .then(res=>{
        toast.success('sent a mail please check your email')
    })

  };

  return (
    <div className="card bg-base-100 pb-14 lg:max-w-xl mx-auto lg:p-14  shrink-0 shadow-2xl">
      <h1 className="text-3xl text-center font-bold">Login now!</h1>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            ref={emailRef}
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type={toggle ? "text" : "password"}
            placeholder="password"
            className="input input-bordered"
            required
          />
          <button className="absolute top-14 right-2" onClick={handleToggle}>
            {toggle ? <IoIosEye /> : <IoEyeOffOutline />}{" "}
          </button>

          <label onClick={handleForget} className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
          <label className="label">
            {error && <p className="text-red-600">{error.split(":")[1]}</p>}
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <div>
          <p>
            New to the website? please{" "}
            <Link to={"/register"} className="text-red-500">
              Register
            </Link>{" "}
          </p>
        </div>
      </form>

      <div className="mx-auto  w-11/12">
        <button onClick={handeGoogle} className="btn btn-neutral w-full mt-6">
          {" "}
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
