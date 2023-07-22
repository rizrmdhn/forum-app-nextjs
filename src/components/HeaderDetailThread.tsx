import Link from 'next/link'
import { MdArrowBackIosNew } from 'react-icons/md'
import Skeleton from 'react-loading-skeleton'

export default function HeaderDetailThread({ title, isLoading }: { title: string; isLoading: boolean }) {
  return (
    <div className='detail-thread-header-page'>
      <div className='flex h-defaultHeaderMobile w-screen items-center justify-start gap-10 bg-defaultLightHeaders'>
        <Link
          className='detail-thread-header-back-button group ml-3 flex w-fit items-center gap-2 rounded bg-light p-1 hover:bg-slate-400 '
          href='/thread'
        >
          <MdArrowBackIosNew className='h-5 w-5 text-black group-hover:text-white' />
        </Link>
        <div className='detail-thread-header-title mx-auto my-auto line-clamp-2 w-64'>
          {isLoading ? (
            <Skeleton width={200} height={25} baseColor='#393E46' />
          ) : (
            <p className='text-auto text-center font-bold text-white'>{title}</p>
          )}
        </div>
      </div>
    </div>
  )
}
