'use client'
import HeaderThreadPage from '@/components/HeaderThreadPage'
import MobileThreadCard from '@/components/MobileThreadCard'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { asyncPopulateUsersAndThreads } from '@/states/shared/action'
import useSelect from '@/hooks/useSelect'
import MobileThreadCardLoading from '@/loadingComponent/MobileThreadCardLoading'
import { asyncSetIsPreload } from '@/states/isPreload/action'
import AddThreadButton from '@/components/AddThreadButton'
import { openModalActionCreator } from '@/states/openModal/action'

export default function ThreadPage() {
  const authUser = useSelect('authUser')
  const thread = useSelect('thread')
  const isLoading = useSelect('isLoading')
  const isPreload = useSelect('isPreload')
  const openModal = useSelect('openModal')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncSetIsPreload())
    dispatch(asyncPopulateUsersAndThreads())
  }, [dispatch])

  if (isPreload) {
    return (
      <div className='flex h-screen items-center justify-center'>
        <div className='h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-gray-900'></div>
      </div>
    )
  }

  const onOpenModal = () => {
    dispatch(openModalActionCreator())
  }

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
        {isLoading ? null : authUser ? <AddThreadButton AddNewThread={onOpenModal} /> : null}
      </div>
    </>
  )
}
