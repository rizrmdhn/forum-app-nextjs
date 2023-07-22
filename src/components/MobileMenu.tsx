import { MdBedtime, MdOutlineGTranslate, MdLogout, MdLogin } from 'react-icons/md'
import useSelect from '@/hooks/useSelect'
import Link from 'next/link'

export default function MobileMenu() {
  const authUser = useSelect('authUser')

  const isUserLoogedIn = () => {
    if (authUser) {
      return (
        <button className='mobile-menu-item__logout group flex w-32 items-center gap-3 px-4 py-1 hover:cursor-pointer'>
          <MdLogout className='h-6 w-6 text-white group-hover:text-active' />
          <p className='font-bold text-white group-hover:text-active'>Keluar</p>
        </button>
      )
    } else {
      return (
        <Link
          className='mobile-menu-item__logout group flex w-32 items-center gap-3 px-4 py-1 hover:cursor-pointer'
          href='/login'
        >
          <MdLogin className='h-6 w-6 text-white group-hover:text-active' />
          <p className='font-bold text-white group-hover:text-active'>Login</p>
        </Link>
      )
    }
  }

  return (
    <div className='mobile-menu'>
      <div className='mobile-menu-item fixed bottom-20 right-0 inline-flex h-28 w-fit flex-col items-center justify-between rounded-ss bg-defaultLightHeaders'>
        <button className='mobile-menu-item__darkmode group flex w-32 items-center gap-3 px-4 py-1 hover:cursor-pointer'>
          <MdBedtime className='h-6 w-6 text-white group-hover:text-active' />
          <p className='font-bold text-white group-hover:text-active'>Dark</p>
        </button>
        <button className='mobile-menu-item__language group flex w-32 items-center gap-3 px-4 py-1 hover:cursor-pointer'>
          <MdOutlineGTranslate className='h-6 w-6 text-white group-hover:text-active' />
          <p className='font-bold text-white group-hover:text-active'>Bahasa</p>
        </button>
        {isUserLoogedIn()}
      </div>
    </div>
  )
}
