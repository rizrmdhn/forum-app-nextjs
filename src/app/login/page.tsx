'use client'
import useGetLocalTheme from '@/hooks/useGetLocalTheme'
import useGetLocale from '@/hooks/useGetLocale'
import useLocale from '@/hooks/useLocale'
import useLogin from '@/hooks/useLogin'
import useSelect from '@/hooks/useSelect'
import { asyncSetIsPreload } from '@/states/isPreload/action'
import { setLocaleActionCreator } from '@/states/locale/action'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function LoginPage() {
  const authUser = useSelect('authUser')

  const { textLogin, textEmail, textPassword, textNeedAccount, textRegisterHere } = useLocale()

  const [email, onChangeEmail, password, onChangePassword, onSubmit] = useLogin()

  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncSetIsPreload())

    if (authUser) {
      router.push('/thread')
    }
  }, [dispatch])

  return (
    <div className='login-page container'>
      <div className='flex h-screen w-full flex-col items-center justify-center gap-8 bg-light duration-200  dark:bg-dark'>
        <div className='text-title text-4xl font-normal duration-200 dark:text-white'>LOGIN</div>
        <form className='input-login container flex flex-col items-center justify-center gap-4' onSubmit={onSubmit}>
          <div className='email-container w-72'>
            <input
              type='text'
              placeholder={textEmail}
              className='w-full border-2 border-black bg-transparent px-2 py-2 text-black duration-200 focus:outline-none dark:text-white'
              value={email}
              onChange={onChangeEmail}
            />
          </div>
          <div className='password-container w-72'>
            <input
              type='password'
              placeholder={textPassword}
              className='w-full border-2 border-black bg-transparent px-2 py-2 text-black duration-200 focus:outline-none dark:text-white'
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <button
            type='submit'
            className='login-btn flex w-72 flex-auto items-center justify-center gap-3 border-2 border-black bg-black px-2 py-2 font-bold text-white duration-200
            hover:bg-white hover:text-black dark:bg-white dark:text-black
            dark:hover:border-2 dark:hover:border-white dark:hover:bg-black dark:hover:text-white 
            '
          >
            {textLogin}
          </button>
        </form>
        <div className='had-an-account flex-rows container flex items-center justify-center'>
          <p className='text-xs font-normal text-black duration-200 dark:text-white'>
            {textNeedAccount}{' '}
            <a href='/register' className='text-xs font-normal underline duration-200 hover:font-bold dark:text-white'>
              {textRegisterHere}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
