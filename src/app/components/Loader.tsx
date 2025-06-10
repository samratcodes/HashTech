
import React from 'react';

const Loader = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <style>
        {`
          @keyframes circle7124 {
            0% {
              top: 60px;
              height: 5px;
              border-radius: 50px 50px 25px 25px;
              transform: scaleX(1.7);
            }
            40% {
              height: 20px;
              border-radius: 50%;
              transform: scaleX(1);
            }
            100% {
              top: 0%;
            }
          }

          @keyframes shadow046 {
            0% {
              transform: scaleX(1.5);
            }
            40% {
              transform: scaleX(1);
              opacity: 0.7;
            }
            100% {
              transform: scaleX(0.2);
              opacity: 0.4;
            }
          }

          .circle {
            animation: circle7124 0.5s alternate infinite ease;
          }

          .shadow {
            animation: shadow046 0.5s alternate infinite ease;
          }
        `}
      </style>

      <div className="relative w-[200px] h-[60px] z-[1]">
        {/* Circles */}
        <div
          className="circle absolute w-5 h-5 left-[15%] bg-[#29aae2] rounded-full"
        />
        <div
          className="circle absolute w-5 h-5 left-[45%] bg-[#29aae2] rounded-full"
          style={{ animationDelay: '0.2s' }}
        />
        <div
          className="circle absolute w-5 h-5 right-[15%] bg-[#29aae2] rounded-full"
          style={{ animationDelay: '0.3s' }}
        />

        {/* Shadows */}
        <div
          className="shadow absolute w-5 h-1 top-[62px] left-[15%] bg-black rounded-full blur-[1px] opacity-90 z-[-1]"
        />
        <div
          className="shadow absolute w-5 h-1 top-[62px] left-[45%] bg-black rounded-full blur-[1px] opacity-90 z-[-1]"
          style={{ animationDelay: '0.2s' }}
        />
        <div
          className="shadow absolute w-5 h-1 top-[62px] right-[15%] bg-black rounded-full blur-[1px] opacity-90 z-[-1]"
          style={{ animationDelay: '0.3s' }}
        />
      </div>
    </div>
  );
};

export default Loader;
