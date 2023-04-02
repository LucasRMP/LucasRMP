import React from 'react'

interface AppBarProps extends React.PropsWithChildren {}

export const AppBar: React.FC<AppBarProps> = ({ children }) => {
  return (
    <header className="sticky top-0 z-50  p-8 bg-base-100 border-b border-primary">
      <div className="wrapper flex items-center justify-between">
        {children}
      </div>
    </header>
  )
}
