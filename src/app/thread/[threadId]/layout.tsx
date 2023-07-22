'use client'

import HeaderDetailThread from '@/components/HeaderDetailThread'
import useSelect from '@/hooks/useSelect'
import { asyncGetThreadsDetail } from '@/states/detailThread/action'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function ThreadPageLayout({ children }: { children: React.ReactNode }) {
  const threadDetail = useSelect('threadDetail')
  const isLoading = useSelect('isLoading')

  const { threadId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncGetThreadsDetail(threadId))
  }, [dispatch, threadId])

  return (
    <>
      <HeaderDetailThread title={threadDetail?.title} isLoading={isLoading} />
      {children}
    </>
  )
}
