"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {
    console.log("signed in with success");
  };
  return (
    <div
      className='flex flex-col items-center 
    justify-center min-h-screen py-2'>
      <h1 className='text-center text-blue-500'>Sign in Page</h1>
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

      <Link href='/signUp'>Sign up</Link>
    </div>
  );
};

export default LoginPage;
