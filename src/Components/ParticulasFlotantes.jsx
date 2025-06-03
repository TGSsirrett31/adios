import React, { useRef, useEffect } from 'react';

function FloatingParticles() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const numParticles = 70;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initializeParticles = () => {
      particles.current = [];
      for (let i = 0; i < numParticles; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 0.8 + 0.4,
          speedY: Math.random() * 0.2 + 0.05,
          opacity: Math.random() * 0.6 + 0.4,
        });
      }
    };

    const drawParticles = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles.current.forEach((particle) => {
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        context.fill();
      });
    };

    const updateParticles = () => {
      particles.current.forEach((particle) => {
        particle.y += particle.speedY;
        if (particle.y > canvas.height + 10) {
          particle.y = -10;
          particle.x = Math.random() * canvas.width;
        }
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();             // Set initial size
    initializeParticles();      // Create particles
    animate();                  // Start animation

    window.addEventListener('resize', resizeCanvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [numParticles]);

return (
  <canvas
    ref={canvasRef}
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      zIndex: -2, // Debajo del overlay
      pointerEvents: 'none',
    }}
  />
);

}

export default FloatingParticles;
