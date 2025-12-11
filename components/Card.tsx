import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = false }) => {
  return (
    <div 
      className={`
        glass-card rounded-2xl p-6 md:p-8
        transition-all duration-300 ease-in-out
        ${hoverEffect ? 'hover:shadow-xl hover:-translate-y-1 hover:border-primary-200' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;