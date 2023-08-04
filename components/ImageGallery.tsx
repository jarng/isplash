import ImageItem from './ImageItem'

type Props = {
  images: TImage[]
}

function ImageGallery({ images }: Props) {
  return (
    <div className='columns-3 gap-6 p-6 pt-24'>
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

export default ImageGallery