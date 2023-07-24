export default function Tags({ tags }: { tags: string }) {
  return <p className="bg-light text-black p-1 rounded duration-200 dark:bg-categoryDark dark:text-white">#{tags}</p>;
}
