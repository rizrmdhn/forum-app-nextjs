'use client'

import BottomNavigation from '@/components/BottomNavigation'
import HeaderThreadPage from '@/components/HeaderThreadPage'
import MobileMenu from '@/components/MobileMenu'
import useSelect from '@/hooks/useSelect'

export default function Home() {
  const showMenu = useSelect('showMenu')
  const isPreload = useSelect('isPreload')

  if (isPreload) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <div className='h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900'></div>
      </div>
    )
  }

  return (
    <main className='h-screen bg-light'>
      <HeaderThreadPage />
      {showMenu && <MobileMenu />}
      <BottomNavigation />
    </main>
  )
}
