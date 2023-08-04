import { getTopics } from "@/lib/api";
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"

type Props = {}

export default async function Header({ }: Props) {
  const topics = await getTopics(8);

  return (
    <div className='flex px-6 items-center justify-between fixed top-0 border-b-2 border-solid bg-white shadow-gray-50 w-full h-16'>
      <SearchBar />
      <NavBar topics={topics}/>
    </div>
  )
}
