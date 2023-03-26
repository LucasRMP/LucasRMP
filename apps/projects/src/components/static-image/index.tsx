import Image, { ImageProps } from 'next/image'
import React from 'react'

import { staticImageLoader } from './loader'

interface StaticImageProps extends ImageProps {}

export const StaticImage: React.FC<StaticImageProps> = ({ alt, ...props }) => {
  return <Image alt={alt} loader={staticImageLoader} {...props} />
}
