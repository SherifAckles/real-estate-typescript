"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from 'react-hot-toast'

const SignupPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSignup = async () => {
    try {
      setIsLoading(true)
    const res= await axios.post('/api/users/signup',user)
    console.log('Sign up success', res.data)
router.push('/login')
      
    } catch (error: any) {
      console.log('Sign up failed',error.message);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div
      className='flex flex-col items-center 
    justify-center min-h-screen py-2'>
      <h1 className='text-center text-blue-500'>
        {isLoading ? "Loading..." : "Sign up"}
      </h1>
      <hr />
      <label htmlFor='username'>username</label>
      <input
        className='p-2 border border-gray-300 rounded-lg
        mb-4 focus:outline-none focus:border -gray-600'
        id='username'
        type='text'
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder='user name'
      />
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
        onClick={onSignup}
        className='p-2 border border-gray-300
      rounded-lg mb-4 focus:outline-none 
      focus:border-gray-600 text-white'>
        {buttonDisabled ? "No signup" : "Signup"}
      </button>

      <Link className='text-white' href='/login'>
        Sign in
      </Link>
    </div>
  );
};

export default SignupPage;
