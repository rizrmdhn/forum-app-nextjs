import { MdAdd } from 'react-icons/md'

export default function AddThreadButton({ AddNewThread }: { AddNewThread: () => void }) {
  return (
    <button
      className='fixed bottom-24 2xl:hidden right-5 rounded-full bg-defaultLightHeaders duration-200 dark:bg-white'
      onClick={AddNewThread}
    >
      <MdAdd className='h-10 w-10 text-white duration-200 dark:text-black' />
    </button>
  )
}
