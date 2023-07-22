'use client'

import moment from 'moment'
import Tags from './Tags'
import { MdThumbUp, MdThumbUpOffAlt, MdThumbDown, MdOutlineThumbDownOffAlt, MdOutlineModeComment } from 'react-icons/md'
import useSelect from '@/hooks/useSelect'
import Link from 'next/link'

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
  const user = useSelect('user')



  const creatorName = user.find((user: any) => user.id === ownerId).name
  return (
    <div className='mobile-thread-card flex flex-col items-start gap-2 rounded-xl bg-threadCard px-7 py-3' title={id}>
      <div className='mobile-thread-card__tags'>
        <Tags tags={category} />
      </div>
      <div
        className='mobile-thread-card__title line-clamp-2 hover:cursor-pointer hover:underline'
      >
        <Link className='text-2xl font-bold' href={`/thread/${id}`}>{title}</Link>
      </div>
      <div className='mobile-thread-card__content line-clamp-2 h-11 w-64 hyphens-auto whitespace-normal text-left'>
        <p className='text-sm'>{body}</p>
      </div>
      <div className='mobile-thread-card__footer flex h-auto w-64 flex-col flex-wrap content-start items-start justify-between gap-y-2'>
        <div className='mobile-thread-card__footer__action__button flex w-32 items-center justify-between'>
          <button className='mobile-thread-card__footer__action__button__like mx-3 flex items-center gap-2'>
            <MdThumbUpOffAlt className='h-6 w-6 text-black' />
            <p>{upVotesBy.length}</p>
          </button>
          <button className='mobile-thread-card__footer__action__button__dislike mx-3 flex items-center gap-2'>
            <MdOutlineThumbDownOffAlt className='h-6 w-6 text-black' />
            <p>{downVotesBy.length}</p>
          </button>
          <button className='mobile-thread-card__footer__action__button__share mx-3 flex items-center gap-2'>
            <MdOutlineModeComment className='h-6 w-6 text-black' />
            <p>{totalComments}</p>
          </button>
        </div>
        <div className='mobile-thread-card__footer__description flex flex-row items-center justify-between gap-9'>
          <p className='text-xs'>{moment().diff(createdAt, 'days')} hari lalu</p>
          <p className='text-xs'>
            dibuat oleh <span className='font-bold'>{creatorName}</span>{' '}
          </p>
        </div>
      </div>
    </div>
  )
}
