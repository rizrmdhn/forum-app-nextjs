import Link from 'next/link'
import React from 'react'

export default function NotFoundPage() {
  return (
    <div className='thread-detail-not-found'>
      <p className='text-sm font-bold text-black'>Thread tidak ditemukan</p>
      <Link href='/thread'>
        <a className='text-sm font-bold text-black underline'>Kembali ke halaman thread</a>
      </Link>
    </div>
  )
}
