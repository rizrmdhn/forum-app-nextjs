import React from 'react'

export default function Tags({ tags }: { tags: string }) {
  return (
    <p data-testid='tags' className='rounded bg-light p-1 text-black duration-200 dark:bg-categoryDark dark:text-white'>
      #{tags}
    </p>
  )
}
