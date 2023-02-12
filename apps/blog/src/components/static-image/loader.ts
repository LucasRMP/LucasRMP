import { ImageLoader } from 'next/image'

export const staticImageLoader: ImageLoader = ({ src, width, quality }) => {
  const url = process.env.NEXT_PUBLIC_STATIC_IMAGE_BUCKET_URL

  if (!url) {
    return src
  }

  return url
    .replace('{{width}}', String(width))
    .replace('{{quality}}', String(quality || 75))
    .replace('{{src}}', src)
}
