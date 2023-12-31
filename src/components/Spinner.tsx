import React from 'react'
import '@/styles/spinner.css'

export default function Spinner() {
  return (
    <div className='lds-ring' data-testid='spinner'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
