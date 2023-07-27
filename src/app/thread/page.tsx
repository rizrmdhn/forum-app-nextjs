'use client'

import HeaderThreadPage from '@/components/HeaderThreadPage'
import MobileThreadCard from '@/components/MobileThreadCard'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { asyncPopulateUsersAndThreads } from '@/states/shared/action'
import useSelect from '@/hooks/useSelect'
import MobileThreadCardLoading from '@/loadingComponent/MobileThreadCardLoading'
import AddThreadButton from '@/components/AddThreadButton'
import { openModalActionCreator } from '@/states/openModal/action'
import ThreadPageCategoryList from '@/components/ThreadPageCategoryList'

export default function ThreadPage() {
  const authUser = useSelect('authUser')
  const thread = useSelect('thread')
  const isLoading = useSelect('isLoading')
  const showCategory = useSelect('showCategory')
  const category = useSelect('category')
  const threadTitle = useSelect('threadTitle')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads())
  }, [dispatch])

  const onOpenModal = () => {
    dispatch(openModalActionCreator())
  }

  const categoryList = thread.map((thread: any) => thread.category)

  const filteredThread = thread
    .filter((thread: any) => thread.title.toLowerCase().includes(threadTitle.toLowerCase()))
    .filter((thread: any) => thread.category.toLowerCase().includes(category.toLowerCase()))

  return (
    <>
      <HeaderThreadPage />
      {showCategory && <ThreadPageCategoryList category={categoryList} />}
      <div className='flex h-leaderboardHeight 2xl:h-defaultDesktopHeight flex-col items-center gap-8 overflow-y-auto bg-light px-8 py-12 duration-200 dark:bg-dark'>
        {isLoading ? (
          <>
            <MobileThreadCardLoading />
            <MobileThreadCardLoading />
            <MobileThreadCardLoading />
            <MobileThreadCardLoading />
          </>
        ) : (
          <>
            {filteredThread.map((thread: any) => (
              <MobileThreadCard key={thread.id} {...thread} />
            ))}
          </>
        )}
        {isLoading ? null : authUser ? <AddThreadButton AddNewThread={onOpenModal} /> : null}
      </div>
    </>
  )
}
