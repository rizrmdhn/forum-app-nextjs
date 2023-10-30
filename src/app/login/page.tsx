import HadAnAccount from '@/components/HadAnAccount'
import LoginForm from '@/components/LoginForm'

export default function LoginPage() {
  return (
    <div className='login-page'>
      <div className='flex h-defaultMobileHeight w-full flex-col items-center justify-center gap-8 bg-light duration-200 dark:bg-dark 2xl:h-screen'>
        <div className='text-title text-4xl font-normal duration-200 dark:text-white'>LOGIN</div>
        <LoginForm />
        <HadAnAccount />
      </div>
    </div>
  )
}
