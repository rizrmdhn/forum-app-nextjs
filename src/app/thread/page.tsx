'use client'
import BottomNavigation from '@/components/BottomNavigation'
import HeaderThreadPage from '@/components/HeaderThreadPage'
import MobileThreadCard from '@/components/MobileThreadCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { asyncPopulateUsersAndThreads } from '@/states/shared/action'
import useSelect from '@/hooks/useSelect'

export default function ThreadPage() {
  const thread = useSelect('thread')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads())
  }, [dispatch])

  return (
    <>
      <HeaderThreadPage />
      <div className='flex h-defaultMobileHeight flex-col items-center gap-8 overflow-y-auto px-8 py-12 bg-light'>
        {thread.map((thread: any) => (
          <MobileThreadCard key={thread.id} {...thread} />
        ))}
      </div>
    </>
  )
}
