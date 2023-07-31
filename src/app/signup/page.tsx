'use client';
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import axios from 'axios'


const SignupPage = () => {
  
  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',

  })
  const onSignup = async () => {
    console.log('signed up withSuccess')
  }
  return (
    <div
      className='flex flex-col items-center 
    justify-center min-h-screen py-2'>
      <h1 className='text-center text-blue-500'>Sign Up Page</h1>
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
        Sign up
      </button>

      <Link className='text-white' href='/signIn'>
        Sign in
      </Link>
    </div>
  );
}

export default SignupPage;