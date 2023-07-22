'use client'

import BottomNavigation from '@/components/BottomNavigation'
import HeaderLeaderboardPage from '@/components/HeaderLeaderboardPage'
import MobileMenu from '@/components/MobileMenu'
import useSelect from '@/hooks/useSelect'

export default function LeaderboardLayout({ children }: { children: React.ReactNode }) {
  const showMenu = useSelect('showMenu')

  return (
    <>
      <HeaderLeaderboardPage />
      {children}
      {showMenu && <MobileMenu />}
      <BottomNavigation />
    </>
  )
}
