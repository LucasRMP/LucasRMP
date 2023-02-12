import Image, { ImageProps } from 'next/image'
import { staticImageLoader } from './loader'
import React from 'react'

interface StaticImageProps extends ImageProps {}

export const StaticImage: React.FC<StaticImageProps> = ({ alt, ...props }) => {
  return <Image alt={alt} loader={staticImageLoader} {...props} />
}
