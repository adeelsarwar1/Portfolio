import React from 'react';
import TypingEffect from './TypingName';

const BackgroundVideo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={`${process.env.PUBLIC_URL}/videos/abcd.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <h1 className="text-white text-5xl md:text-7xl font-bold text-shadow-lg px-8">
          Muhammad Adeel Sarwar
        </h1>
        <TypingEffect/>
        
        <div className='flex'>
            <img src={`${process.env.PUBLIC_URL}/images/github.png`} alt='' className=' w-12 md:w-20 mr-6 md:mr-8'/>
            <img src={`${process.env.PUBLIC_URL}/images/instagram.png`} alt='' className=' w-12 md:w-20 mr-6 md:mr-8'/>
            <img src={`${process.env.PUBLIC_URL}/images/social.png`} alt='' className=' w-12 md:w-20 mr-6 md:mr-8'/>
        </div>
      </div>
    </div>
  );
};

export default BackgroundVideo;
