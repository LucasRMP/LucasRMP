import React from 'react'
import { screen, render } from '@testing-library/react'

import { Button } from '.'

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

  it('should render properly in the base case', () => {
    const { container } = render(<Button>A normal button</Button>)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render properly when disabled', () => {
    const { container } = render(<Button disabled>A disabled button</Button>)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render properly when component is passed', () => {
    const { container } = render(
      <Button component="a" href="https://google.com">
        A link
      </Button>,
    )

    expect(container.firstChild).toMatchSnapshot()
  })
})
