'use client'

import useLocale from '@/hooks/useLocale'
import { useRouter } from 'next/navigation'
import React from 'react'

type HadAnAccountProps = {
  register?: boolean
}

export default function HadAnAccount({ register }: HadAnAccountProps) {
  const router = useRouter()

  const { textNeedAccount, textRegisterHere, textHaveAccount, textLogin } = useLocale()

  return (
    <div className='had-an-account flex-rows container flex items-center justify-center'>
      {register ? (
        <p className='text-xs font-normal text-black duration-200 dark:text-white 2xl:text-xl'>
          {textHaveAccount}{' '}
          <a
            onClick={() => router.push('/login')}
            className='cursor-pointer text-xs font-normal underline duration-200 hover:font-bold dark:text-white 2xl:text-xl'
          >
            {textLogin}
          </a>
        </p>
      ) : (
        <p
          data-testid='need-account'
          className='text-xs font-normal text-black duration-200 dark:text-white 2xl:text-xl'
        >
          {textNeedAccount}{' '}
          <a
            data-testid='register-here'
            onClick={() => router.push('/register')}
            className='cursor-pointer text-xs font-normal underline duration-200 hover:font-bold dark:text-white 2xl:text-xl'
          >
            {textRegisterHere}
          </a>
        </p>
      )}
    </div>
  )
}
