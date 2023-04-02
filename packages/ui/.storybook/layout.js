import React from 'react'

import '../public/tailwind.css'

export const Layout = ({ children }) => {
  return <div className="sb-centered-layout bg-base-100">{children}</div>
}
