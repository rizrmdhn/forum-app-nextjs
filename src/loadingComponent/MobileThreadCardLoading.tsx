'use client'

import useSelect from '@/hooks/useSelect'
import Skeleton from 'react-loading-skeleton'

export default function MobileThreadCardLoading() {
  const isLoading = useSelect('isLoading')

  return (
    <div className='mobile-thread-card flex flex-col items-start gap-2 rounded-xl bg-threadCard px-7 py-3'>
      <div className='mobile-thread-card__tags'>
        {isLoading ? <Skeleton width={100} height={20} baseColor='#393E46' /> : null}
      </div>
      <div className='mobile-thread-card__title line-clamp-2 hover:cursor-pointer hover:underline'>
        {isLoading ? <Skeleton width={200} height={25} baseColor='#393E46' /> : null}
      </div>
      <div className='mobile-thread-card__content line-clamp-2 h-11 w-64 hyphens-auto whitespace-normal text-left'>
        {isLoading ? <Skeleton width={200} height={25} baseColor='#393E46' /> : null}
      </div>
      <div className='mobile-thread-card__footer flex h-auto w-64 flex-col flex-wrap content-start items-start justify-between gap-y-2'>
        <div className='mobile-thread-card__footer__action__button flex w-32 items-center justify-between'>
          {isLoading ? <Skeleton width={150} height={20} baseColor='#393E46' /> : null}
        </div>
        <div className='mobile-thread-card__footer__description flex flex-row items-center justify-between gap-9'>
          {isLoading ? <Skeleton width={100} height={20} baseColor='#393E46' /> : null}
          {isLoading ? <Skeleton width={100} height={20} baseColor='#393E46' /> : null}
        </div>
      </div>
    </div>
  )
}
