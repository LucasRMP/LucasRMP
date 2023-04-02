import { routes } from 'constants/routes'

import { BuyMeACoffeeButton } from '@rmp/ui'

import { NavLink } from 'components/navbar/nav-link'

export const DrawerContent: React.FC = () => {
  return (
    <div className="drawer-side">
      <label htmlFor="hamburger-drawer" className="drawer-overlay"></label>

      <ul className="menu p-4 w-80 bg-base-100">
        <label
          htmlFor="hamburger-drawer"
          className="ml-auto cursor-pointer mb-2"
        >
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>

        {routes.map((route, idx) => (
          <NavLink
            key={route.path}
            size="md"
            fullWidth
            index={idx}
            href={route.path}
          >
            {route.label}
          </NavLink>
        ))}

        <div className="mt-auto w-full">
          <BuyMeACoffeeButton fullWidth />
        </div>
      </ul>
    </div>
  )
}
