'use client';

import { useSearchParams } from 'next/navigation'

type Props = {}

function SearchPage({}: Props) {
  const searchParams = useSearchParams();
  const search = searchParams.get('query');
  console.log(search);

  return (
    <div>
      Hello world
    </div>
  )
}

export default SearchPage;