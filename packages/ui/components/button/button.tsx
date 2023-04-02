import React from 'react'

import { Show } from '../display'
import { ButtonColor, ButtonSize, ButtonVariant } from './constants'
import { buttonStyles } from './styles'

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
  color?: ButtonColor
  variant?: ButtonVariant
  size?: ButtonSize
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  component?: React.ElementType | string
  href?: string
  target?: string
  htmlFor?: string
}

export function Button({
  children,
  fullWidth,
  color,
  variant,
  size,
  startIcon,
  endIcon,
  component: Component = 'button',
  ...props
}: ButtonProps) {
  const Container = React.useMemo(() => {
    if (typeof Component === 'string') {
      return (props: any) => React.createElement(Component, props)
    }

    return Component as any
  }, [Component])

  return (
    <Container
      type="button"
      role="button"
      className={buttonStyles({
        color,
        variant,
        size,
        fullWidth,
      })}
      {...props}
    >
      <div className="flex flex-row gap-2 text-center w-max">
        <Show when={startIcon}>{startIcon}</Show>
        {children}
        <Show when={endIcon}>{endIcon}</Show>
      </div>
    </Container>
  )
}
