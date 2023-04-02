import Image from 'next/image'
import { routes } from 'constants/routes'

import { Title } from 'components/title'
import { NavLink } from 'components/navbar'

import { Contact } from './contact'

export default function HomePage() {
  return (
    <div className="wrapper p-10 flex flex-col gap-10">
      <Heading />

      <div className="flex items-center justify-between gap-48">
        <Presentation />
        <Skills />
      </div>

      <Contact />
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
      {routes.map((route, idx) => (
        <NavLink key={route.path} index={idx} href={route.path}>
          {route.label}
        </NavLink>
      ))}
    </ul>
  </nav>
)

const Presentation = () => (
  <div className="flex flex-col gap-6 flex-1">
    <h1 className="text-5xl font-bold font-mono">
      Hi, I&apos;m <span className="text-primary">Lucas</span>
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

const Quote: React.FC<React.PropsWithChildren> = ({ children }) => (
  <blockquote className="text-xl opacity-80 border-l-4 border-primary px-3 py-1">
    <p>{children}</p>
  </blockquote>
)
