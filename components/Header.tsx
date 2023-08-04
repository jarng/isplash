import NavBar from "./NavBar"
import SearchBar from "./SearchBar"

type Props = {}

function Header({ }: Props) {
  return (
    <div className='flex px-6 items-center justify-between fixed top-0 border-b-2 border-solid bg-white shadow-gray-50 w-full h-16'>
      <SearchBar />
      <NavBar />
    </div>
  )
}

export default Header