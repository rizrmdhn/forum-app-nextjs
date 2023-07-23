import React from 'react'

type SubmitButtonProps = {
  onSubmitComment: React.MouseEventHandler<HTMLButtonElement>
}

export default function SubmitButton({ onSubmitComment }: SubmitButtonProps) {
  return (
    <button className='submit-btn h-10 w-full rounded bg-defaultLightHeaders' onClick={onSubmitComment}>
      <p className='text-base font-bold text-white'>Submit</p>
    </button>
  )
}
