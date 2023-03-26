import React from 'react'
import { screen, render } from '@testing-library/react'

import { Button } from '.'
import { ButtonColor, ButtonVariant } from './constants'

function combinations<T1 = any, T2 = any>(array1: T1[], array2: T2[]) {
  const result: Array<[T1, T2]> = []
  array1.forEach(a => {
    array2.forEach(b => {
      result.push([a, b])
    })
  })
  return result
}

describe('ui/Button', () => {
  it('should render a button element with the children passed in', () => {
    render(
      <Button>
        <div data-testid="children"></div>
      </Button>,
    )

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByTestId('children')).toBeInTheDocument()
  })

  it('should respect the fullWidth prop', () => {
    render(<Button fullWidth />)

    expect(screen.getByRole('button')).toHaveClass('w-full')
  })

  it('should apply the correct classes based on a combination of variant and color', () => {
    render(
      <>
        {combinations<ButtonColor, ButtonVariant>(
          ['primary', 'success', 'error'],
          ['contained', 'outlined', 'text'],
        ).map(([color, variant]) => (
          <Button
            key={`${color}-${variant}`}
            color={color}
            variant={variant}
            data-testid={`${color}-${variant}`}
          />
        ))}
      </>,
    )
  })
})
