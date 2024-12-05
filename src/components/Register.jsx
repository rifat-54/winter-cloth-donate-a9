import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContex } from "../Routes/AuthProvider";
import { IoEyeOffOutline } from "react-icons/io5";
import { IoIosEye } from "react-icons/io";

const Register = () => {
  const { handleLogin,updateUser, handleRegister, handleGoogleLogin, user, setUser } =
    useContext(authContex)
    const navigate=useNavigate()
    const [error,setError]=useState('')
    const[toggle,setToggle]=useState(false)
    const[toggle1,setToggle1]=useState(false)

    const handleGoogle=()=>{
        handleGoogleLogin()
        .then(res=>{
            navigate('/')
        })
        .catch(error=>{
            setError(error.message)
        })
    }

  const handleSubmit = (e) => {
    setError('')
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conpassword = e.target.conpassword.value;
    const name = e.target.name.value;
    const photourl = e.target.photourl.value;
    // console.log(email, password, name, photourl, conpassword);
    
    if(password.length<6)
    {
      setError('password must be at least 6 characters')
      return;
    }

    if(password!==conpassword)
    {
        setError('password does not match   ' )
        return;
    }

    if(!/[a-z]/.test(password)){
      setError('password should be at least one small character')
      return;
    }
    if(!/[A-Z]/.test(password))
    {
      setError('password should be at least one uppercase ')
      return;
    }
    
    
    handleRegister(email,password)
    .then(result=>{

      updateUser(name,photourl)
      navigate('/')

    })
    .catch(error=>{
      setError('Email already used try with new');
    })
  };

  const handleToggle=(e)=>{
    e.preventDefault()
    setToggle(!toggle);

  }
  const handleToggle1=(e)=>{
    e.preventDefault()
    setToggle1(!toggle1);

  }

  return (
    <div className="card bg-base-100  lg:max-w-xl mx-auto pb-14 lg:p-14  shrink-0 shadow-2xl">
      <h1 className="text-3xl text-center font-bold">Register now!</h1>
      <form onSubmit={handleSubmit} className="card-body ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            name="photourl"
            type="text"
            placeholder="Photo URL"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
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
            type={toggle?'text':'password'}
            placeholder="password"
            className="input input-bordered"
            required
          />
          <button className='absolute top-14 right-2' onClick={handleToggle}>{
            toggle?<IoIosEye/>: <IoEyeOffOutline />
          } </button>
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input
            name="conpassword"
            type={toggle1?'text':'password'}
            placeholder="Confirm password"
            className="input input-bordered"
            required
          />
            <button className='absolute top-14 right-2' onClick={handleToggle1}>{
            toggle1?<IoIosEye/>: <IoEyeOffOutline />
          } </button>
        </div>
        {
          error&&<p className="text-red-600">{error}</p>
        }
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
        <div>
        <p className="text-right  lg:mr-5">
          Already have an account? please{" "}
          <Link className="text-red-500" to={"/login"}>
            Login
          </Link>{" "}
        </p>
      </div>
      </form>
      
      <div className="mx-auto  w-11/12">
        <button onClick={handleGoogle} className="btn w-full btn-neutral mt-6">
          {" "}
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Register;