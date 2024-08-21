import React, { useEffect, useState } from "react";

function Details() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const scrollTrigger = window.innerHeight * 0.75;

      setIsVisible(scrollTop > scrollTrigger);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={`${process.env.PUBLIC_URL}/videos/abcd.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Section */}
      <div className="relative w-full h-screen flex items-center justify-center">
        <div className={`flex justify-center items-center w-full px-8 ${isVisible ? "fly-in" : ""}`}>
          <div className="flex-1 flex justify-end">
            <img
              src={`${process.env.PUBLIC_URL}/images/social.png`}
              className="w-96"
              alt="Insta Link"
            />
          </div>
          <div className="flex-1 flex justify-start ml-6 md:ml-20">
            <div className="text-white text-3xl font-bold">
              <p className="mb-2 md:mb-12">Hey there,</p>
              <p className="font-normal text-sm md:text-lg">I am Adeel Sarwar, a hardcore Pakistani,</p>
              <p className="font-normal text-sm md:text-lg">who revels in a creative challenge.</p>
              <p className="font-normal text-sm md:text-lg">I always look for projects that challenge me</p>
              <p className="font-normal text-sm md:text-lg mb-2 md:mb-12">and take me out of my comfort zone.</p>
              <button className="bg-black font-normal text-lg px-4 text-white py-1 md:py-2">
                See My Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
