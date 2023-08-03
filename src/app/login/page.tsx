"use client";
import React, { useState,useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import{toast} from 'react-hot-toast'

const LoginPage = () => {
  const router=useRouter()
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  

  const onLogin = async () => {
    try {
      setIsLoading(true)
      const res = await axios.post("/api/users/login", user);
      console.log("Login success", res.data);
      toast.success("Login success");
      router.push("/profile");


    } catch (error:any) {
      console.log('Login failed', error.message)
      toast.error(error.message)
    } finally {
      setIsLoading(false)
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false)
    } else {
      setButtonDisabled(true);
      
    }
  },[user])

  return (
    <div
      className='flex flex-col items-center 
    justify-center min-h-screen py-2'>
      <h1 className='text-center text-white'>{isLoading?'Processing':'Login' }</h1>
      <hr />

      <label htmlFor='username'>email</label>
      <input
        className='p-2 border border-gray-300 rounded-lg
        mb-4 focus:outline-none focus:border -gray-600'
        id='username'
        type='text'
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder='email'
      />
      <label htmlFor='username'>password</label>
      <input
        className='p-2 border border-gray-300 rounded-lg
        mb-4 focus:outline-none focus:border -gray-600'
        id='username'
        type='password'
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder='password'
      />
      <button
        onClick={onLogin}
        className='p-2 border border-gray-300
      rounded-lg mb-4 focus:outline-none 
      focus:border-gray-600 text-white'>
        Log in
      </button>

      <Link className='text-white' href='/signup'>
        Sign up
      </Link>
    </div>
  );
};

export default LoginPage;
