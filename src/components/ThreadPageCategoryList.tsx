import useSelect from '@/hooks/useSelect'
import { setFilterThreadByCategoryActionCreator } from '@/states/filterThreadByCategory/action'
import { useDispatch } from 'react-redux'

export default function ThreadPageCategoryList({ category }: { category: string[] }) {
  const categories = useSelect('category')
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

  return (
    <div className='category-list-menu fixed flex max-h-screen w-32 flex-col rounded-ee-xl bg-defaultLightHeaders py-4'>
      <div className='category-list-menu__title w-full'>
        <h3 className='text-center text-base font-bold text-white'>Kategory List</h3>
      </div>
      <div className='category-list-menu__list flex h-32 flex-col flex-wrap overflow-scroll'>
        {category.map((category: string) =>
          isCategory(category) ? (
            <ul
              className='mx-auto mt-2 flex h-8 w-fit cursor-pointer flex-col gap-2 rounded bg-gray-500 p-1 text-white
           transition duration-300 ease-in-out hover:bg-white hover:text-black
          '
              onClick={() => filterByCategory(category)}
              key={category}
            >
              #{category}
            </ul>
          ) : (
            <ul
              className='mx-auto mt-2 flex h-8 w-fit cursor-pointer flex-col gap-2 rounded bg-light p-1 text-black
           transition duration-300 ease-in-out hover:bg-gray-500 hover:text-white
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
