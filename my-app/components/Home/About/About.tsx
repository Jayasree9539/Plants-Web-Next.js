import React from "react";
import Image from "next/image";
import BoxText from "@/components/Helper/BoxText";

const About = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="flex justify-center items-center mb-8">
        <BoxText>About Us</BoxText>
      </div>
      <div className="w-[85%] mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="md:w-1/2 relative">
          <Image
            src="/indoor23.jpg"
            alt="About Us"
            width={500}
            height={500}
            className="rounded-xl shadow-lg"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
            Bringing Life to Your Space
          </h1>
          <p className="mt-3 leading-relaxed text-sm sm:text-base text-gray-700 ">
            At <span className="font-semibold text-green-700">Growing Green </span>, we believe that nature should be a part of every home. 
            Our carefully selected indoor plants not only enhance your living space but also purify the air and promote well-being.
          </p>
          <p className="mt-3 leading-relaxed text-sm sm:text-base text-gray-700">
            Whether you are a seasoned plant lover or just starting your journey, we
            provide the finest collection of easy-to-maintain indoor plants that enhance 
            your space, purify the air, and create a calming ambiance. Perfect for all plants lovers!
          </p>
          <p className="mt-3 leading-relaxed text-sm sm:text-base text-gray-700">
            Join us in bringing the <span className="font-semibold text-green-700"><strong>beauty of nature indoors</strong></span> and creating a healthier,
            more vibrant environment for your home or workspace.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
