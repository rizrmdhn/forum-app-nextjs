import { IconButton, SpeedDial, SpeedDialHandler, SpeedDialContent, SpeedDialAction } from '@material-tailwind/react'
import { MdBedtime, MdOutlineGTranslate, MdLogout, MdLogin, MdSunny, MdMenu, MdAdd, MdChatBubble } from 'react-icons/md'
import useSelect from '@/hooks/useSelect'
import React from 'react'
import useGetLocalTheme from '@/hooks/useGetLocalTheme'
import useLocale from '@/hooks/useLocale'
import { useDispatch } from 'react-redux'
import { asyncUnsetAuthUser } from '@/states/authUser/action'
import myToast from './myToast'
import { unsetShowMenuActionCreator } from '@/states/setShowMenu/action'
import { setLocaleActionCreator } from '@/states/locale/action'
import { changeThemeActionCreator } from '@/states/theme/action'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

export default function FloatingMenu({ AddNewThread }: { AddNewThread: () => void }) {
  const authUser = useSelect('authUser')
  const locale = useSelect('locale')
  const theme = useSelect('theme')

  const { threadId } = useParams()
  const path = usePathname()

  const { textLogin, textDarkMode, textLogout, textLightMode, textLogoutSuccess, textAddThread } = useLocale()

  const [setLocalTheme] = useGetLocalTheme()

  const colorTheme = theme === 'light' ? 'dark' : 'light'

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

  const isUserLoogedIn = () => {
    if (authUser) {
      return (
        <SpeedDialAction
          className='mobile-menu-item__logout group flex items-center gap-3  hover:cursor-pointer'
          onClick={onLogout}
        >
          <MdLogout className='h-8 w-8 text-white duration-200 dark:text-black' title={textLogout} />
        </SpeedDialAction>
      )
    } else {
      return (
        <Link
          className='mobile-menu-item__logout group flex items-center gap-3 hover:cursor-pointer'
          href='/login'
          onClick={closeMenu}
        >
          <MdLogin className='h-8 w-8 text-white duration-200 dark:text-black' title={textLogin} />
        </Link>
      )
    }
  }

  return (
    <div className='hidden 2xl:block 2xl:fixed 2xl:bottom-16 2xl:right-5 2xl:w-full'>
      <div className='hidden 2xl:block 2xl:absolute 2xl:bottom-0 2xl:right-5'>
        <SpeedDial>
          <SpeedDialHandler>
            <IconButton size='lg' className='rounded-full bg-dark duration-200 dark:bg-white'>
              <MdMenu className='h-8 w-8 text-white duration-200 dark:text-black' title='Menu' />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            {path.includes(`/thread/${threadId}`) === false && authUser && (
              <SpeedDialAction className='bg-dark duration-200 dark:bg-white' onClick={AddNewThread}>
                <MdAdd className='h-8 w-8 text-white duration-200 dark:text-black' title={textAddThread} />
              </SpeedDialAction>
            )}
            {path.includes('/thread') === false && (
              <SpeedDialAction>
                <Link href='/thread' title='Thread'>
                  <MdChatBubble className='h-8 w-8 text-white duration-200 dark:text-black' />
                </Link>
              </SpeedDialAction>
            )}
            <SpeedDialAction
              className='floating-menu-item__darkmode group flex items-center gap-3 bg-dark duration-200 hover:cursor-pointer  dark:bg-white'
              onClick={changeTheme}
            >
              {theme === 'light' ? (
                <>
                  <MdBedtime className='h-8 w-8 text-white duration-200 dark:text-black' title={textDarkMode} />
                </>
              ) : (
                <>
                  <MdSunny className='h-8 w-8 text-white duration-200 dark:text-black' title={textLightMode} />
                </>
              )}
            </SpeedDialAction>
            <SpeedDialAction
              className='mobile-menu-item__language group flex items-center gap-3 bg-dark duration-200 hover:cursor-pointer dark:bg-white'
              onClick={() => changeLanguage(locale === 'en' ? 'id' : 'en')}
              title={locale === 'en' ? 'Change to Bahasa Indonesia' : 'Change to English'}
            >
              <MdOutlineGTranslate className='h-8 w-8 text-white duration-200 dark:text-black' />
            </SpeedDialAction>
            {isUserLoogedIn()}
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </div>
  )
}
