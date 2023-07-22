'use client'
import BottomNavigation from '@/components/BottomNavigation'
import { State as SetShowMenu } from '@/states/setShowMenu/reducer'
import MobileMenu from '@/components/MobileMenu'
import useSelect from '@/hooks/useSelect'

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  const showMenu = useSelect('showMenu')
  return (
    <>
      {children}
      {showMenu && <MobileMenu />}
      <BottomNavigation />
    </>
  )
}
