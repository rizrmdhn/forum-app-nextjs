'use client'
import useLocale from '@/hooks/useLocale'
import useSelect from '@/hooks/useSelect'
import { setFilterThreadByTitleActionCreator } from '@/states/filterThreadByTitle/action'
import { setShowCategoryActionCreator } from '@/states/showCategory/action'
import React, { useEffect } from 'react'
import { MdFilterList, MdSearch } from 'react-icons/md'
import { useDispatch } from 'react-redux'

export default function HeaderThreadPage() {
  const showCategory = useSelect('showCategory')
  console.log('🚀 ~ file: HeaderThreadPage.tsx:12 ~ HeaderThreadPage ~ showCategory:', showCategory)
  const threadTitle = useSelect('threadTitle')

  const { textSearchThread } = useLocale()

  const dispatch = useDispatch()

  const openCategoryList = () => {
    if (showCategory) {
      dispatch(setShowCategoryActionCreator(false))
    } else {
      dispatch(setShowCategoryActionCreator(true))
    }
  }

  const searchThreadByTitle: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch(setFilterThreadByTitleActionCreator(event.target.value))
  }

  const closeMenu = () => {
    dispatch(setShowCategoryActionCreator(false))
  }

  useEffect(() => {
    // check if menu is clicked in outside of the menu
    const menu = document.querySelector('.category-list-menu')
    const menuButton = document.querySelector('.category-list-menu__list')

    const iconMenu = document.querySelector('.icon-filter-by-category')

    const handleClickOutside = (event: any) => {
      if (menu && !menu.contains(event.target) && menuButton && !menuButton.contains(event.target)) {
        
        return closeMenu()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dispatch])

  return (
    <div className='header-thread-page sticky top-0 flex h-20 w-screen flex-row items-center justify-between bg-defaultLightHeaders px-4'>
      <div className='header-thread-page-item sticky flex h-20 w-full flex-row items-center justify-between bg-defaultLightHeaders px-4'>
        <button className='icon-filter-by-category group cursor-pointer' onClick={openCategoryList}>
          <MdFilterList className='h-6 w-6 text-white group-hover:text-active' />
        </button>
        <div className='search-thread-container flex h-8 w-64 flex-row items-center rounded border-2 border-white bg-headerSearchBar px-3'>
          <input
            type='text'
            placeholder={textSearchThread}
            className='w-52 bg-transparent text-white focus:outline-none'
            value={threadTitle}
            onChange={searchThreadByTitle}
          />
          <button className='search-icon hover:cursor-pointer'>
            <MdSearch className='h-6 w-6 text-white' />
          </button>
        </div>
      </div>
    </div>
  )
}
