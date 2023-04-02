import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Quote } from './quote'

export default {
  title: 'ui/Quote',
  component: Quote,
  argTypes: {
    children: {
      type: { name: 'string', required: true },
      description: 'The text to display inside the button',
      defaultValue: 'This is a quote from someone very wise',
    },
  },
} as ComponentMeta<typeof Quote>

const Template: ComponentStory<typeof Quote> = args => <Quote {...args} />

export const Primary = Template.bind({})
