import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export default function Logo({ className = "h-8", light = false }: LogoProps) {
  const textColor = light ? "text-[#100720]" : "text-[#F0EDE8]";
  const iconOutlineColor = light ? "#100720" : "#F0EDE8";
  
  return (
    <div className={`flex items-center space-x-2.5 ${className}`}>
      {/* Recreated Logo Graphic */}
      <svg 
        viewBox="0 0 100 100" 
        className="h-full w-auto drop-shadow-sm" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M 10,80 L 10,26 L 6,26 L 18,4 L 30,26 L 26,26 L 26,74 L 42,74 L 42,40 L 52,30 L 80,30 L 90,40 L 90,69 L 74,85 L 74,46 L 58,46 L 58,80 L 48,90 L 20,90 Z" 
          fill={light ? '#FFFFFF' : '#100720'} 
          stroke={iconOutlineColor} 
          strokeWidth="3.5" 
          strokeLinejoin="miter" 
        />
        <path 
          d="M 14,22 L 14,78 L 46,78 L 46,42 L 78,42 L 78,78 L 86,70 L 86,42 L 54,42 L 54,78 L 22,78 L 22,22 L 26,22 L 18,12 L 10,22 Z" 
          fill="#EF4444" 
          stroke={iconOutlineColor} 
          strokeWidth="3.5" 
          strokeLinejoin="miter" 
        />
      </svg>
      
      {/* Logo Text */}
      <div className="flex flex-col justify-center">
        <span className={`font-heading font-extrabold text-[16px] leading-[1.1] tracking-wide ${textColor}`}>
          SUSANSKAR
        </span>
        <span className={`font-body font-bold text-[10px] leading-[1.1] tracking-widest ${textColor} opacity-90`}>
          UNNAYAK PVT LTD
        </span>
      </div>
    </div>
  );
}
