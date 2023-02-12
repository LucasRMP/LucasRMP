import React from 'react'

import { Show } from '../display'
import { ButtonColor, ButtonSize, ButtonVariant } from './constants'
import { buttonStyles } from './styles'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  fullWidth?: boolean
  color?: ButtonColor
  variant?: ButtonVariant
  size?: ButtonSize
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  component?: React.ElementType | string
  href?: string
  target?: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  fullWidth,
  color,
  variant,
  size,
  startIcon,
  endIcon,
  component: Component = 'button',
  ...props
}) => {
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
      <div className="flex flex-row gap-2">
        <Show when={startIcon}>{startIcon}</Show>
        {children}
        <Show when={endIcon}>{endIcon}</Show>
      </div>
    </Container>
  )
}
