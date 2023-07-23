'use client'

import BottomNavigation from '@/components/BottomNavigation'
import HeaderThreadPage from '@/components/HeaderThreadPage'
import MobileMenu from '@/components/MobileMenu'
import useSelect from '@/hooks/useSelect'
import { useRouter } from 'next/navigation'

export default function Home() {
  const showMenu = useSelect('showMenu')
  const authUser = useSelect('authUser')

  const router = useRouter()

  if (!authUser) {
    return router.push('/thread')
  }

  if (authUser) {
    return router.push('/thread')
  }

  return (
    <main className='h-screen bg-light'>
      <HeaderThreadPage />
      {showMenu && <MobileMenu />}
      <BottomNavigation />
    </main>
  )
}
