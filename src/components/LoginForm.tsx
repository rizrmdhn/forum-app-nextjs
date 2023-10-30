'use client'

import useLocale from '@/hooks/useLocale'
import useLogin from '@/hooks/useLogin'
import React from 'react'

export default function LoginForm() {
  const { textLogin, textEmail, textPassword } = useLocale()

  const [email, onChangeEmail, password, onChangePassword, onSubmit] = useLogin()
  return (
    <form className='input-login container flex flex-col items-center justify-center gap-4' onSubmit={onSubmit}>
      <div className='email-container w-72'>
        <input
          data-testid='email'
          data-cy='email'
          type='text'
          placeholder={textEmail}
          className='w-full border-2 border-black bg-transparent px-2 py-2 text-black duration-200 focus:outline-none dark:border-white dark:text-white dark:placeholder:text-white'
          value={email}
          onChange={onChangeEmail}
        />
      </div>
      <div className='password-container w-72'>
        <input
          data-testid='password'
          data-cy='password'
          type='password'
          placeholder={textPassword}
          className='w-full border-2 border-black bg-transparent px-2 py-2 text-black duration-200 focus:outline-none dark:border-white dark:text-white dark:placeholder:text-white'
          value={password}
          onChange={onChangePassword}
        />
      </div>
      <button
        data-testid='login-btn'
        data-cy='login-btn'
        type='submit'
        className='login-btn flex w-72 flex-auto items-center justify-center gap-3 border-2 border-black bg-black px-2 py-2 font-bold text-white duration-200
            hover:bg-white hover:text-black dark:bg-white dark:text-black
            dark:hover:border-2 dark:hover:border-white dark:hover:bg-black dark:hover:text-white 
            '
      >
        {textLogin}
      </button>
    </form>
  )
}
