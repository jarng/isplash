'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

type Props = {
  className?: string;
  topics: TTopic[]
}

export default function NavBar({ className = '', topics }: Props) {
  const url = usePathname();

  return (
    <nav className={`${className} w-full`}>
      <div className='flex max-w-3xl h-full mx-auto items-center justify-between'>
        <Link href='/' className={`text-gray-500 hover:text-gray-900 ${url === '/' && 'underline text-inherit'}`}>Home</Link>
        {
          topics.map((topic) => (
            <div key={topic.id}>
              <Link
                href={`/t/${topic.slug}`}
                className={`text-gray-500 hover:text-gray-900 ${url === `/t/${topic.slug}` && 'underline text-inherit'}`}
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
