'use client'

import useLocale from '@/hooks/useLocale'
import useSelect from '@/hooks/useSelect'
import { setFilterThreadByTitleActionCreator } from '@/states/filterThreadByTitle/action'
import { setShowCategoryActionCreator } from '@/states/showCategory/action'
import React from 'react'
import { MdFilterList, MdSearch } from 'react-icons/md'
import { useDispatch } from 'react-redux'

export default function HeaderThreadPage() {
  const showCategory = useSelect('showCategory')
  const threadTitle = useSelect('threadTitle')

  const { textSearchThread } = useLocale()

  const dispatch = useDispatch()

  const openCategoryList = () => {
    const categoryMenu = document.querySelector('.category-list-menu')
    if (showCategory) {
      categoryMenu?.classList.replace('animate__fadeInLeft', 'animate__fadeOutLeft')
      setTimeout(() => {
        dispatch(setShowCategoryActionCreator(false))
      }, 500)
    } else {
      dispatch(setShowCategoryActionCreator(true))
    }
  }

  const searchThreadByTitle: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setFilterThreadByTitleActionCreator(event.target.value))
  }

  return (
    <div className='header-thread-page sticky top-0 flex h-20 w-screen flex-row items-center justify-between bg-defaultLightHeaders px-4 duration-200 dark:border-b-2 dark:border-white dark:bg-dark'>
      <div className='header-thread-page-item sticky flex w-full flex-row items-center justify-between bg-defaultLightHeaders px-4 duration-200 dark:bg-dark'>
        <button className='icon-filter-by-category group cursor-pointer' onClick={openCategoryList}>
          <MdFilterList className='h-6 w-6 text-white group-hover:text-active' />
        </button>
        <div className='search-thread-container flex h-8 w-64 flex-row items-center rounded border-2 border-white bg-headerSearchBar px-3 2xl:w-80'>
          <input
            type='text'
            placeholder={textSearchThread}
            className='w-52 bg-transparent text-white focus:outline-none 2xl:w-80'
            value={threadTitle}
            onChange={searchThreadByTitle}
          />
          <button className='search-icon hover:cursor-pointer'>
            <MdSearch className='h-6 w-6 text-white' />
          </button>
        </div>
        <div className='flex sm:hidden 2xl:inline'>
          <h2 className='text-2xl font-bold text-white duration-200'>Forum App</h2>
        </div>
      </div>
    </div>
  )
}
