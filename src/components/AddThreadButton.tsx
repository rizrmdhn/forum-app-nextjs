import { MdAdd } from 'react-icons/md'

export default function AddThreadButton({ AddNewThread }: { AddNewThread: () => void }) {
  return (
    <button className='fixed bottom-24 right-5 rounded-full bg-defaultLightHeaders dark:bg-white duration-200' onClick={AddNewThread}>
      <MdAdd className='h-10 w-10 text-white dark:text-black duration-200' />
    </button>
  )
}
