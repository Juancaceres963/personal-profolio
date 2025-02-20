 import { useState, useEffect, useRef } from "react";

 const CircularProgress = ({ percentage }) => {
 const [progress, setProgress] = useState(0);
 const [isVisible, setIsVisible] = useState(false);
 const elementRef = useRef(null); // Referencia al componente en el DOM

 const radius = 50;
 const strokeWidth = 17;
 const circumference = 2 * Math.PI * radius;

 useEffect(() => {
 const observer = new IntersectionObserver(
   ([entry]) => {
       if (entry.isIntersecting) {
         setTimeout(() => setIsVisible(true), 300); // Espera 0.3 segundos antes de activar la animación
     } else {
      setIsVisible(false); // Resetea si se oculta (opcional)
       }
    },
      { threshold: 0.5 } // Detecta cuando el 50% del elemento es visible
     );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }

      return () => observer.disconnect();
    }, []);
    useEffect(() => {
      if (!isVisible) return;
      let startTime = performance.now();
      const duration = 9000;

      const easeOutExpo = (t) => 1 - Math.pow(2, -10 * t);
      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        setProgress(percentage * easeOutExpo(progress));

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, [isVisible, percentage]);

    return (
      <div ref={elementRef} className="flex items-center justify-center min-h-screen bg-gray-100">
        <svg width="160" height="160" viewBox="0 0 120 120">
          <defs>
            <linearGradient id="progressGradient" x1="-30%" y1="10%" x2="80%" y2="96%">
              <stop offset="0%" stopColor="rgb(179, 74, 253)" />
              <stop offset="47%" stopColor="rgb(201, 0, 219)" />
              <stop offset="100%" stopColor="rgb(99, 10, 253)" />
            </linearGradient>
          </defs>
          <circle cx="60" cy="60" r={radius} fill="none" stroke="transparent" strokeWidth={strokeWidth} />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="url(#progressGradient)"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * progress) / 100}
            strokeLinecap="round"
            
            transform="rotate(-90 60 60)"
            style={{ transition: "stroke-dashoffset 0.5s ease-out" }}
          />
          <text x="60" y="65" textAnchor="middle" fontSize="20px" fill="#fff">
            {Math.round(progress)}%
          </text>
        </svg>
      </div>
    );
  };

  export default CircularProgress;