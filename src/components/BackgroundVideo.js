// import bannerVideo from "../assets/video/banner_bg_opti2.mp4";

// const BackgroundVideo = () => {
//   return (
//     <div className="video-background">
//       <video autoPlay loop muted playsInline >
//         <source src={bannerVideo} type="video/mp4" />
//       </video>
//     </div>
//   );
// };

// export default BackgroundVideo;

//************ */ Optimizacion de codigo **************///

import { useState, useEffect, useRef } from "react";
import bannerVideo from "../assets/video/banner_bg_opti2.mp4";

const BackgroundVideo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Deja de observar una vez que es visible
        }
      },
      { threshold: 0.3 } // El video carga cuando el 30% es visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="video-background">
      <video 
        ref={videoRef} 
        autoPlay={isVisible} 
        loop 
        muted 
        playsInline 
        preload="none"
      >
        {isVisible && <source src={bannerVideo} type="video/mp4" />}
      </video>
    </div>
  );
};

export default BackgroundVideo;
