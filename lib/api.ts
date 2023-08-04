import useSWR from 'swr';

const PUBLIC_KEY = process.env.PUBLIC_KEY;

export const getPhotos = async (page: number, topicSlug?: string): Promise<TImage[]> => {
  let res;
  if (topicSlug) {
    res = await fetch(
      `https://api.unsplash.com/topics/${topicSlug}/photos/?client_id=${PUBLIC_KEY}&per_page=${page}`,
      {
        next: { revalidate: 3600 }
      }
    )
  } else {
    res = await fetch(
      `https://api.unsplash.com/photos/?client_id=${PUBLIC_KEY}&per_page=${page}`,
      {
        next: { revalidate: 3600 }
      }
    )
  }

  if (!res.ok) {
    throw new Error(res.statusText);
  }
  const data = await res.json();
  return data.map((image: any) => ({
    id: image.id,
    src: image.urls.regular,
    width: image.width,
    height: image.height,
    alt: image.alt_description,
  }));
}

export const getTopics = async (): Promise<TTopic[]> => {
  const res = await fetch(
    `https://api.unsplash.com/topics/?client_id=${PUBLIC_KEY}&per_page=6&order_by=popular`,
    {
      next: { revalidate: 3600 }
    }
  )
  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data = await res.json();
  return data.map((topic: any) => ({
    id: topic.id,
    slug: topic.slug,
    title: topic.title,
    description: topic.description,
  }));
}

const explicitKey = 'wc1Xg-SiEPLbjNAGrRXfBvvoXtnLFKNvnH6BgkHr3Pg'
const fetcher = (url: string): Promise<TImage[]> => fetch(url).then((r: any) => {
  if (!r.ok) {
    throw new Error(r.statusText);
  }

  return r.json().then((data: any) => (
    data.results.map((image: any) => ({
      id: image.id,
      alt: image.alt_description,
      src: image.urls.regular,
      width: image.width,
      height: image.height,
    }))
  ));
})

export const useSearchPhotos = (page: number, search: string): {
  data: TImage[],
  isError: boolean,
  isLoading: boolean,
} => {
  const url = `https://api.unsplash.com/search/photos/?query=${search}&client_id=${explicitKey}&per_page=${page}`;
  console.log('url', url);
  const { data, error, isLoading } = useSWR(
    url,
    fetcher,
  )

  return {
    data: data || [],
    isError: error,
    isLoading: isLoading,
  }
}
