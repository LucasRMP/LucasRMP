import React from 'react'
import { IconButton } from '@storybook/components'

import '../public/tailwind.css'

export const Layout = ({ children }) => {
  const [darkTheme, setDarkTheme] = React.useState(true)

  const toggleTheme = () => {
    setDarkTheme(prev => !prev)
  }

  React.useEffect(() => {
    if (darkTheme) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [darkTheme])

  return (
    <div
      className="bg-white dark:bg-slate-800 p-8"
      style={{
        display: 'grid',
        gridTemplateRows: '32px 1fr',
        height: '-webkit-fill-available',
      }}
    >
      <div className="flex items-center mb-4">
        <input
          id="dark-mode-checkbox"
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          checked={darkTheme}
          onChange={toggleTheme}
        />
        <label
          for="dark-mode-checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Dark mode
        </label>
      </div>
      <div className="sb-centered-layout">{children}</div>
    </div>
  )
}
