'use client'

import useLocale from '@/hooks/useLocale'
import useRegister from '@/hooks/useRegister'
import React from 'react'

export default function RegisterForm() {
  const { textRegister, textName, textEmail, textPassword, textHaveAccount, textLogin } = useLocale()

  const [name, onChangeName, email, onChangeEmail, password, onChangePassword, onSubmit] = useRegister()

  return (
    <form className='input-register container flex flex-col items-center justify-center gap-4' onSubmit={onSubmit}>
      <div className='name-container w-72'>
        <input
          type='text'
          placeholder={textName}
          className='w-full border-2 border-black bg-transparent px-2 py-2 text-black duration-200 focus:outline-none dark:border-white dark:text-white dark:placeholder:text-white'
          value={name}
          onChange={onChangeName}
        />
      </div>
      <div className='email-container w-72'>
        <input
          type='text'
          placeholder={textEmail}
          className='w-full border-2 border-black bg-transparent px-2 py-2 text-black duration-200 focus:outline-none dark:border-white dark:text-white dark:placeholder:text-white'
          value={email}
          onChange={onChangeEmail}
        />
      </div>
      <div className='password-container w-72'>
        <input
          type='password'
          placeholder={textPassword}
          className='w-full border-2 border-black bg-transparent px-2 py-2 text-black duration-200 focus:outline-none dark:border-white dark:text-white dark:placeholder:text-white'
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <button
        type='submit'
        className='register-btn flex w-72 flex-auto items-center justify-center gap-3 border-2 bg-black px-2 py-2
  text-white duration-200 hover:border-dark hover:bg-white
    hover:text-black dark:bg-white dark:text-black dark:hover:border-white dark:hover:bg-black
    dark:hover:text-white        
    '
      >
        {textRegister}
      </button>
    </form>
  )
}
