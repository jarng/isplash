import NavBar from "@/components/NavBar";
import ImageItem from "@/components/ImageItem";
import { getPhotos, getTopics } from "@/lib/api";

export default async function Home() {
  const topics = await getTopics();
  const data = await getPhotos(30);

  return (
    <main className="w-full">
      <NavBar topics={topics}/>
      <div className="columns-3 gap-6 p-6 pt-24">
        {
          data.map((image) => (
              <ImageItem
                key={image.id}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="mb-6"
              />
          ))
        }
      </div>
    </main>
  )
}
