'use client'

import BottomNavigation from '@/components/BottomNavigation'
import MobileMenu from '@/components/MobileMenu'
import useSelect from '@/hooks/useSelect'
import { useEffect } from 'react'
import useGetLocale from '@/hooks/useGetLocale'
import useGetLocalTheme from '@/hooks/useGetLocalTheme'
import FloatingMenu from '@/components/FloatingMenu'

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
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
      <FloatingMenu AddNewThread={() => {}} />
      <BottomNavigation />
    </>
  )
}
