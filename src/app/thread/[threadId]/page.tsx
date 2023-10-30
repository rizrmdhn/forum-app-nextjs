'use client'

import useSelect from '@/hooks/useSelect'
import { asyncGetThreadsDetail } from '@/states/detailThread/action'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useEffect } from 'react'
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
import useUpVoteComment from '@/hooks/useUpVoteComment'
import useDownVoteComment from '@/hooks/useDownVoteComment'
import useLocale from '@/hooks/useLocale'

export default function DetailThread() {
  const authUser = useSelect('authUser')
  const threadDetail = useSelect('threadDetail')
  const isLoading = useSelect('isLoading')
  const locale = useSelect('locale')

  const { textComment, textGiveComment, textLoginToGiveComment, textLogin, textCreatedBy } = useLocale()

  const [upVoteThread, removeUpVoteThread] = useUpVoteDetailThread()
  const [downVoteThread, removeDownVoteThread] = useDownVoteDetailThread()
  const [upVoteComment, removeUpVoteComment] = useUpVoteComment()
  const [downVoteComment, removeDownVoteComment] = useDownVoteComment()
  const [setThreadIdHandler, content, onChangeContent, onSubmitComment] = useCreateComment()

  const { threadId } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncSetIsPreload())
    setThreadIdHandler(threadDetail?.id)
    dispatch(asyncGetThreadsDetail(threadId))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, threadDetail?.id, threadId])

  const isUpVoted = threadDetail?.upVotesBy.includes(authUser?.id)
  const isDownVoted = threadDetail?.downVotesBy.includes(authUser?.id)

  const isUpVotedComment = (id: string) => {
    return threadDetail?.comments.find((comment: any) => comment.id === id)?.upVotesBy.includes(authUser?.id)
  }

  const isDownVotedComment = (id: string) => {
    return threadDetail?.comments.find((comment: any) => comment.id === id)?.downVotesBy.includes(authUser?.id)
  }

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

  const handleUpVoteComment = (comment: any) => {
    if (isUpVotedComment(comment.id)) {
      // remove upvote
      removeUpVoteComment(threadId, comment.id)
    } else {
      // add upvote
      upVoteComment(threadId, comment.id)
    }
  }

  const handleDownVoteComment = (comment: any) => {
    if (isDownVotedComment(comment.id)) {
      // remove downvote
      removeDownVoteComment(threadId, comment.id)
    } else {
      // add downvote
      downVoteComment(threadId, comment.id)
    }
  }

  return (
    <div className='detail-thread-page flex h-leaderboardHeight w-screen flex-col items-start gap-3 bg-light px-7 py-3 duration-200 dark:bg-dark 2xl:h-defaultDesktopHeight 2xl:px-80 2xl:pb-10 2xl:pt-20'>
      <div className='detail-thread-tags__list'>
        {isLoading ? (
          <Skeleton width={100} height={20} baseColor='#393E46' />
        ) : (
          <div className='detail-thread-tags__item flex w-fit justify-start gap-3 rounded bg-white p-1 duration-200 dark:bg-detailCategoryDark'>
            <p className='tags text-sm font-normal text-black duration-200 dark:text-white 2xl:text-lg'>
              #{threadDetail?.category}
            </p>
          </div>
        )}
      </div>
      <div className='detail-thread__content overflow-y-scroll'>
        <p className='text-sm font-normal text-black duration-200 dark:text-white 2xl:text-lg'>
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
              className='detail-thread__action-button__like flex w-fit items-center gap-2 rounded p-1'
              onClick={() => handleUpVote(threadDetail?.id)}
            >
              {isUpVoted ? (
                <MdThumbUp className='h-5 w-5 text-black duration-200 dark:text-white 2xl:text-lg' />
              ) : (
                <MdThumbUpOffAlt className='h-5 w-5 text-black duration-200 dark:text-white 2xl:text-lg' />
              )}
              <p className='text-sm font-normal text-black duration-200 dark:text-white 2xl:text-lg'>
                {threadDetail?.upVotesBy.length}
              </p>
            </button>
            <button
              className='detail-thread__action-button__dislike flex w-fit items-center gap-2 rounded p-1 2xl:text-lg'
              onClick={() => handleDownVote(threadDetail?.id)}
            >
              {isDownVoted ? (
                <MdThumbDown className='h-5 w-5 text-black duration-200 dark:text-white 2xl:text-lg' />
              ) : (
                <MdOutlineThumbDownOffAlt className='h-5 w-5 text-black duration-200 dark:text-white 2xl:text-lg' />
              )}
              <p className='text-sm font-normal text-black duration-200 dark:text-white 2xl:text-lg'>
                {threadDetail?.downVotesBy.length}
              </p>
            </button>
            <button className='detail-thread__action-button__share flex w-fit items-center gap-2 rounded p-1'>
              <MdOutlineModeComment className='h-5 w-5 text-black duration-200 dark:text-white 2xl:text-lg' />
              <p className='text-sm font-normal text-black duration-200 dark:text-white 2xl:text-lg'>
                {threadDetail?.comments.length}
              </p>
            </button>
          </>
        )}
      </div>
      <div className='detail-thread_description flex items-center justify-end gap-8'>
        {isLoading ? (
          <Skeleton width={100} height={20} baseColor='#393E46' />
        ) : (
          <p className='text-sm font-normal text-black duration-200 dark:text-white 2xl:text-lg'>
            {moment(threadDetail?.createdAt)
              .locale(locale)
              .fromNow()}
          </p>
        )}
        {isLoading ? (
          <Skeleton width={100} height={20} baseColor='#393E46' />
        ) : (
          <p className='text-sm font-normal text-black duration-200 dark:text-white 2xl:text-lg'>
            {textCreatedBy} <span className='font-bold duration-200 dark:text-white'>{threadDetail?.owner.name}</span>
          </p>
        )}
      </div>
      <div className='detail-thread__comment-container mt-4 w-full'>
        <div className='detail-thread__comment-container__header flex items-center justify-between gap-8'>
          <p className='text-sm font-bold duration-200 dark:text-white 2xl:text-lg'>{textGiveComment}</p>
        </div>
        {authUser ? (
          <div className='detail-thread__comment-container__input mt-3 flex flex-col items-center justify-between gap-2'>
            {isLoading ? (
              <Skeleton width={150} height={20} baseColor='#393E46' />
            ) : (
              <>
                <textarea
                  className='h-14 w-full rounded border border-gray-400 px-3 text-xs duration-200 2xl:text-xl'
                  placeholder={textComment}
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
              <p className='text-xs text-black duration-200 dark:text-white 2xl:text-xl'>
                <Link href={'/login'} className='underline duration-200 hover:font-bold dark:text-white'>
                  {textLogin}
                </Link>{' '}
                {textLoginToGiveComment}
              </p>
            )}
          </div>
        )}

        <div className='detail-thread__comment-container mt-5'>
          {isLoading ? (
            <Skeleton width={75} height={20} baseColor='#393E46' />
          ) : (
            <p className='text-sm font-bold duration-200 dark:text-white 2xl:text-xl'>
              {textComment} <span className='duration-200 dark:text-white'>({threadDetail?.comments.length})</span>
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
                        <p className='text-sm font-bold duration-200 dark:text-white'>{comment.owner.name}</p>
                      </div>
                    )}
                  </div>
                  <div className='detail-thread__comment-container__list__item__user__posted flex items-center'>
                    {isLoading ? (
                      <Skeleton width={100} height={20} baseColor='#393E46' />
                    ) : (
                      <p className='text-xs font-normal text-black opacity-50 duration-200 dark:text-white'>
                        {moment(comment.createdAt).locale(locale).fromNow()}
                      </p>
                    )}
                  </div>
                </div>
                <div className='detail-thread__comment-container__list__item__content flex w-full items-center justify-between'>
                  {isLoading ? (
                    <Skeleton width={200} height={20} baseColor='#393E46' />
                  ) : (
                    <p
                      className='text-sm font-normal text-black duration-200 dark:text-white 2xl:text-xl'
                      dangerouslySetInnerHTML={{ __html: comment.content }}
                    ></p>
                  )}
                </div>
                <div className='detail-thread__comment-container__list__item__action flex items-center gap-4'>
                  {isLoading ? (
                    <Skeleton width={125} height={20} baseColor='#393E46' />
                  ) : (
                    <>
                      <button
                        className='detail-thread__comment-container__list__item__action__like roundedp-1 flex w-fit items-center gap-2'
                        onClick={() => handleUpVoteComment(comment)}
                      >
                        {isUpVotedComment(comment.id) ? (
                          <MdThumbUp className='h-5 w-5 text-black duration-200 dark:text-white 2xl:text-xl' />
                        ) : (
                          <MdThumbUpOffAlt className='h-5 w-5 text-black duration-200 dark:text-white 2xl:text-xl' />
                        )}
                        <p className='text-sm font-normal text-black duration-200 dark:text-white 2xl:text-xl'>
                          {comment.upVotesBy.length}
                        </p>
                      </button>
                      <button
                        className='detail-thread__comment-container__list__item__action__dislike roundedp-1 flex w-fit items-start gap-2'
                        onClick={() => handleDownVoteComment(comment)}
                      >
                        {isDownVotedComment(comment.id) ? (
                          <MdThumbDown className='h-5 w-5 text-black duration-200 dark:text-white 2xl:text-xl' />
                        ) : (
                          <MdThumbDownOffAlt className='h-5 w-5 text-black duration-200 dark:text-white 2xl:text-xl' />
                        )}
                        <p className='text-sm font-normal text-black duration-200 dark:text-white 2xl:text-xl'>
                          {comment.downVotesBy.length}
                        </p>
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
