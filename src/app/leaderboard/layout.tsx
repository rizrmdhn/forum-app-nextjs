'use client'

import BottomNavigation from '@/components/BottomNavigation'
import HeaderLeaderboardPage from '@/components/HeaderLeaderboardPage'
import MobileMenu from '@/components/MobileMenu'
import useSelect from '@/hooks/useSelect'
import { setLocaleActionCreator } from '@/states/locale/action'
import { unsetShowMenuActionCreator } from '@/states/setShowMenu/action'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function LeaderboardLayout({ children }: { children: React.ReactNode }) {
  const showMenu = useSelect('showMenu')

  const dispatch = useDispatch()

  useEffect(() => {
    const locale = localStorage.getItem('locale')
    if (locale) {
      dispatch(setLocaleActionCreator(locale))
    } else {
      dispatch(setLocaleActionCreator('id'))
    }
  }, [dispatch])

  return (
    <>
      <HeaderLeaderboardPage />
      {children}
      {showMenu && <MobileMenu />}
      <BottomNavigation />
    </>
  )
}
