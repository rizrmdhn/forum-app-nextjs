'use client'

import { usePathname } from 'next/navigation'
import { MdLeaderboard, MdForum, MdMenu } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/states'
import { setShowMenuActionCreator, unsetShowMenuActionCreator } from '@/states/setShowMenu/action'
import useSelect from '@/hooks/useSelect'
import useLocale from '@/hooks/useLocale'

export default function BottomNavigation() {
  const showMenu = useSelect('showMenu')

  const { textForum, textMenu, textLeaderboardMenu } = useLocale()

  const dispatch = useDispatch<AppDispatch>()

  const setShowMenu = () => {
    const menu = document.querySelector('.mobile-menu-item')
    if (showMenu) {
      menu?.classList.replace('animate__fadeInUp', 'animate__fadeOutDown')
      setTimeout(() => {
        dispatch(unsetShowMenuActionCreator())
      }, 500)
    } else {
      dispatch(setShowMenuActionCreator())
    }
  }

  const isInLeaderboardPage = usePathname().includes('/leaderboard')
  const isInThreadPage = usePathname().includes('/thread')

  return (
    <div className='bottom-navigation fixed bottom-0'>
      <div className='flex h-defaultHeaderMobile w-screen flex-row items-center justify-between bg-defaultLightHeaders px-6 duration-200 dark:border-t-2 dark:border-white dark:bg-dark'>
        <a
          className='icon-leaderboard group flex w-full cursor-pointer flex-col items-center justify-center'
          href='/leaderboard'
        >
          <MdLeaderboard
            className={
              isInLeaderboardPage
                ? 'h-8 w-8 text-active group-hover:text-active'
                : 'h-8 w-8 text-white group-hover:text-active'
            }
          />
          <p
            className={
              isInLeaderboardPage
                ? 'font-bold text-active group-hover:text-active'
                : 'font-bold text-white group-hover:text-active'
            }
          >
            {textLeaderboardMenu}
          </p>
        </a>
        <a className='icon-forum group flex w-full cursor-pointer flex-col items-center justify-center' href='/thread'>
          <MdForum
            className={
              isInThreadPage
                ? 'h-8 w-8 text-active group-hover:text-active'
                : 'h-8 w-8 text-white group-hover:text-active'
            }
          />
          <p
            className={
              isInThreadPage
                ? 'font-bold text-active group-hover:text-active'
                : 'font-bold text-white group-hover:text-active'
            }
          >
            {textForum}
          </p>
        </a>
        <a
          className='icon-menu group flex w-full cursor-pointer flex-col items-center justify-center'
          onClick={setShowMenu}
        >
          <MdMenu className='h-8 w-8 text-white group-hover:text-active' />
          <p className='font-bold text-white group-hover:text-active'>{textMenu}</p>
        </a>
      </div>
    </div>
  )
}
