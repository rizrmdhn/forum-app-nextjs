'use client'
import useGetLocalTheme from '@/hooks/useGetLocalTheme'
import useGetLocale from '@/hooks/useGetLocale'
import useLocale from '@/hooks/useLocale'
import useRegister from '@/hooks/useRegister'
import useSelect from '@/hooks/useSelect'
import { asyncSetIsPreload } from '@/states/isPreload/action'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function RegisterPage() {
  const authUser = useSelect('authUser')

  const { textRegister, textName, textEmail, textPassword, textHaveAccount, textLogin } = useLocale()

  const [setLocaleData] = useGetLocale()
  const [setLocalTheme] = useGetLocalTheme()
  const [name, onChangeName, email, onChangeEmail, password, onChangePassword, onSubmit] = useRegister()

  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncSetIsPreload())

    if (authUser) {
      router.push('/thread')
    }

    setLocaleData()
    setLocalTheme()
  }, [dispatch])

  return (
    <div className='register-page container'>
      <div className='flex h-screen w-full flex-col items-center justify-center gap-8 bg-light duration-200 dark:bg-dark'>
        <div className='text-title text-4xl font-normal duration-200 dark:text-white'>REGISTER</div>
        <form className='input-register container flex flex-col items-center justify-center gap-4' onSubmit={onSubmit}>
          <div className='name-container w-72'>
            <input
              type='text'
              placeholder={textName}
              className='w-full border-2 border-black bg-transparent px-2 py-2 text-black duration-200 focus:outline-none dark:text-white'
              value={name}
              onChange={onChangeName}
            />
          </div>
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
            className='register-btn flex w-72 flex-auto items-center justify-center gap-3 bg-black px-2 py-2 text-white
  duration-200 hover:bg-white hover:text-black hover:border-dark
    dark:bg-white dark:text-black dark:hover:border-white dark:hover:bg-black dark:hover:text-white
    border-2        
    '
          >
            {textRegister}
          </button>
        </form>
        <div className='had-an-account flex-rows container flex items-center justify-center'>
          <p className='text-xs font-normal text-black duration-200 dark:text-white'>
            {textHaveAccount}{' '}
            <a href='/login' className='text-xs font-normal underline duration-200 dark:text-white hover:font-bold'>
              {textLogin}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
