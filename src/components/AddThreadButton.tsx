import React from 'react'
import { MdAdd } from 'react-icons/md'

export default function AddThreadButton({ AddNewThread }: { AddNewThread: () => void }) {
  return (
    <button
      data-testid='add-new-thread'
      className='fixed bottom-24 right-5 rounded-full bg-defaultLightHeaders duration-200 dark:bg-white 2xl:hidden'
      onClick={AddNewThread}
    >
      <MdAdd className='h-10 w-10 text-white duration-200 dark:text-black' />
    </button>
  )
}
