'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { routes } from 'constants/routes'

import { BuyMeACoffeeButton, Hide } from '@rmp/ui'

import { HamburgerMenuButton } from 'components/navbar/hamburger-menu'
import { NavLink } from 'components/navbar/nav-link'

interface NavMenuProps {
  hideNavLinks?: boolean
}

export const NavMenu: React.FC<NavMenuProps> = ({ hideNavLinks = false }) => {
  const pathname = usePathname()
  return (
    <>
      <div className="hidden lg:block">
        <ul className="flex gap-8">
          <Hide when={pathname === '/' || hideNavLinks}>
            {routes.map((route, idx) => (
              <NavLink key={route.path} size="sm" index={idx} href={route.path}>
                {route.label}
              </NavLink>
            ))}
          </Hide>
          <BuyMeACoffeeButton />
        </ul>
      </div>

      <div className="block lg:hidden">
        <HamburgerMenuButton />
      </div>
    </>
  )
}
