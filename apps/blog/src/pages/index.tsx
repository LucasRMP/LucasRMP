import React from 'react'

import { Button } from '@rmp/ui'

import { StaticImage } from 'components/static-image'
import { ChevronDown } from 'components/icons/chevron-down'

const Home = () => (
  <div
    className="w-full bg-repeat bg-center flex justify-center py-40 relative"
    style={{
      backgroundImage:
        'url(https://res.cloudinary.com/dm9jw2ji1/image/upload/rmp/blog/hero-background)',
    }}
  >
    <div className="container flex justify-between items-center">
      <div className="flex flex-col gap-7">
        <h1 className="text-6xl leading-tight font-bold">
          Hi, I{"'"}m <span className="text-primary-600">Lucas</span>
          <br />
          Software Engineer
        </h1>
        <div className="border-l-gray-900 border-l-2 pl-3 py-[2px] text-gray-500 text-xl">
          <p>
            On this blog I share tips and tricks, frameworks, projects,
            tutorials, etc
          </p>
          <p>Make sure you subscribe to get the latest updates</p>
        </div>
      </div>

      <StaticImage
        src="/hero"
        alt="hero"
        height={387}
        width={470}
        quality={100}
      />
    </div>

    <div className="absolute bottom-2 right-1/2 translate-x-1/2">
      <Button variant="text">
        <ChevronDown />
      </Button>
    </div>
  </div>
)

export default Home
