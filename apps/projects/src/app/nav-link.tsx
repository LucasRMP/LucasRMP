import Link from 'next/link'

interface NavLinkProps {
  href: string
  index: number | string
}

export const NavLink: React.FC<React.PropsWithChildren<NavLinkProps>> = ({
  href,
  children,
  index,
}) => (
  <li className="font-mono text-3xl hover:text-primary-600 w-max cursor-pointer select-none">
    <Link href={href}>
      <span className="text-primary-600">{`0${index}`.substring(-2)}.</span>{' '}
      {children}
    </Link>
  </li>
)
