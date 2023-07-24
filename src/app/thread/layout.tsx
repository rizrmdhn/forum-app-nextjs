'use client'

import BottomNavigation from '@/components/BottomNavigation'
import InputThread from '@/components/InputThread'
import MobileMenu from '@/components/MobileMenu'
import useCreateThread from '@/hooks/useCreateThread'
import useGetLocalTheme from '@/hooks/useGetLocalTheme'
import useGetLocale from '@/hooks/useGetLocale'
import useSelect from '@/hooks/useSelect'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function ThreadPageLayout({ children }: { children: React.ReactNode }) {
  const showMenu = useSelect('showMenu')

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

  return (
    <>
      {children}
      {showMenu && <MobileMenu />}
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
