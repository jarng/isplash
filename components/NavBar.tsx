type Props = {
  topics: TTopic[]
}

function NavBar({ topics }: Props) {
  return (
    <nav className="w-full h-16 border-b-2 border-solid fixed bg-white shadow-gray-50">
      <div className="flex max-w-3xl h-full mx-auto items-center justify-between">
        <h1>Home</h1>
        {
          topics.map((topic) => (
            <div key={topic.id}>
              <h1>{topic.title}</h1>
            </div>
          ))
        }
      </div>
    </nav>
  )
}

export default NavBar
