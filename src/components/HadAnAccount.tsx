'use client'

import useLocale from '@/hooks/useLocale'
import React from 'react'

export default function HadAnAccount() {
  const { textNeedAccount, textRegisterHere } = useLocale()
  return (
    <div className='had-an-account flex-rows container flex items-center justify-center'>
      <p data-testid='need-account' className='text-xs font-normal text-black duration-200 dark:text-white 2xl:text-xl'>
        {textNeedAccount}{' '}
        <a
          data-testid='register-here'
          href='/register'
          className='text-xs font-normal underline duration-200 hover:font-bold dark:text-white 2xl:text-xl'
        >
          {textRegisterHere}
        </a>
      </p>
      L
    </div>
  )
}
