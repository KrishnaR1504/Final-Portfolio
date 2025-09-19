import React from 'react';

const positionOptions = ['bottom-left', 'top-right', 'top-left', 'bottom-right'] as const;
type Position = typeof positionOptions[number];

interface GlowOverlayProps {
  position?: Position;
  color?: string;
  className?: string;
}

const GlowOverlay: React.FC<GlowOverlayProps> = ({ position = 'bottom-left', color = 'from-pink-500 to-purple-500', className = '' }) => {
  const positions: Record<Position, string> = {
    'bottom-left': 'left-0 bottom-0',
    'top-right': 'right-0 top-0',
    'top-left': 'left-0 top-0',
    'bottom-right': 'right-0 bottom-0',
  };
  return (
    <div
      className={`pointer-events-none absolute z-0 w-72 h-72 sm:w-[32rem] sm:h-[32rem] ${positions[position]} ${className}`}
      style={{ filter: 'blur(80px)', opacity: 0.5 }}
    >
      <div className={`w-full h-full bg-gradient-to-br ${color} rounded-full`} />
    </div>
  );
};

export default GlowOverlay; 