import { MdBedtime, MdOutlineGTranslate, MdLogout, MdLogin, MdSunny } from 'react-icons/md'
import useSelect from '@/hooks/useSelect'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { unsetShowMenuActionCreator } from '@/states/setShowMenu/action'
import { asyncUnsetAuthUser } from '@/states/authUser/action'
import { setLocaleActionCreator } from '@/states/locale/action'
import { useEffect } from 'react'
import useLocale from '@/hooks/useLocale'
import { changeThemeActionCreator } from '@/states/theme/action'
import useGetLocalTheme from '@/hooks/useGetLocalTheme'

export default function MobileMenu() {
  const authUser = useSelect('authUser')
  const locale = useSelect('locale')
  const theme = useSelect('theme')

  const { textLogin, textDarkMode, textLogout, textLightMode } = useLocale()

  const [setLocalTheme] = useGetLocalTheme()

  const colorTheme = theme === 'light' ? 'dark' : 'light'

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

  const changeTheme = () => {
    dispatch(changeThemeActionCreator(theme === 'light' ? 'dark' : 'light'))
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const locale = localStorage.getItem('locale')
    if (locale) {
      dispatch(setLocaleActionCreator(locale))
    } else {
      dispatch(setLocaleActionCreator('id'))
    }

    setLocalTheme()
    // check if menu is clicked in outside of the menu
    const menu = document.querySelector('.mobile-menu')
    const menuItem = document.querySelector('.mobile-menu-item')

    const iconMenu = document.querySelector('.icon-menu')

    const handleClickOutside = (event: any) => {
      if (iconMenu && iconMenu.contains(event.target)) {
        return
      }
      if (menu && !menu.contains(event.target) && menuItem && !menuItem.contains(event.target)) {
        menuItem.classList.replace('animate__fadeInUp', 'animate__fadeOutDown')
        setTimeout(() => {
          dispatch(unsetShowMenuActionCreator())
        }, 500)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dispatch, colorTheme, theme, setLocalTheme])

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
      <div
        className='mobile-menu-item animate__animated animate__fadeInUp fixed bottom-20 right-0 inline-flex h-28 w-fit flex-col items-center justify-between rounded-ss-xl bg-defaultLightHeaders duration-200 dark:border-l-2 dark:border-t-2 sm:w-52
      dark:border-white dark:bg-dark
      '
      >
        <button
          className='mobile-menu-item__darkmode group flex w-32 items-center gap-3 px-4 py-1 hover:cursor-pointer'
          onClick={changeTheme}
        >
          {theme === 'light' ? (
            <>
              <MdBedtime className='h-6 w-6 text-white group-hover:text-active' />
              <p className='font-bold text-white group-hover:text-active'>{textDarkMode}</p>
            </>
          ) : (
            <>
              <MdSunny className='h-6 w-6 text-white group-hover:text-active' />
              <p className='font-bold text-white group-hover:text-active'>{textLightMode}</p>
            </>
          )}
        </button>
        <button
          className='mobile-menu-item__language group flex w-32 items-center gap-3 px-4 py-1 hover:cursor-pointer'
          onClick={() => changeLanguage(locale === 'en' ? 'id' : 'en')}
        >
          <MdOutlineGTranslate className='h-6 w-6 text-white group-hover:text-active' />
          <p className='font-bold text-white group-hover:text-active'>{locale === 'en' ? 'Bahasa' : 'English'}</p>
        </button>
        {isUserLoogedIn()}
      </div>
    </div>
  )
}
