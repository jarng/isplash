import Image from 'next/image';

type Props = {
  src: string;
  width: number;
  height: number;
  alt: string
  className?: string
}

export default function ImageItem({src, width, height, alt, className}: Props) {
  return (
    <div className={`${className}`}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        placeholder='blur'
        blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPs6++vBwAFjAItFg62vQAAAABJRU5ErkJggg=='
      />
    </div>
  )
}
