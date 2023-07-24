import useLocale from '@/hooks/useLocale'

export default function HeaderLeaderboardPage() {
  const { textLeaderboard } = useLocale()

  return (
    <div className='header-leaderboard-page container flex h-20 w-screen flex-row items-center justify-between bg-defaultLightHeaders px-4 duration-200 dark:bg-dark dark:border-b-2 dark:border-white'>
      <div className='flex w-full flex-row items-center justify-start text-center'>
        <h1 className='mx-auto text-sm font-bold text-white'>{textLeaderboard}</h1>
      </div>
    </div>
  )
}
