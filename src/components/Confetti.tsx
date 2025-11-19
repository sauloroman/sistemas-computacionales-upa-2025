import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

export const ConfettiEffect: React.FC = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  const { width, height } = windowSize;

  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={520}
      gravity={0.2}
      colors={[
        '#d4af37', 
        '#c5b358', 
        '#bfa76a', 
        '#e5e4e2', 
        '#d8d8d8', 
        '#ffffff'  
      ]}
      wind={0.01}
      recycle={false}
      friction={0.98}
      initialVelocityY={8}
    />
  );
};