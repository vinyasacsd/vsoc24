import React, { useEffect } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { useSpring, animated } from 'react-spring';
import './Front.css'

const Front = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
}, []);

  return (
    <div className="h-full w-full bg-cover bg-gradient-to-b from-red-200 to-yellow-100 min-h-screen flex items-center justify-center">
      <Parallax pages={2}>
        {/* First Parallax Layer */}
        <ParallaxLayer offset={0} speed={0.5}
        onClick={()=>ReferenceError.current.scrollTo(2)}
        >
          <animated.div className="h-full flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl pl-5 sm:pl-0 lg:text-6xl font-bold text-orange-400 mb-4">Vinyasa Summer of Code</h1>
            <p className="text-xl text-orange-600">Learn, Code, Innovate.</p>
            
          </animated.div>
        </ParallaxLayer>

        <ParallaxLayer
        sticky={{start: 0.4, end :2.5}}
        
        >
          <div className='flex flex-col justify-center items-center mt-36'>
          <img src="/baloon1bg.png" className='flex justify-center items-center h-52 sm:h-64 align-middle  m-5    ' alt="" />
          

          <div className="flex flex-col sm:flex-row sm:space-y-0 space-y-4 sm:space-x-4">
              <div className='m-10 flex justify-center items-center'>
                <ul><li>
                <a href='https://vinyasa-summer-of-code-vsoc.devfolio.co/' className="px-8 py-4 bg-white text-orange-700 rounded-xl hover:scale-110 mb-10   transition duration-300">Register</a></li></ul>
              
              </div>

              {/* <div className='mt-10'>
                <ul><li>
                <a href='https://vinyasa-summer-of-code-vsoc.devfolio.co/' className="px-8 py-4 bg-white text-orange-700 rounded-xl hover:scale-110  transition duration-300">Discord</a></li></ul>
              
              </div> */}

              
             
             
              
              <div 
                  className="apply-button ml-10" 

                  data-hackathon-slug="vinyasa-summer-of-code-vsoc" 

                  data-button-theme="light"
                  style={{height: 44 , width: 312 , }}
                ></div>
            </div>
            </div>
        
        </ParallaxLayer>

        {/* Second Parallax Layer */}
        <ParallaxLayer offset={1} speed={0.5}>
          <animated.div className="h-full flex flex-col items-center justify-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-200 mt-40">Join Us This Summer</h2>
           
          </animated.div>
          
        </ParallaxLayer>

        {/* Background Images with Parallax */}
        <div className="relative h-screen">
      <ParallaxLayer offset={0} speed={0.5} style={{ zIndex: -1 }}>
        <div className="absolute inset-0">
          <img
            src="/uppersun.png"
            alt="Upper Sun"
            className="w-full h-full object-cover"
          />
        </div>
       
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={0.3} style={{ zIndex: -1 }}>
        <div className="absolute inset-0">
          <img
            src="/downsun.png"
            alt="Lower Sun"
            className="w-full h-full object-cover"
          />
        </div>
      </ParallaxLayer>
      
    </div>
      </Parallax>
    </div>
  );
};

export default Front;
