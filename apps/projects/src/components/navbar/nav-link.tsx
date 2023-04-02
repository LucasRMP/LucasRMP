import Link from 'next/link'
import classnames from 'classnames'

interface NavLinkProps {
  href: string
  index: number | string
  fullWidth?: boolean
  size?: 'lg' | 'md' | 'sm'
}

export const NavLink: React.FC<React.PropsWithChildren<NavLinkProps>> = ({
  href,
  children,
  index,
  fullWidth = false,
  size = 'lg',
}) => (
  <li
    className={classnames(
      'font-mono hover:text-primary cursor-pointer select-none flex items-center',
      {
        'w-max': !fullWidth,
        'w-full': fullWidth,
        'text-base': size === 'sm',
        'text-xl': size === 'md',
        'text-3xl': size === 'lg',
      },
    )}
  >
    <Link href={href} className="w-full">
      <span className="text-primary">{`0${index}`.substring(-2)}.</span>{' '}
      {children}
    </Link>
  </li>
)
