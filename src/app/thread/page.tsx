'use client'
import HeaderThreadPage from '@/components/HeaderThreadPage'
import MobileThreadCard from '@/components/MobileThreadCard'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { asyncPopulateUsersAndThreads } from '@/states/shared/action'
import useSelect from '@/hooks/useSelect'
import MobileThreadCardLoading from '@/loadingComponent/MobileThreadCardLoading'

export default function ThreadPage() {
  const thread = useSelect('thread')
  const isLoading = useSelect('isLoading')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads())
  }, [dispatch])

  return (
    <>
      <HeaderThreadPage />
      <div className='flex h-defaultMobileHeight flex-col items-center gap-8 overflow-y-auto bg-light px-8 py-12'>
        {isLoading ? (
          <>
            <MobileThreadCardLoading />
            <MobileThreadCardLoading />
            <MobileThreadCardLoading />
            <MobileThreadCardLoading />
          </>
        ) : (
          <>
            {thread.map((thread: any) => (
              <MobileThreadCard key={thread.id} {...thread} />
            ))}
          </>
        )}
      </div>
    </>
  )
}
