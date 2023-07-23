'use client'

import BottomNavigation from '@/components/BottomNavigation'
import InputThread from '@/components/InputThread'
import MobileMenu from '@/components/MobileMenu'
import useCreateThread from '@/hooks/useCreateThread'
import useSelect from '@/hooks/useSelect'
import { setLocaleActionCreator } from '@/states/locale/action'
import { unsetShowMenuActionCreator } from '@/states/setShowMenu/action'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function ThreadPageLayout({ children }: { children: React.ReactNode }) {
  const showMenu = useSelect('showMenu')

  const dispatch = useDispatch()

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
    const locale = localStorage.getItem('locale')
    if (locale) {
      dispatch(setLocaleActionCreator(locale))
    } else {
      dispatch(setLocaleActionCreator('id'))
    }
  }, [dispatch])

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
