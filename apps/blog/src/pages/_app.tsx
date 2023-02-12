import '../styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Plus_Jakarta_Sans } from '@next/font/google'

import { Header } from 'components/header'

const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
})

const Layout: React.FC = ({ children }) => (
  <div
    className={`${font.className} flex flex-col items-center justify-center min-h-screen bg-gray-100`}
  >
    <Header />
    <main className="w-full flex-1">{children}</main>
  </div>
)

export default function MyApp({ Component, pageProps }: AppProps) {
  const RenderComponent = Component as any
  return (
    <>
      <Head>
        <title>LucasRMP - Blog</title>
      </Head>

      <Layout>
        <RenderComponent {...pageProps} />
      </Layout>
    </>
  )
}
