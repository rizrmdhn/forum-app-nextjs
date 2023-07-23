export default function ThreadPageCategoryList({ category }: { category: string[] }) {
  return (
    <div className='category-list-menu fixed flex max-h-screen w-32 flex-col rounded-ee-xl bg-defaultLightHeaders py-4'>
      <div className='category-list-menu__title w-full'>
        <h3 className='text-center text-base font-bold text-white'>Kategory List</h3>
      </div>
      <div className='category-list-menu__list flex flex-row flex-wrap h-32 overflow-scroll'>
        {category.map((category: string) => (
          <ul className='mx-auto mt-2 flex w-fit flex-col gap-2 rounded bg-light p-1 text-black cursor-pointer
           hover:bg-gray-500 hover:text-white transition duration-300 ease-in-out
          ' key={category}>#{category}</ul>
        ))}
      </div>
    </div>
  )
}
