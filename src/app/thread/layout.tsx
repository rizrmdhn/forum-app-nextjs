'use client'

import BottomNavigation from '@/components/BottomNavigation'
import InputThread from '@/components/InputThread'
import MobileMenu from '@/components/MobileMenu'
import useCreateThread from '@/hooks/useCreateThread'
import useSelect from '@/hooks/useSelect'

export default function ThreadPageLayout({ children }: { children: React.ReactNode }) {
  const showMenu = useSelect('showMenu')

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
