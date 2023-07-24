import useLocale from '@/hooks/useLocale'
import useSelect from '@/hooks/useSelect'
import { setFilterThreadByCategoryActionCreator } from '@/states/filterThreadByCategory/action'
import { setShowCategoryActionCreator } from '@/states/showCategory/action'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

export default function ThreadPageCategoryList({ category }: { category: string[] }) {
  const categories = useSelect('category')

  const { textCategoryList } = useLocale()

  const dispatch = useDispatch()

  const isCategory = (category: string) => {
    return category === categories
  }

  const filterByCategory = (category: string) => {
    if (category === categories) {
      dispatch(setFilterThreadByCategoryActionCreator(''))
    } else {
      dispatch(setFilterThreadByCategoryActionCreator(category))
    }
  }

  useEffect(() => {
    // check if menu is clicked in outside of the menu
    const menu = document.querySelector('.category-list-menu')
    const menuButton = document.querySelector('.category-list-menu__list')

    const categoryMenu = document.querySelector('.icon-filter-by-category')
    const handleClickOutside = (event: any) => {
      if (categoryMenu && categoryMenu.contains(event.target)) {
        return
      }

      if (menu && !menu.contains(event.target) && menuButton && !menuButton.contains(event.target)) {
        menu.classList.replace('animate__fadeInLeft', 'animate__fadeOutLeft')
        setTimeout(() => {
          dispatch(setShowCategoryActionCreator(false))
        }, 500)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dispatch])

  return (
    <div className='category-list-menu animate__animated animate__fadeInLeft fixed flex max-h-screen w-32 flex-col rounded-ee-xl bg-defaultLightHeaders py-4 duration-200 dark:border-b-2 dark:border-r-2 dark:border-white dark:bg-dark 2xl:w-64'>
      <div className='category-list-menu__title w-full'>
        <h3 className='text-center text-base font-bold text-white'>{textCategoryList}</h3>
      </div>
      <div className='category-list-menu__list flex h-32 flex-col flex-wrap overflow-scroll'>
        {category.map((category: string) =>
          isCategory(category) ? (
            <ul
              className='mx-auto mt-2 flex h-8 w-fit cursor-pointer flex-col gap-2 rounded bg-gray-500 p-1 text-white
           transition duration-200 ease-in-out hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white
          '
              onClick={() => filterByCategory(category)}
              key={category}
            >
              #{category}
            </ul>
          ) : (
            <ul
              className='mx-auto mt-2 flex h-8 w-fit cursor-pointer flex-col gap-2 rounded bg-light p-1 text-black
           transition duration-200 ease-in-out hover:bg-gray-500 hover:text-white dark:bg-threadCardDark dark:text-white dark:hover:bg-white dark:hover:text-black
          '
              onClick={() => filterByCategory(category)}
              key={category}
            >
              #{category}
            </ul>
          ),
        )}
      </div>
    </div>
  )
}
