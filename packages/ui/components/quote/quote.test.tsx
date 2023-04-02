import React from 'react'
import { render, screen } from '@testing-library/react'

import { Quote } from './quote'

describe('ui/Quote', () => {
  it('should render a blockquote element with the children passed in', () => {
    const { container } = render(
      <Quote>
        <span data-testid="children"></span>
      </Quote>,
    )

    expect(screen.getByTestId('children')).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
