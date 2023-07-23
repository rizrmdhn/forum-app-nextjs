'use client'
import useLogin from '@/hooks/useLogin'
import useSelect from '@/hooks/useSelect'
import { asyncSetIsPreload } from '@/states/isPreload/action'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function LoginPage() {
  const authUser = useSelect('authUser')

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
      <div className='flex h-screen w-full flex-col items-center justify-center gap-8 bg-light'>
        <div className='text-title text-4xl font-normal'>LOGIN</div>
        <form className='input-login container flex flex-col items-center justify-center gap-4' onSubmit={onSubmit}>
          <div className='email-container w-72'>
            <input
              type='text'
              placeholder='Email'
              className='w-full border-2 border-black bg-transparent px-2 py-2 text-black focus:outline-none'
              value={email}
              onChange={onChangeEmail}
            />
          </div>
          <div className='password-container w-72'>
            <input
              type='password'
              placeholder='Password'
              className='w-full border-2 border-black bg-transparent px-2 py-2 text-black focus:outline-none'
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <button
            type='submit'
            className='login-btn flex w-72 flex-auto items-center justify-center gap-3 bg-black px-2 py-2 text-white'
          >
            Login
          </button>
        </form>
        <div className='had-an-account flex-rows container flex items-center justify-center'>
          <p className='text-xs font-normal text-black'>
            Belum punya akun?{' '}
            <a href='/register' className='text-xs font-normal underline'>
              Daftar disini
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
