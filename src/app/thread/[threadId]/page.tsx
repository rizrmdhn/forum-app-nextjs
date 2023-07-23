'use client'
import useSelect from '@/hooks/useSelect'
import { asyncGetThreadsDetail } from '@/states/detailThread/action'
import Image from 'next/image'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { use, useEffect } from 'react'
import {
  MdThumbUp,
  MdThumbUpOffAlt,
  MdThumbDown,
  MdOutlineThumbDownOffAlt,
  MdOutlineModeComment,
  MdThumbDownOffAlt,
} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import moment from 'moment'
import SubmitButton from '@/components/SubmitButton'
import 'moment/locale/id'
import useCreateComment from '@/hooks/useCreateComment'
import { asyncSetIsPreload } from '@/states/isPreload/action'
import useUpVoteDetailThread from '@/hooks/useUpVoteDetailThread'
import useDownVoteDetailThread from '@/hooks/useDownVoteDetailThread'

export default function DetailThread() {
  const authUser = useSelect('authUser')
  const threadDetail = useSelect('threadDetail')
  const isLoading = useSelect('isLoading')

  const [upVoteThread, removeUpVoteThread] = useUpVoteDetailThread()
  const [downVoteThread, removeDownVoteThread] = useDownVoteDetailThread()
  const [setThreadIdHandler, content, onChangeContent, onSubmitComment] = useCreateComment()

  const { threadId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncSetIsPreload())
    setThreadIdHandler(threadDetail?.id)
    dispatch(asyncGetThreadsDetail(threadId))
  }, [dispatch, threadId])

  const isUpVoted = threadDetail?.upVotesBy.includes(authUser?.id)
  const isDownVoted = threadDetail?.downVotesBy.includes(authUser?.id)

  const handleUpVote = (id: string) => {
    if (isUpVoted) {
      // remove upvote
      removeUpVoteThread(id)
    } else {
      // add upvote
      upVoteThread(id)
    }
  }

  const handleDownVote = (id: string) => {
    if (isDownVoted) {
      // remove downvote
      removeDownVoteThread(id)
    } else {
      // add downvote
      downVoteThread(id)
    }
  }

  return (
    <div className='detail-thread-page flex h-defaultMobileHeight w-screen flex-col items-start gap-3 bg-light px-7 py-3'>
      <div className='detail-thread-tags__list'>
        {isLoading ? (
          <Skeleton width={100} height={20} baseColor='#393E46' />
        ) : (
          <div className='detail-thread-tags__item flex w-fit justify-start gap-3 rounded bg-white p-1'>
            <p className='tags text-sm font-normal text-black'># {threadDetail?.category}</p>
          </div>
        )}
      </div>
      <div className='detail-thread__content overflow-y-scroll'>
        <p className='text-sm font-normal text-black'>
          {isLoading ? (
            <Skeleton width={200} height={25} count={3} baseColor='#393E46' />
          ) : (
            <span dangerouslySetInnerHTML={{ __html: threadDetail?.body }}></span>
          )}
        </p>
      </div>
      <div className='detail-thread__action-button flex w-fit flex-row items-center justify-between'>
        {isLoading ? (
          <Skeleton width={150} height={20} baseColor='#393E46' />
        ) : (
          <>
            <button
              className='detail-thread__action-button__like flex w-fit items-center gap-2 rounded bg-light p-1'
              onClick={() => handleUpVote(threadDetail?.id)}
            >
              {isUpVoted ? (
                <MdThumbUp className='h-5 w-5 text-black' />
              ) : (
                <MdThumbUpOffAlt className='h-5 w-5 text-black' />
              )}
              <p className='text-sm font-normal text-black'>{threadDetail?.upVotesBy.length}</p>
            </button>
            <button
              className='detail-thread__action-button__dislike flex w-fit items-center gap-2 rounded bg-light p-1'
              onClick={() => handleDownVote(threadDetail?.id)}
            >
              {isDownVoted ? (
                <MdThumbDown className='h-5 w-5 text-black' />
              ) : (
                <MdOutlineThumbDownOffAlt className='h-5 w-5 text-black' />
              )}
              <p className='text-sm font-normal text-black'>{threadDetail?.downVotesBy.length}</p>
            </button>
            <button className='detail-thread__action-button__share flex w-fit items-center gap-2 rounded bg-light p-1'>
              <MdOutlineModeComment className='h-5 w-5 text-black' />
              <p className='text-sm font-normal text-black'>{threadDetail?.comments.length}</p>
            </button>
          </>
        )}
      </div>
      <div className='detail-thread_description flex items-center justify-end gap-8'>
        {isLoading ? (
          <Skeleton width={100} height={20} baseColor='#393E46' />
        ) : (
          <p className='text-sm font-normal text-black'>{moment(threadDetail?.createdAt).fromNow()}</p>
        )}
        {isLoading ? (
          <Skeleton width={100} height={20} baseColor='#393E46' />
        ) : (
          <p className='text-sm font-normal text-black'>
            Dibuat Oleh <span className='font-bold'>{threadDetail?.owner.name}</span>
          </p>
        )}
      </div>
      <div className='detail-thread__comment-container mt-4 w-full'>
        <div className='detail-thread__comment-container__header flex items-center justify-between gap-8'>
          <p className='text-sm font-bold'>Beri komentar</p>
        </div>
        {authUser ? (
          <div className='detail-thread__comment-container__input mt-3 flex flex-col items-center justify-between gap-2'>
            {isLoading ? (
              <Skeleton width={150} height={20} baseColor='#393E46' />
            ) : (
              <>
                <textarea
                  className='h-14 w-full rounded border border-gray-400 px-3 text-xs'
                  placeholder='Komentar'
                  value={content}
                  onChange={onChangeContent}
                />
                <SubmitButton onSubmitComment={onSubmitComment} />
              </>
            )}
          </div>
        ) : (
          <div className='detail-thread__comment-container__input mt-3 flex items-center justify-between gap-8'>
            {isLoading ? (
              <Skeleton width={150} height={20} baseColor='#393E46' />
            ) : (
              <p className='text-xs text-black'>
                <Link href={'/login'} className='underline hover:font-bold'>
                  Login
                </Link>{' '}
                untuk memberi komentar
              </p>
            )}
          </div>
        )}

        <div className='detail-thread__comment-container mt-5'>
          {isLoading ? (
            <Skeleton width={75} height={20} baseColor='#393E46' />
          ) : (
            <p className='text-sm font-bold'>
              Komentar <span>({threadDetail?.comments.length})</span>
            </p>
          )}
        </div>
        <div className='detail-thread__comment-container mt-4 h-56 w-full overflow-y-scroll'>
          {threadDetail?.comments.map((comment: any) => (
            <div className='detail-thread__comment-container__list mt-4 w-full overflow-y-scroll' key={comment.id}>
              <div className='detail-thread__comment-container__list__item flex flex-col items-start gap-4'>
                <div className='detail-thread__comment-container__list__item__user flex w-full items-center justify-between'>
                  <div
                    className='detail-thread__comment-container__list__item__user__detail
             flex w-fit flex-row'
                  >
                    {isLoading ? (
                      <Skeleton width={25} height={25} circle baseColor='#393E46' className='mr-5' />
                    ) : (
                      <div className='detail-thread__comment-container__list__item__user__avatar mr-5 flex items-center'>
                        <Image
                          className='h-8 w-8 rounded-full'
                          src={comment.owner.avatar}
                          alt='avatar'
                          width={25}
                          height={25}
                        />
                      </div>
                    )}
                    {isLoading ? (
                      <Skeleton width={100} height={20} baseColor='#393E46' />
                    ) : (
                      <div className='detail-thread__comment-container__list__item__user__name flex items-center'>
                        <p className='text-sm font-bold'>{comment.owner.name}</p>
                      </div>
                    )}
                  </div>
                  <div className='detail-thread__comment-container__list__item__user__posted flex items-center'>
                    {isLoading ? (
                      <Skeleton width={100} height={20} baseColor='#393E46' />
                    ) : (
                      <p className='text-xs font-normal text-black opacity-50'>{moment(comment.createdAt).fromNow()}</p>
                    )}
                  </div>
                </div>
                <div className='detail-thread__comment-container__list__item__content flex w-full items-center justify-between'>
                  {isLoading ? (
                    <Skeleton width={200} height={20} baseColor='#393E46' />
                  ) : (
                    <p
                      className='text-sm font-normal text-black'
                      dangerouslySetInnerHTML={{ __html: comment.content }}
                    ></p>
                  )}
                </div>
                <div className='detail-thread__comment-container__list__item__action flex items-center gap-4'>
                  {isLoading ? (
                    <Skeleton width={125} height={20} baseColor='#393E46' />
                  ) : (
                    <>
                      <button className='detail-thread__comment-container__list__item__action__like flex w-fit items-center gap-2 rounded bg-light p-1'>
                        <MdThumbUpOffAlt className='h-5 w-5 text-black' />
                        <p className='text-sm font-normal text-black'>{comment.upVotesBy.length}</p>
                      </button>
                      <button className='detail-thread__comment-container__list__item__action__dislike flex w-fit items-start gap-2 rounded bg-light p-1'>
                        <MdThumbDownOffAlt className='h-5 w-5 text-black' />
                        <p className='text-sm font-normal text-black'>{comment.downVotesBy.length}</p>
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
