const API_KEY = process.env.API_KEY;

export const getPhotos = async (page = 30, topicSlug?: string): Promise<TImage[]> => {
  let res;
  if (topicSlug) {
    res = await fetch(
      `https://api.unsplash.com/topics/${topicSlug}/photos/?client_id=${API_KEY}&per_page=${page}`,
      {
        next: { revalidate: 3600 }
      }
    )
  } else {
    res = await fetch(
      `https://api.unsplash.com/photos/?client_id=${API_KEY}&per_page=${page}`,
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
    alt: image.alt_description || '',
  }));
}

export const getTopics = async (): Promise<TTopic[]> => {
  const res = await fetch(
    `https://api.unsplash.com/topics/?client_id=${API_KEY}&per_page=6&order_by=popular`,
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
