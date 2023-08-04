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
      <div className='flex w-full h-full items-center space-x-5 justify-end overflow-auto'>
        <Link href='/' className={`text-gray-500 hover:text-gray-900 ${url === '/' && 'underline text-inherit'}`}>Home</Link>
        {
          topics.map((topic) => (
            <Link
              key={topic.id}
              href={`/t/${topic.slug}`}
              className={`shrink-0 text-gray-500 hover:text-gray-900 ${url === `/t/${topic.slug}` && 'underline text-inherit'}`}
            >
              {topic.title}
            </Link>
          ))
        }
      </div>
    </nav>
  )
}
