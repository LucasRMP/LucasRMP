import React from 'react'

import { DisplayProps } from './constants'

export const Hide: React.FC<DisplayProps> = ({ children, when }) => {
  return when ? null : <>{children}</>
}
