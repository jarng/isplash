import { getPhotos } from '@/lib/api';
import ImageGallery from '@/components/ImageGallery';

export default async function Home() {
  const data = await getPhotos();

  return (
    <main className='w-full'>
      <ImageGallery images={data} />
    </main>
  )
}
