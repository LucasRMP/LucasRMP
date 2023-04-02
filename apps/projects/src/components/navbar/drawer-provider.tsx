import React from 'react'

import { DrawerContent } from 'components/navbar/drawer-content'

export const DrawerProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="drawer min-h-screen">
      <input id="hamburger-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">{children}</div>
      <DrawerContent />
    </div>
  )
}
