import { renderHook } from '@testing-library/react'

import { useAdd } from '.'

describe('useAdd', () => {
  it('should return a function', () => {
    const { result } = renderHook(() => useAdd())
    expect(result.current).toBeInstanceOf(Function)
  })

  it('should add two numbers', () => {
    const { result } = renderHook(() => useAdd())

    expect(result.current(1, 2)).toBe(3)
  })
})
