export type ButtonColor = 'primary' | 'success' | 'error'
export enum ButtonColorEnum {
  PRIMARY = 'primary',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type ButtonVariant = 'outlined' | 'contained' | 'text'
export enum ButtonVariantEnum {
  OUTLINED = 'outlined',
  CONTAINED = 'contained',
  TEXT = 'text',
}

export type ButtonSize = 'sm' | 'md'
export enum ButtonSizeEnum {
  SMALL = 'sm',
  MEDIUM = 'md',
}

const disabledClassByVariant = {
  [ButtonVariantEnum.OUTLINED]:
    'disabled:border-gray-500 disabled:text-gray-500 disabled:hover:opacity-100',
  [ButtonVariantEnum.CONTAINED]:
    'disabled:bg-gray-500 disabled:hover:bg-gray-500',
  [ButtonVariantEnum.TEXT]: 'disabled:text-gray-500',
}

const colorToClassName = {
  [ButtonColorEnum.PRIMARY]: {
    [ButtonVariantEnum.CONTAINED]: `bg-primary hover:bg-primary-700`,
    [ButtonVariantEnum.OUTLINED]:
      'border-primary text-primary hover:text-white hover:bg-primary',
    [ButtonVariantEnum.TEXT]: 'text-primary',
  },
  [ButtonColorEnum.SUCCESS]: {
    [ButtonVariantEnum.CONTAINED]: 'bg-green-500 hover:bg-green-700',
    [ButtonVariantEnum.OUTLINED]: 'border-green-500 text-green-500',
    [ButtonVariantEnum.TEXT]: 'text-green-500',
  },
  [ButtonColorEnum.ERROR]: {
    [ButtonVariantEnum.CONTAINED]: 'bg-red-500 hover:bg-red-700',
    [ButtonVariantEnum.OUTLINED]: 'border-red-500 text-red-500',
    [ButtonVariantEnum.TEXT]: 'text-red-500',
  },
}

export const COMPOUND_VARIANTS = [
  ...Object.values(ButtonColorEnum).reduce((acc, color) => {
    Object.values(ButtonVariantEnum).forEach(variant => {
      acc.push({
        color,
        variant,
        className: `${colorToClassName[color][variant]} ${disabledClassByVariant[variant]}`,
      })
    })

    return acc
  }, [] as any[]),
]
