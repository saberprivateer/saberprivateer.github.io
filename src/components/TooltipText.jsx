import React, { useState } from 'react';

const TooltipText = ({ children, tooltip }) => {
  const [isHovered, setIsHovered] = useState(false);

  const wrapperStyle = {
    position: 'relative',
    display: 'inline-block',
    cursor: 'pointer',
  };

  const textStyle = {
    display: 'inline-block',
    transition: 'transform 0.3s ease, color 0.3s ease',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    color: isHovered ? 'var(--accent-primary)' : 'inherit',
    fontWeight: isHovered ? '600' : 'inherit',
  };

  const tooltipStyle = {
    position: 'absolute',
    bottom: '140%',
    left: '50%',
    backgroundColor: 'var(--bg-secondary, #1a1a1a)',
    color: 'var(--text-primary, #fff)',
    padding: '0.6rem 1rem',
    borderRadius: '8px',
    border: '1px solid var(--border-color, #333)',
    whiteSpace: 'nowrap',
    opacity: isHovered ? 1 : 0,
    visibility: isHovered ? 'visible' : 'hidden',
    transition: 'opacity 0.3s ease, transform 0.3s ease',
    transform: isHovered ? 'translateX(-50%) translateY(0)' : 'translateX(-50%) translateY(10px)',
    boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    zIndex: 100,
    fontSize: '0.85rem',
    pointerEvents: 'none', // Prevents tooltip from interfering with mouse leave
  };

  // Small triangle arrow for the tooltip
  const arrowStyle = {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    borderWidth: '6px',
    borderStyle: 'solid',
    borderColor: 'var(--border-color, #333) transparent transparent transparent',
    display: isHovered ? 'block' : 'none',
  };

  return (
    <span 
      style={wrapperStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span style={textStyle}>{children}</span>
      <div style={tooltipStyle}>
        {tooltip}
        <div style={arrowStyle}></div>
      </div>
    </span>
  );
};

export default TooltipText;
