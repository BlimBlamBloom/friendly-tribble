// js/components/Raindrop.jsx

import React from 'react';

/**
 * Raindrop component - displays a single raindrop
 * @param {Object} props - Component properties
 * @param {Object} props.drop - Drop data (x, y, text, selected, etc.)
 * @param {Function} props.onClick - Function to call when clicked
 * @param {boolean} props.isTitle - True if this is a title screen drop (no text)
 */
export const Raindrop = ({ drop, onClick, isTitle = false }) => {
    // Title screen drops are simpler (no interaction, no text)
    if (isTitle) {
        return (
            <div
                style={{
                    position: 'absolute',
                    left: `${drop.x}%`,
                    top: `${drop.y}%`,
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <svg 
                    width="60" 
                    height="75" 
                    viewBox="0 0 80 100" 
                    style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }}
                >
                    {/* Water drop shape */}
                    <path 
                        d="M40 5 C20 25, 10 40, 10 60 C10 78, 23 92, 40 92 C57 92, 70 78, 70 60 C70 40, 60 25, 40 5 Z" 
                        fill="#60a5fa"
                        stroke="#3b82f6"
                        strokeWidth="2"
                    />
                </svg>
            </div>
        );
    }

    // Game drops are interactive with text
    return (
        <div
            onClick={onClick}
            style={{
                position: 'absolute',
                cursor: 'pointer',
                transition: 'all 0.2s',
                left: `${drop.x}%`,
                top: `${drop.y}%`,
                transform: `translate(-50%, -50%) scale(${drop.selected ? 1.1 : 1})`
            }}
            // Hover effect: slightly bigger
            onMouseOver={(e) => {
                if (!drop.selected) {
                    e.currentTarget.style.transform = `translate(-50%, -50%) scale(1.05)`;
                }
            }}
            onMouseOut={(e) => {
                if (!drop.selected) {
                    e.currentTarget.style.transform = `translate(-50%, -50%) scale(1)`;
                }
            }}
        >
            <div 
                className={drop.selected ? 'animate-pulse' : ''} 
                style={{ position: 'relative' }}
            >
                <svg 
                    width="80" 
                    height="100" 
                    viewBox="0 0 80 100" 
                    style={{ filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.3))' }}
                >
                    {/* Water drop - changes color when selected */}
                    <path 
                        d="M40 5 C20 25, 10 40, 10 60 C10 78, 23 92, 40 92 C57 92, 70 78, 70 60 C70 40, 60 25, 40 5 Z" 
                        fill={drop.selected ? '#fbbf24' : '#60a5fa'}
                        stroke={drop.selected ? '#f59e0b' : '#3b82f6'}
                        strokeWidth="2"
                    />
                </svg>
                {/* Text overlay */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.125rem',
                    fontWeight: '900',
                    color: 'white',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8), -1px -1px 2px rgba(0,0,0,0.6)',
                    fontFamily: 'Arial, sans-serif',
                    letterSpacing: '0.5px'
                }}>
                    {drop.text}
                </div>
            </div>
        </div>
    );
};
