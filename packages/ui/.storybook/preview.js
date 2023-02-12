import centered from '@storybook/addon-centered/react'

import { Layout } from './layout'

/** @type {import('@storybook/react').Parameters} */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  decorators: [centered],
}

export const globalTypes = {
  darkMode: true,
}

export const decorators = [
  Story => (
    <Layout>
      <Story />
    </Layout>
  ),
]
