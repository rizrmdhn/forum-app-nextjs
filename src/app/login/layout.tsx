'use client'

import BottomNavigation from '@/components/BottomNavigation'
import MobileMenu from '@/components/MobileMenu'
import useGetLocalTheme from '@/hooks/useGetLocalTheme'
import useGetLocale from '@/hooks/useGetLocale'
import useSelect from '@/hooks/useSelect'
import { useEffect } from 'react'

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  const showMenu = useSelect('showMenu')

  const [setLocaleData] = useGetLocale()
  const [setLocalTheme] = useGetLocalTheme()

  useEffect(() => {
    setLocaleData()
    setLocalTheme()
  }, [setLocaleData, setLocalTheme])
  
  return (
    <>
      {children}
      {showMenu && <MobileMenu />}
      <BottomNavigation />
    </>
  )
}
