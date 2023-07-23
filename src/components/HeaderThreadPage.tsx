'use client'
import useSelect from '@/hooks/useSelect'
import { setShowCategoryActionCreator } from '@/states/showCategory/action'
import React from 'react'
import { MdFilterList, MdSearch } from 'react-icons/md'
import { useDispatch } from 'react-redux'

export default function HeaderThreadPage() {
  const showCategory = useSelect('showCategory')

  const dispatch = useDispatch()

  const openCatgeroyList = () => {
    if (showCategory) {
      dispatch(setShowCategoryActionCreator(false))
    } else {
      dispatch(setShowCategoryActionCreator(true))
    }
  }

  return (
    <div className='header-thread-page sticky top-0 flex h-20 w-screen flex-row items-center justify-between bg-defaultLightHeaders px-4'>
      <div className='header-thread-page-item sticky flex h-20 w-full flex-row items-center justify-between bg-defaultLightHeaders px-4'>
        <button className='icon group cursor-pointer' onClick={openCatgeroyList}>
          <MdFilterList className='h-6 w-6 text-white group-hover:text-active' />
        </button>
        <div className='search-thread-container flex h-8 w-64 flex-row items-center rounded border-2 border-white bg-headerSearchBar px-3'>
          <input
            type='text'
            placeholder='Search thread'
            className='w-52 bg-transparent text-white focus:outline-none'
          />
          <button className='search-icon hover:cursor-pointer'>
            <MdSearch className='h-6 w-6 text-white' />
          </button>
        </div>
      </div>
    </div>
  )
}
