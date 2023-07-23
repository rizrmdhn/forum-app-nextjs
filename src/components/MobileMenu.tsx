import { MdBedtime, MdOutlineGTranslate, MdLogout, MdLogin } from 'react-icons/md'
import useSelect from '@/hooks/useSelect'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { unsetShowMenuActionCreator } from '@/states/setShowMenu/action'
import { asyncUnsetAuthUser } from '@/states/authUser/action'
import { setLocaleActionCreator } from '@/states/locale/action'
import { useEffect } from 'react'
import useLocale from '@/hooks/useLocale'

export default function MobileMenu() {
  const authUser = useSelect('authUser')
  const locale = useSelect('locale')

  const { textLogin, textDarkMode, textLogout } = useLocale()

  const dispatch = useDispatch()

  const closeMenu = () => {
    dispatch(unsetShowMenuActionCreator())
  }

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser())
    closeMenu()
  }

  const changeLanguage = (lang: string) => {
    dispatch(setLocaleActionCreator(lang))
    localStorage.setItem('locale', lang)
  }

  useEffect(() => {
    const locale = localStorage.getItem('locale')
    if (locale) {
      dispatch(setLocaleActionCreator(locale))
    } else {
      dispatch(setLocaleActionCreator('id'))
    }
    // check if menu is clicked in outside of the menu
    const menu = document.querySelector('.mobile-menu')
    const menuItem = document.querySelector('.mobile-menu-item')

    const iconMenu = document.querySelector('.icon-menu')

    const handleClickOutside = (event: any) => {
      if (iconMenu && iconMenu.contains(event.target)) {
        return
      }
      if (menu && !menu.contains(event.target) && menuItem && !menuItem.contains(event.target)) {
        closeMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dispatch])

  const isUserLoogedIn = () => {
    if (authUser) {
      return (
        <button
          className='mobile-menu-item__logout group flex w-32 items-center gap-3 px-4 py-1 hover:cursor-pointer'
          onClick={onLogout}
        >
          <MdLogout className='h-6 w-6 text-white group-hover:text-active' />
          <p className='font-bold text-white group-hover:text-active'>{textLogout}</p>
        </button>
      )
    } else {
      return (
        <Link
          className='mobile-menu-item__logout group flex w-32 items-center gap-3 px-4 py-1 hover:cursor-pointer'
          href='/login'
          onClick={closeMenu}
        >
          <MdLogin className='h-6 w-6 text-white group-hover:text-active' />
          <p className='font-bold text-white group-hover:text-active'>{textLogin}</p>
        </Link>
      )
    }
  }

  return (
    <div className='mobile-menu'>
      <div className='mobile-menu-item fixed bottom-20 right-0 inline-flex h-28 w-fit flex-col items-center justify-between rounded-ss-xl bg-defaultLightHeaders'>
        <button className='mobile-menu-item__darkmode group flex w-32 items-center gap-3 px-4 py-1 hover:cursor-pointer'>
          <MdBedtime className='h-6 w-6 text-white group-hover:text-active' />
          <p className='font-bold text-white group-hover:text-active'>{textDarkMode}</p>
        </button>
        <button
          className='mobile-menu-item__language group flex w-32 items-center gap-3 px-4 py-1 hover:cursor-pointer'
          onClick={() => changeLanguage(locale === 'en' ? 'id' : 'en')}
        >
          <MdOutlineGTranslate className='h-6 w-6 text-white group-hover:text-active' />
          <p className='font-bold text-white group-hover:text-active'>{locale === 'en' ? 'English' : 'Bahasa'}</p>
        </button>
        {isUserLoogedIn()}
      </div>
    </div>
  )
}
