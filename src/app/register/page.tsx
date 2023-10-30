import HadAnAccount from '@/components/HadAnAccount'
import RegisterForm from '@/components/RegisterForm'

export default function RegisterPage() {
  return (
    <div className='register-page'>
      <div className='flex h-defaultMobileHeight w-full flex-col items-center justify-center gap-8 bg-light duration-200 dark:bg-dark 2xl:h-screen'>
        <div className='text-title text-4xl font-normal duration-200 dark:text-white'>REGISTER</div>
        <RegisterForm />
        <HadAnAccount register />
      </div>
    </div>
  )
}
