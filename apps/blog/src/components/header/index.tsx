import Link from 'next/link'
import React from 'react'

import { Button } from '@rmp/ui/components/button'
import { Logo } from 'components/icons/logo'
import { BuyMeACoffeeIcon } from 'components/icons/buy-me-a-coffee'

const NavLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <Link className="hover:underline text-base font-bold" href={href}>
    {children}
  </Link>
)

export const Header: React.FC = () => {
  return (
    <header className="p-5 w-full flex justify-center shadow-sm">
      <div className="container flex justify-between items-center w-full">
        <Link href="/">
          <Logo />
        </Link>

        <nav>
          <ul className="flex space-x-12 items-center">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/about">About Me</NavLink>
            </li>
            <li>
              <Button
                size="sm"
                variant="contained"
                color="primary"
                startIcon={<BuyMeACoffeeIcon />}
                component={Link}
                href="https://www.buymeacoffee.com/lucasrmp"
                target="_blank"
              >
                Buy Me A Coffee
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
