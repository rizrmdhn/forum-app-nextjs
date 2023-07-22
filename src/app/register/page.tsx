'use client'
import useRegister from '@/hooks/useRegister'

export default function RegisterPage() {
  const [name, onChangeName, email, onChangeEmail, password, onChangePassword, onSubmit] = useRegister()

  return (
    <div className='register-page container'>
      <div className='flex h-screen w-full flex-col items-center justify-center gap-8 bg-light'>
        <div className='text-title text-4xl font-normal'>REGISTER</div>
        <form className='input-register container flex flex-col items-center justify-center gap-4' onSubmit={onSubmit}>
          <div className='name-container w-72'>
            <input
              type='text'
              placeholder='Name'
              className='w-full border-2 border-black bg-transparent px-2 py-2 text-black focus:outline-none'
              value={name}
              onChange={onChangeName}
            />
          </div>
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
            className='register-btn flex w-72 flex-auto items-center justify-center gap-3 bg-black px-2 py-2 text-white'
          >
            Register
          </button>
        </form>
        <div className='had-an-account flex-rows container flex items-center justify-center'>
          <p className='text-xs font-normal text-black'>
            Sudah punya akun?{' '}
            <a href='/login' className='text-xs font-normal underline'>
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
