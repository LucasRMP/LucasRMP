import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from './button'
import { ButtonColorEnum, ButtonVariantEnum, ButtonSizeEnum } from './constants'

export default {
  title: 'ui/Button',
  component: Button,
  args: {
    children: 'Hello World',
    color: ButtonColorEnum.PRIMARY,
    variant: ButtonVariantEnum.CONTAINED,
    size: ButtonSizeEnum.MEDIUM,
    fullWidth: false,
    disabled: false,
  },
  argTypes: {
    children: {
      type: { name: 'string', required: true },
      defaultValue: 'Button',
      description: 'The text to display inside the button',
    },
    color: {
      options: Object.values(ButtonColorEnum),
      mapping: ButtonColorEnum,
      control: {
        type: 'select',
      },
    },
    variant: {
      options: Object.values(ButtonVariantEnum),
      mapping: ButtonVariantEnum,
      control: {
        type: 'select',
      },
    },
    size: {
      options: Object.values(ButtonSizeEnum),
      mapping: ButtonSizeEnum,
      control: {
        type: 'select',
      },
    },
    fullWidth: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description:
        'Whether the button should take up the full width of its container',
    },
    disabled: {
      type: { name: 'boolean', required: false },
      defaultValue: false,
      description: 'Whether the button should be disabled',
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  color: 'primary',
}

export const Success = Template.bind({})
Success.args = {
  color: 'success',
}

export const Error = Template.bind({})
Error.args = {
  color: 'error',
}

export const Outlined = Template.bind({})
Outlined.args = {
  variant: 'outlined',
}
