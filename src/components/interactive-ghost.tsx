'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export const InteractiveGhost = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ghostPosition, setGhostPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isCaught, setIsCaught] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    // Only show on desktop
    const checkIsDesktop = () => {
      setIsVisible(window.innerWidth > 768);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    const handleMouseMove = (e: MouseEvent) => {
      const newMousePos = { x: e.clientX, y: e.clientY };
      setMousePosition(newMousePos);
      
      // Calculate distance between ghost and mouse
      const distance = Math.sqrt(
        Math.pow(newMousePos.x - ghostPosition.x, 2) + 
        Math.pow(newMousePos.y - ghostPosition.y, 2)
      );
      
      // If ghost is close to mouse, consider it "caught"
      if (distance < 30) {
        setIsCaught(true);
        setIsFollowing(false);
      } else {
        setIsCaught(false);
        setIsFollowing(true);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkIsDesktop);
    };
  }, [ghostPosition]);

  // Smooth ghost following animation
  useEffect(() => {
    if (!isFollowing || isCaught) return;

    const followMouse = () => {
      setGhostPosition(prevPos => {
        const dx = mousePosition.x - prevPos.x;
        const dy = mousePosition.y - prevPos.y;
        
        // Keep ghost 60px behind the cursor
        const targetX = mousePosition.x - (dx * 60) / Math.sqrt(dx * dx + dy * dy);
        const targetY = mousePosition.y - (dy * 60) / Math.sqrt(dx * dx + dy * dy);
        
        // Smooth interpolation
        const newX = prevPos.x + (targetX - prevPos.x) * 0.1;
        const newY = prevPos.y + (targetY - prevPos.y) * 0.1;
        
        return { x: newX, y: newY };
      });
    };

    const animationId = requestAnimationFrame(followMouse);
    return () => cancelAnimationFrame(animationId);
  }, [mousePosition, isFollowing, isCaught]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        left: ghostPosition.x - 20,
        top: ghostPosition.y - 25,
        width: '40px',
        height: '50px',
        pointerEvents: 'none',
        zIndex: 50,
        transform: `translate(-50%, -50%) ${isFollowing ? 'scale(1.1)' : isCaught ? 'scale(0.9)' : 'scale(1)'}`,
        transition: 'transform 0.3s ease-out',
        opacity: isCaught ? 0.6 : 1
      }}
    >
      <svg
        width="40"
        height="50"
        viewBox="0 0 40 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          filter: isFollowing ? 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))' : 
                 isCaught ? 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' : 
                 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
          transition: 'filter 0.3s ease-out'
        }}
      >
        <path
          d="M20 2C16.2 2 13.5 5.8 13.5 10.5C13.5 15.2 16.2 19 20 19C23.8 19 26.5 15.2 26.5 10.5C26.5 5.8 23.8 2 20 2Z"
          fill="hsl(var(--ghibli-element-fill))"
          fillOpacity="var(--ghibli-element-opacity)"
        />
        <path
          d="M19.9999 17C16.6862 17 14.5 22.3726 14.5 29C14.5 35.6274 16.6862 41 19.9999 41C23.3137 41 25.5 35.6274 25.5 29C25.5 22.3726 23.3137 17 19.9999 17Z"
          fill="hsl(var(--ghibli-element-fill))"
          fillOpacity="var(--ghibli-element-opacity)"
        />
        <ellipse cx="17" cy="9" rx="1.5" ry="2" fill="black" />
        <ellipse cx="23" cy="9" rx="1.5" ry="2" fill="black" />
      </svg>
      
      {/* Following trail effect */}
      {isFollowing && (
        <div
          style={{
            position: 'absolute',
            bottom: '-8px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '4px',
            height: '4px',
            backgroundColor: 'rgba(0,0,0,0.1)',
            borderRadius: '50%',
            animation: 'trail 0.5s ease-out infinite'
          }}
        />
      )}
      
      <style jsx>{`
        @keyframes trail {
          0% {
            transform: translateX(-50%) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translateX(-50%) scale(0.5);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};
