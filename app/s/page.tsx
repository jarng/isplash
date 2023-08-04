'use client';

import { useSearchParams } from 'next/navigation'
import { useSearchPhotos } from '@/lib/api';
import ImageGallery from '@/components/ImageGallery';

type Props = {}

function SearchPage({ }: Props) {
  const searchParams = useSearchParams();
  const search = searchParams.get('query') || '';
  console.log(search);

  const { data, isError, isLoading } = useSearchPhotos(30, search);
  console.log(data);


  return (
    <main className='w-full'>
      <ImageGallery images={data} />
    </main>
  )
}

export default SearchPage;