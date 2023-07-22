'use client'

import { usePathname } from 'next/navigation'
import { MdLeaderboard, MdForum, MdMenu } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '@/states'
import { setShowMenuActionCreator, unsetShowMenuActionCreator } from '@/states/setShowMenu/action'

export default function BottomNavigation() {
  const showMenu = useSelector<any, any>((state: any) => state.showMenu)

  const dispatch = useDispatch<AppDispatch>()

  const setShowMenu = () => {
    if (showMenu) {
      dispatch(unsetShowMenuActionCreator())
    } else {
      dispatch(setShowMenuActionCreator())
    }
  }

  const isInLeaderboardPage = usePathname().includes('/leaderboard')
  const isInThreadPage = usePathname().includes('/thread')

  return (
    <div className='bottom-navigation fixed bottom-0'>
      <div className='flex h-defaultHeaderMobile w-screen flex-row items-center justify-between bg-defaultLightHeaders px-6'>
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
            Leaderboard
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
            Forum
          </p>
        </a>
        <a
          className='icon-menu group flex w-full cursor-pointer flex-col items-center justify-center'
          onClick={setShowMenu}
        >
          <MdMenu className='h-8 w-8 text-white group-hover:text-active' />
          <p className='font-bold text-white group-hover:text-active'>Menu</p>
        </a>
      </div>
    </div>
  )
}
