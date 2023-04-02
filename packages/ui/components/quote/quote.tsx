import React from 'react'

export const Quote: React.FC<React.PropsWithChildren> = ({ children }) => (
  <blockquote className="text-xl text-slate-300 border-l-4 border-primary px-3 py-1">
    <p>{children}</p>
  </blockquote>
)
