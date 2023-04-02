import React from 'react'

import { Title } from 'components/title'

export const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center gap-8 my-16">
      <Title className="text-5xl">Contact</Title>
      <div className="gap-16 mt-9 grid grid-cols-4 w-fit">
        {Array.from({ length: 4 }, (_, i) => (
          <ContactLink key={i} />
        ))}
      </div>
    </div>
  )
}

const ContactLink = () => (
  <div className="w-20 h-20 rounded-full bg-base-content"></div>
)
