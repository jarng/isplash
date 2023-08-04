import useSWR from 'swr';

// client env
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

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

const useSearchPhotos = (page: number, search: string): {
  data: TImage[],
  isError: boolean,
  isLoading: boolean,
} => {
  const url = `https://api.unsplash.com/search/photos/?query=${search}&client_id=${API_KEY}&per_page=${page}`;
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

export default useSearchPhotos;