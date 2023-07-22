'use client'

import BottomNavigation from '@/components/BottomNavigation'
import MobileMenu from '@/components/MobileMenu'
import useSelect from '@/hooks/useSelect'

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  const showMenu = useSelect('showMenu')
  return (
    <>
      {children}
      {showMenu && <MobileMenu />}
      <BottomNavigation />
    </>
  )
}
