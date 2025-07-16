
import React from 'react'

const Hero = () => {
  return (
    <div className="relative w-full h-[110vh] sm:h-screen bg-hero">
        {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
        <h1 className="text-4xl sm:text-6xl font-bold">
          Bringing Nature Indoors
        </h1>
        <p className="mt-4 text-lg sm:text-xl max-w-2xl">
          Elevate your home with lush indoor greenery – a perfect blend of beauty and tranquility.
        </p>
      </div>
</div>
  )
}

export default Hero;
