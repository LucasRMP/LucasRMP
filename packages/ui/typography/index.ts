import { Roboto_Flex, Roboto_Mono } from '@next/font/google'

export const monoFont = Roboto_Mono({
  variable: '--font-mono',
  display: 'swap',
  subsets: ['latin'],
})

export const sansFont = Roboto_Flex({
  variable: '--font-sans',
  display: 'swap',
  subsets: ['latin'],
})
