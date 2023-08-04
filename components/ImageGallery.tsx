import ImageItem from './ImageItem'

type Props = {
  images: TImage[]
}

export default function ImageGallery({ images }: Props) {
  return (
    <div className='columns-3 gap-6 pt-24 pb-6 px-6'>
      {
        images.map((image) => (
          <ImageItem
            key={image.id}
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className='mb-6'
          />
        ))
      }
    </div>
  )
}
