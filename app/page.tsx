import ImageGallery from '@/components/ImageGallery';
import { getPhotos } from '@/lib/api';

export default async function Home() {
  const data = await getPhotos();

  return (
    <main className='w-full'>
      <ImageGallery images={data} />
    </main>
  )
}
