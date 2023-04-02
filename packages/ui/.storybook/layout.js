import React from 'react'

import '../public/tailwind.css'

export const Layout = ({ children }) => {
  return <div className="sb-centered-layout bg-slate-900">{children}</div>
}
