import React from 'react'
import { render } from '@testing-library/react'

import { Show } from './show'
import { Hide } from './hide'

describe('ui/Show', () => {
  const assertShowByValue = (value: any) => {
    const { container } = render(
      <Show when={value}>
        <div>hello</div>
      </Show>,
    )

    expect(container).toHaveTextContent('hello')
  }

  const assertNotShowByValue = (value: any) => {
    const { container } = render(
      <Show when={value}>
        <div>hello</div>
      </Show>,
    )

    expect(container).toBeEmptyDOMElement()
  }

  it('should render when `when` is a truthy value', () => {
    assertShowByValue(true)
    assertShowByValue(1)
    assertShowByValue('hello')
    assertShowByValue({})
  })

  it('should not render when `when` is a falsy value', () => {
    assertNotShowByValue(false)
    assertNotShowByValue(0)
    assertNotShowByValue('')
    assertNotShowByValue(undefined)
    assertNotShowByValue(null)
  })
})

describe('ui/Hide', () => {
  const assertShowByValue = (value: any) => {
    const { container } = render(
      <Hide when={value}>
        <div>hello</div>
      </Hide>,
    )

    expect(container).toHaveTextContent('hello')
  }

  const assertNotShowByValue = (value: any) => {
    const { container } = render(
      <Hide when={value}>
        <div>hello</div>
      </Hide>,
    )

    expect(container).toBeEmptyDOMElement()
  }

  it('should not render when `when` is a truthy value', () => {
    assertNotShowByValue(true)
    assertNotShowByValue(1)
    assertNotShowByValue('hello')
    assertNotShowByValue({})
  })

  it('should render when `when` is a falsy value', () => {
    assertShowByValue(false)
    assertShowByValue(0)
    assertShowByValue('')
    assertShowByValue(undefined)
    assertShowByValue(null)
  })
})
