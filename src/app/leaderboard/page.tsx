'use client'

import useSelect from '@/hooks/useSelect'
import { asyncGetLeaderboard } from '@/states/leaderboards/action'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Skeleton from 'react-loading-skeleton'

export default function LeaderboardPage() {
  const isLoading = useSelect('isLoading')
  const leaderboard = useSelect('leaderboard')

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(asyncGetLeaderboard())
  }, [dispatch])

  return (
    <div className='leaderboard-page h-defaultMobileHeight bg-light'>
      <div className='leaderboard-page__header flex flex-row items-center justify-center gap-40 py-3'>
        <h2 className='text-sm font-bold'>Pengguna</h2>
        <h2 className='ml-2 text-sm font-bold'>Skor</h2>
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
                  className='user-avatar rounded-full'
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
                <h2 className='w-32 text-sm font-normal'>{leaderboard.user.name}</h2>
              )}
            </div>
          </div>
          <div className='leaderboard-page__user__score flex flex-row items-center gap-3'>
            {isLoading ? (
              <Skeleton width={20} height={20} baseColor='#393E46' />
            ) : (
              <h2 className='text-sm font-normal'>{leaderboard.score}</h2>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
