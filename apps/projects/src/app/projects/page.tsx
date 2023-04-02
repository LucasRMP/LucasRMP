import { Title } from 'components/title'

export default function ProjectsPage() {
  return (
    <div
      className="wrapper p-10 flex flex-col gap-12"
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(256px, 1fr))',
      }}
    >
      <Title className="text-4xl">Projects</Title>
      <div className="grid gap-8 place-items-center">
        {Array.from({ length: 25 }).map((_, idx) => (
          <ProjectCard key={idx} />
        ))}
      </div>
    </div>
  )
}

const ProjectCard = ({}) => {
  return <div className="card w-64 h-64 bg-neutral"></div>
}
