import React, { useEffect, useState } from 'react';
import { RiskLevel } from '../types';

interface RiskIndicatorProps {
  level: RiskLevel;
  probability: number;
}

const RiskIndicator: React.FC<RiskIndicatorProps> = ({ level, probability }) => {
  const [animatedProb, setAnimatedProb] = useState(0);

  useEffect(() => {
    // Animate the value from 0 to probability
    const timeout = setTimeout(() => {
        setAnimatedProb(probability);
    }, 300);
    return () => clearTimeout(timeout);
  }, [probability]);

  // Colors based on risk
  let strokeColor = '#e2e8f0'; // default gray
  let textColor = 'text-gray-700';
  let bgColor = 'bg-gray-100';
  let label = '';
  let subLabel = '';

  switch (level) {
    case 'low':
      strokeColor = '#0ea5e9'; // sky-500
      textColor = 'text-sky-700';
      bgColor = 'bg-sky-50';
      label = 'منخفض';
      subLabel = 'مؤشرات طبيعية';
      break;
    case 'medium':
      strokeColor = '#eab308'; // yellow-500
      textColor = 'text-yellow-700';
      bgColor = 'bg-yellow-50';
      label = 'متوسط';
      subLabel = 'يستحق المتابعة';
      break;
    case 'high':
      strokeColor = '#f97316'; // orange-500
      textColor = 'text-orange-700';
      bgColor = 'bg-orange-50';
      label = 'مرتفع';
      subLabel = 'يوصى باستشارة';
      break;
  }

  // SVG calculations
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  // We want a semi-circle gauge (bottom half hidden or just full circle? Let's do a 3/4 circle or full circle. User asked for "circular progress")
  // Let's do a standard full circle for premium feel.
  const offset = circumference - (animatedProb * circumference);

  return (
    <div className="flex flex-col items-center justify-center py-8 relative">
      
      {/* Glow Effect behind */}
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full blur-3xl opacity-40 pointer-events-none transition-colors duration-1000 ${bgColor.replace('bg-', 'bg-')}`}
        style={{ backgroundColor: strokeColor }}
      ></div>

      <div className="relative w-48 h-48">
        <svg className="w-full h-full transform -rotate-90 drop-shadow-lg">
          {/* Background Circle */}
          <circle
            cx="96"
            cy="96"
            r={radius}
            stroke="#f1f5f9"
            strokeWidth="12"
            fill="transparent"
          />
          {/* Progress Circle */}
          <circle
            cx="96"
            cy="96"
            r={radius}
            stroke={strokeColor}
            strokeWidth="12"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-[1500ms] ease-out"
          />
        </svg>

        {/* Center Text */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center animate-fade-in-up" style={{ animationDelay: '500ms' }}>
          <span className={`text-4xl font-extrabold ${textColor}`}>
            {(animatedProb * 100).toFixed(0)}%
          </span>
          <span className="text-xs text-gray-400 font-medium mt-1">الاحتمالية</span>
        </div>
      </div>

      <div className="text-center mt-6 animate-fade-in-up" style={{ animationDelay: '700ms' }}>
        <h3 className={`text-2xl font-bold ${textColor} mb-1`}>
          {label}
        </h3>
        <p className={`text-sm font-medium px-3 py-1 rounded-full ${bgColor} ${textColor} inline-block shadow-sm`}>
            {subLabel}
        </p>
      </div>
    </div>
  );
};

export default RiskIndicator;