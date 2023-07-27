import { IconButton, SpeedDial, SpeedDialHandler, SpeedDialContent, SpeedDialAction } from '@material-tailwind/react'
import {
  MdBedtime,
  MdOutlineGTranslate,
  MdLogout,
  MdLogin,
  MdSunny,
  MdMenu,
  MdAdd,
  MdChatBubble,
  MdLeaderboard,
} from 'react-icons/md'
import useSelect from '@/hooks/useSelect'
import React from 'react'
import useLocale from '@/hooks/useLocale'
import { useDispatch } from 'react-redux'
import { asyncUnsetAuthUser } from '@/states/authUser/action'
import myToast from './myToast'
import { unsetShowMenuActionCreator } from '@/states/setShowMenu/action'
import { setLocaleActionCreator } from '@/states/locale/action'
import { changeThemeActionCreator } from '@/states/theme/action'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { openModalActionCreator } from '@/states/openModal/action'

export default function FloatingMenu() {
  const authUser = useSelect('authUser')
  const locale = useSelect('locale')
  const theme = useSelect('theme')

  const { threadId } = useParams()
  const path = usePathname()

  const { textLogin, textDarkMode, textLogout, textLightMode, textLogoutSuccess, textAddThread } = useLocale()

  const dispatch = useDispatch()

  const closeMenu = () => {
    dispatch(unsetShowMenuActionCreator())
  }

  const onLogout = () => {
    dispatch(asyncUnsetAuthUser())
    closeMenu()
    myToast.fire({
      icon: 'success',
      title: textLogoutSuccess,
    })
  }

  const changeLanguage = (lang: string) => {
    dispatch(setLocaleActionCreator(lang))
    localStorage.setItem('locale', lang)
  }

  const changeTheme = () => {
    dispatch(changeThemeActionCreator(theme === 'light' ? 'dark' : 'light'))
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light')
  }

  const onOpenModal = () => {
    dispatch(openModalActionCreator())
  }

  const isUserLoogedIn = () => {
    if (authUser) {
      return (
        <SpeedDialAction className='mobile-menu-item__logout group flex items-center gap-3  bg-dark duration-200 hover:cursor-pointer dark:bg-white'>
          <MdLogout className='h-8 w-8 text-white duration-200 dark:text-black' title={textLogout} onClick={onLogout} />
        </SpeedDialAction>
      )
    } else {
      return (
        <SpeedDialAction className='bg-dark duration-200 dark:bg-white'>
          <Link
            className='mobile-menu-item__logout group flex items-center gap-3 hover:cursor-pointer'
            href='/login'
            onClick={closeMenu}
          >
            <MdLogin className='h-8 w-8 text-white duration-200 dark:text-black' title={textLogin} />
          </Link>
        </SpeedDialAction>
      )
    }
  }

  return (
    <div className='hidden 2xl:fixed 2xl:bottom-16 2xl:right-5 2xl:flex 2xl:w-full'>
      <div className='hidden 2xl:absolute 2xl:bottom-0 2xl:right-5 2xl:flex'>
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size='lg' className='rounded-full bg-dark duration-200 dark:bg-white'>
              <MdMenu className='h-8 w-8 text-white duration-200 dark:text-black' title='Menu' />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            {path.includes(`/thread/${threadId}`) === false && authUser && (
              <SpeedDialAction className='bg-dark duration-200 dark:bg-white'>
                <MdAdd
                  className='h-8 w-8 text-white duration-200 dark:text-black'
                  title={textAddThread}
                  onClick={onOpenModal}
                />
              </SpeedDialAction>
            )}
            {path.includes('/thread') === false && (
              <SpeedDialAction className='bg-dark duration-200 dark:bg-white'>
                <Link href='/thread' title='Thread'>
                  <MdChatBubble className='h-8 w-8 text-white duration-200 dark:text-black' />
                </Link>
              </SpeedDialAction>
            )}
            {path.includes('/leaderboard') === false && (
              <SpeedDialAction className='bg-dark duration-200 dark:bg-white'>
                <Link href='/leaderboard' title='Leaderboard'>
                  <MdLeaderboard className='h-8 w-8 text-white duration-200 dark:text-black' />
                </Link>
              </SpeedDialAction>
            )}
            <SpeedDialAction className='floating-menu-item__darkmode group flex items-center gap-3 bg-dark duration-200 hover:cursor-pointer  dark:bg-white'>
              {theme === 'light' ? (
                <>
                  <MdBedtime
                    className='h-8 w-8 text-white duration-200 dark:text-black'
                    title={textDarkMode}
                    onClick={changeTheme}
                  />
                </>
              ) : (
                <>
                  <MdSunny
                    className='h-8 w-8 text-white duration-200 dark:text-black'
                    title={textLightMode}
                    onClick={changeTheme}
                  />
                </>
              )}
            </SpeedDialAction>
            <SpeedDialAction className='mobile-menu-item__language group flex items-center gap-3 bg-dark duration-200 hover:cursor-pointer dark:bg-white'>
              <MdOutlineGTranslate
                className='h-8 w-8 text-white duration-200 dark:text-black'
                onClick={() => changeLanguage(locale === 'en' ? 'id' : 'en')}
                title={locale === 'en' ? 'Change to Bahasa Indonesia' : 'Change to English'}
              />
            </SpeedDialAction>
            {isUserLoogedIn()}
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  )
}
