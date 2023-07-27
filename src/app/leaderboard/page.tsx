'use client'

import useSelect from '@/hooks/useSelect'
import { asyncGetLeaderboard } from '@/states/leaderboards/action'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Skeleton from 'react-loading-skeleton'
import { asyncSetIsPreload } from '@/states/isPreload/action'
import useLocale from '@/hooks/useLocale'

export default function LeaderboardPage() {
  const isLoading = useSelect('isLoading')
  const leaderboard = useSelect('leaderboard')

  const { textUser, textScore } = useLocale()

  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(asyncGetLeaderboard())
  }, [dispatch])


  return (
    <div className='leaderboard-page h-leaderboardHeight 2xl:h-defaultDesktopHeight bg-light duration-200 dark:bg-dark'>
      <div className='leaderboard-page__header flex flex-row items-center justify-between gap-40 px-10 py-3 2xl:w-full'>
        <h2 className='ml-4 text-sm font-bold duration-200 dark:text-white 2xl:text-xl'>{textUser}</h2>
        <h2 className='text-sm font-bold duration-200 dark:text-white 2xl:text-xl'>{textScore}</h2>
      </div>
      {leaderboard.map((leaderboard: any) => (
        <div
          className='leaderboard-page__user__lists mx-12 flex flex-row items-center justify-between gap-2 py-3'
          key={leaderboard.user.id}
        >
          <div className='leaderboard-page__user__lists__user_container flex flex-row items-center gap-3'>
            <div className='user-avatar-container'>
              {isLoading ? (
                <Skeleton circle={true} height={25} width={25} baseColor='#393E46' />
              ) : (
                <Image
                  className='user-avatar rounded-full 2xl:h-10 2xl:w-10'
                  src={`${leaderboard.user.avatar}`}
                  alt={leaderboard.user.name}
                  width={25}
                  height={25}
                />
              )}
            </div>
            <div className='user-name'>
              {isLoading ? (
                <Skeleton width={100} height={20} baseColor='#393E46' />
              ) : (
                <h2 className='w-32 text-sm font-normal duration-200 dark:text-white 2xl:w-fit 2xl:text-lg'>
                  {leaderboard.user.name}
                </h2>
              )}
            </div>
          </div>
          <div className='leaderboard-page__user__score flex flex-row items-center gap-3'>
            {isLoading ? (
              <Skeleton width={20} height={20} baseColor='#393E46' className='2xl:h-10 2xl:w-10' />
            ) : (
              <h2 className='text-sm font-normal duration-200 dark:text-white 2xl:text-lg'>{leaderboard.score}</h2>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
