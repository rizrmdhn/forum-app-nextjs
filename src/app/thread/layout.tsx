'use client'

import BottomNavigation from '@/components/BottomNavigation'
import { useSelector } from 'react-redux'
import { State as SetShowMenu } from '@/states/setShowMenu/reducer'
import MobileMenu from '@/components/MobileMenu'

export default function ThreadPageLayout({ children }: { children: React.ReactNode }) {
  const showMenu = useSelector<any, any>((state: any) => state.showMenu)

  return (
    <>
      {children}
      {showMenu && <MobileMenu />}
      <BottomNavigation />
    </>
  )
}
