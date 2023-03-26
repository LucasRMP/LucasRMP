import { cva } from 'class-variance-authority'

import { COMPOUND_VARIANTS } from './constants'

// const className = "text-"

export const buttonStyles = cva(
  'font-semibold tracking-wider text-lh-100 rounded-md transition-all',
  {
    variants: {
      color: {
        primary: '',
        success: '',
        error: '',
      },
      variant: {
        contained: 'text-slate-50',
        outlined:
          'bg-transparent hover:bg-transparent border-2 hover:opacity-75',
        text: 'bg-transparent hover:bg-transparent border-0',
      },
      size: {
        sm: 'py-2 px-4 text-base',
        md: 'py-3 px-5 text-lg',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    compoundVariants: COMPOUND_VARIANTS,
    defaultVariants: {
      color: 'primary',
      variant: 'contained',
      size: 'md',
    },
  },
)
