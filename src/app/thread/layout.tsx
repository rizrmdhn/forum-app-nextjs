'use client'

import BottomNavigation from '@/components/BottomNavigation'
import FloatingMenu from '@/components/FloatingMenu'
import InputThread from '@/components/InputThread'
import MobileMenu from '@/components/MobileMenu'
import Spinner from '@/components/Spinner'
import useCreateThread from '@/hooks/useCreateThread'
import useGetLocalTheme from '@/hooks/useGetLocalTheme'
import useGetLocale from '@/hooks/useGetLocale'
import useSelect from '@/hooks/useSelect'
import { asyncSetIsPreload } from '@/states/isPreload/action'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function ThreadPageLayout({ children }: { children: React.ReactNode }) {
  const showMenu = useSelect('showMenu')
  const isPreload = useSelect('isPreload')

  const dispatch = useDispatch()

  const [setLocaleData] = useGetLocale()
  const [setLocalTheme] = useGetLocalTheme()
  const [title, onChangeTitle, body, onChangeBody, category, onChangeCategory, onSubmit] = useCreateThread()

  const threadInput = [
    {
      name: 'title',
      type: 'text',
      value: title,
      onChange: onChangeTitle,
    },
    {
      name: 'category',
      type: 'text',
      value: category,
      onChange: onChangeCategory,
    },
  ]

  const threadTextArea = [
    {
      item: 'content',
      value: body,
      onChange: onChangeBody,
    },
  ]

  useEffect(() => {
    setLocaleData()
    setLocalTheme()
  }, [dispatch, setLocaleData, setLocalTheme])

  useEffect(() => {
    dispatch(asyncSetIsPreload())
  }, [dispatch])

  if (isPreload) {
    return (
      <div className='flex h-screen w-screen flex-col items-center justify-center bg-light duration-200 dark:bg-dark'>
        <Spinner />
        <div className='text-title mt-2 text-4xl font-normal duration-200 dark:text-white'>Loading...</div>
      </div>
    )
  }

  return (
    <>
      {children}
      {showMenu && <MobileMenu />}
      <FloatingMenu />
      <BottomNavigation />
      <InputThread
        sendDialog='Add Thread'
        dialogHeader='New Thread'
        input={threadInput}
        textArea={threadTextArea}
        submitHandler={onSubmit}
      />
    </>
  )
}
