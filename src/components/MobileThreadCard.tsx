'use client'

import moment from 'moment'
import Tags from './Tags'
import { MdThumbUp, MdThumbUpOffAlt, MdThumbDown, MdOutlineThumbDownOffAlt, MdOutlineModeComment } from 'react-icons/md'
import useSelect from '@/hooks/useSelect'
import Link from 'next/link'
import 'moment/locale/id'
import useUpVoteThread from '@/hooks/useUpVoteThread'
import useDownVoteThread from '@/hooks/useDownVoteThread'
import useLocale from '@/hooks/useLocale'

type MobileThreadCardProps = {
  id: string
  title: string
  body: string
  category: string
  createdAt: string
  ownerId: string
  upVotesBy: string[]
  downVotesBy: string[]
  totalComments: number
}

export default function MobileThreadCard({
  id,
  title,
  body,
  category,
  createdAt,
  ownerId,
  upVotesBy,
  downVotesBy,
  totalComments,
}: MobileThreadCardProps) {
  const authUser = useSelect('authUser')
  const user = useSelect('user')
  const locale = useSelect('locale')

  const { textCreatedBy } = useLocale()

  const [upVoteThread, removeUpVoteThread] = useUpVoteThread()
  const [downVoteThread, removeDownVoteThread] = useDownVoteThread()

  const creatorName = user.find((user: any) => user.id === ownerId).name

  const isUpVoted = upVotesBy.includes(authUser?.id)
  const isDownVoted = downVotesBy.includes(authUser?.id)

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
    <div
      className='mobile-thread-card flex flex-col items-start gap-2 rounded-xl bg-threadCard px-7 py-3 duration-200 dark:bg-threadCardDark'
      title={title}
    >
      <div className='mobile-thread-card__tags'>
        <Tags tags={category} />
      </div>
      <div className='mobile-thread-card__title line-clamp-2 hover:cursor-pointer hover:underline'>
        <Link className='text-2xl font-bold duration-200 dark:text-white' href={`/thread/${id}`}>
          {title}
        </Link>
      </div>
      <div className='mobile-thread-card__content line-clamp-2 h-11 w-64 hyphens-auto whitespace-normal text-left'>
        <p className='text-sm duration-200 dark:text-white' dangerouslySetInnerHTML={{ __html: body }}></p>
      </div>
      <div className='mobile-thread-card__footer flex h-auto w-64 flex-col flex-wrap content-start items-start justify-between gap-y-2'>
        <div className='mobile-thread-card__footer__action__button flex w-32 items-center justify-between'>
          <button
            className='mobile-thread-card__footer__action__button__like mx-3 flex items-center gap-2'
            onClick={() => handleUpVote(id)}
          >
            {isUpVoted ? (
              <MdThumbUp className='h-6 w-6 text-black duration-200 dark:text-white' />
            ) : (
              <MdThumbUpOffAlt className='h-6 w-6 text-black duration-200 dark:text-white' />
            )}
            <p className='text-black duration-200 dark:text-white'>{upVotesBy.length}</p>
          </button>
          <button
            className='mobile-thread-card__footer__action__button__dislike mx-3 flex items-center gap-2'
            onClick={() => handleDownVote(id)}
          >
            {isDownVoted ? (
              <MdThumbDown className='h-6 w-6 text-black duration-200 dark:text-white' />
            ) : (
              <MdOutlineThumbDownOffAlt className='h-6 w-6 text-black duration-200 dark:text-white' />
            )}
            <p className='text-black duration-200 dark:text-white'>{downVotesBy.length}</p>
          </button>
          <button className='mobile-thread-card__footer__action__button__share mx-3 flex items-center gap-2'>
            <MdOutlineModeComment className='h-6 w-6 text-black duration-200 dark:text-white' />
            <p className='text-black duration-200 dark:text-white'>{totalComments}</p>
          </button>
        </div>
        <div className='mobile-thread-card__footer__description flex flex-row items-center justify-between gap-9'>
          <p className='text-xs duration-200 dark:text-white'>{moment(createdAt).locale(locale).fromNow()}</p>
          <p className='text-xs duration-200 dark:text-white'>
            {textCreatedBy} <span className='font-bold'>{creatorName}</span>{' '}
          </p>
        </div>
      </div>
    </div>
  )
}
