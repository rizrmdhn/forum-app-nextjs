import Link from 'next/link'
import React from 'react'

export default function NotFoundPage() {
  return (
    <div className='thread-detail-not-found flex h-screen flex-row items-center justify-center bg-defaultLightHeaders'>
      <div className='404-logo text-5xl font-bold text-white border-e-4 p-4'>404</div>
      <div className='container-title-404 p-4'>
        <p className='text-sm font-bold text-white'>Page tidak ditemukan</p>
        <Link href='/thread' className='text-sm font-bold text-white underline'>
          Kembali ke halaman utama
        </Link>
      </div>
    </div>
  )
}
