import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
}

export default function ProjectsLayout({ children }: React.PropsWithChildren) {
  return <>{children}</>
}
