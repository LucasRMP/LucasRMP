import Image from 'next/image'

import { NavLink } from './nav-link'

export default function HomePage() {
  return (
    <div className="wrapper p-10 flex flex-col gap-10">
      <Heading />
      <div className="flex items-center justify-between gap-48">
        <Presentation />
        <Skills />
      </div>
    </div>
  )
}

const Heading = () => (
  <div className="flex items-center justify-between gap-48">
    <LucasPicture />
    <NavBar />
  </div>
)

const LucasPicture = () => (
  <div className="relative w-96 h-96 flex-1">
    <Image
      className="object-cover drop-shadow-xl rounded-3xl select-none pointer-events-none brightness-50"
      src="/lucas.webp"
      alt="Lucas"
      placeholder="empty"
      fill
    />
  </div>
)

const NavBar = () => (
  <nav className="flex-1">
    <ul className="flex flex-col gap-10">
      <NavLink index={0} href="/">
        Home
      </NavLink>
      <NavLink index={1} href="/blog">
        Blog
      </NavLink>
      <NavLink index={2} href="/projects">
        Projects
      </NavLink>
    </ul>
  </nav>
)

const Presentation = () => (
  <div className="flex flex-col gap-6 flex-1">
    <h1 className="text-5xl font-bold font-mono text-slate-50">
      Hi, I&apos;m <span className="text-primary-600">Lucas</span>
      <br />
      Software Engineer
    </h1>
    <Quote>
      On this blog I share tips and tricks, frameworks, projects, tutorials, etc
      Make sure you subscribe to get the latest updates
    </Quote>
  </div>
)

const Skills = () => (
  <div className="flex-1">
    <Title>Main skills</Title>

    <div className="gap-8 mt-9 grid grid-cols-4 w-fit">
      {Array.from({ length: 8 }, (_, i) => (
        <SkillImage key={i} />
      ))}
    </div>
  </div>
)

const SkillImage = () => (
  <div className="w-20 h-20 bg-slate-200 rounded-3xl"></div>
)

const Title: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className = '',
  ...props
}) => (
  <h2
    className={`text-2xl font-bold font-mono text-slate-50 w-max ${className}`}
    {...props}
  >
    {children}
    <hr className="w-1/3 border-primary-600 mt-1" />
  </h2>
)

const Quote: React.FC<React.PropsWithChildren> = ({ children }) => (
  <blockquote className="text-xl text-slate-300 border-l-4 border-primary-600 px-3 py-1">
    <p>{children}</p>
  </blockquote>
)
