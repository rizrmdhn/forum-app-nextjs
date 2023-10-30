import React from 'react'

type SubmitButtonProps = {
  onSubmitComment: React.MouseEventHandler<HTMLButtonElement>
}

export default function SubmitButton({ onSubmitComment }: SubmitButtonProps) {
  return (
    <button
      data-testid='submit-comment'
      className='submit-btn group h-10 w-full rounded border-2 bg-defaultLightHeaders duration-200 hover:bg-black dark:bg-dark
    dark:hover:bg-white dark:hover:text-black
    '
      onClick={onSubmitComment}
    >
      <p
        className='text-base font-bold text-white duration-200 group-hover:text-white
      dark:text-white dark:group-hover:text-black
      '
      >
        Submit
      </p>
    </button>
  )
}
