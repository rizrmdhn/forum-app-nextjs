import { MdAdd } from 'react-icons/md'

export default function AddThreadButton({ AddNewThread }: { AddNewThread: () => void }) {
  return (
    <button className='fixed bottom-24 right-5 rounded-full bg-defaultLightHeaders' onClick={AddNewThread}>
      <MdAdd className='h-10 w-10 text-white' />
    </button>
  )
}
