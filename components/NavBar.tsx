import { getTopics } from '@/lib/api';
import Link from 'next/link';

type Props = {
  className?: string
}

async function NavBar({ className }: Props) {
  const topics = await getTopics();

  return (
    <nav className={`${className} w-full h-16 border-b-2 border-solid fixed bg-white shadow-gray-50`}>
      <div className='flex max-w-3xl h-full mx-auto items-center justify-between'>
        <Link href='/' className='text-gray-500 hover:text-gray-900'>Home</Link>
        {
          topics.map((topic) => (
            <div key={topic.id}>
              <Link
                href={`/t/${topic.slug}`}
                className='text-gray-500 hover:text-gray-900'
              >
                {topic.title}
              </Link>
            </div>
          ))
        }
      </div>
    </nav>
  )
}

export default NavBar
