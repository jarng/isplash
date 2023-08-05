'use client';

import { useSearchParams } from 'next/navigation'
import useSearchPhotos from '@/hooks/useSearchPhotos';
import ImageGallery from '@/components/ImageGallery';

type Props = {}

export default function SearchPage({ }: Props) {
  const searchParams = useSearchParams();
  const search = searchParams.get('query') || '';
  const { data, isError, isLoading } = useSearchPhotos(30, search);

  if (isLoading) {
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        Loading...
      </div>
    )
  }

  if (isError) {
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        Something went wrong...
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        No results found...
      </div>
    )
  }

  return (
    <main className='w-full'>
      <ImageGallery images={data} />
    </main>
  )
}
