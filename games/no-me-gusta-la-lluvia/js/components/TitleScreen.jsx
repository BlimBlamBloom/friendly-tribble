// js/components/TitleScreen.jsx

import React from 'react';
import { Penguin } from './Penguin.jsx';
import { Raindrop } from './Raindrop.jsx';

/**
 * Title/Menu Screen Component
 * @param {Object} props - Component properties
 * @param {Function} props.onStart - Function to call when "Jugar" is clicked
 * @param {number} props.penguinPos - Penguin position (0-100)
 * @param {number} props.penguinDirection - Penguin direction (1 or -1)
 * @param {Array} props.titleRaindrops - Array of decorative raindrops
 */
export const TitleScreen = ({ onStart, penguinPos, penguinDirection, titleRaindrops }) => {
    return (
        <div style={{
            position: 'absolute',
            inset: 0, // Same as top:0, right:0, bottom:0, left:0
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {/* Render all decorative raindrops */}
            {titleRaindrops.map(drop => (
                <Raindrop 
                    key={drop.id}  // Unique key for React
                    drop={drop} 
                    isTitle={true}  // Simple decorative drops
                />
            ))}
            
            {/* Penguin walking back and forth */}
            <div style={{
                transition: 'all 0.3s ease-linear',
                marginBottom: '2rem',
                position: 'relative',
                zIndex: 10, // Appear above raindrops
                left: `${penguinPos - 50}%` // Center penguin at position
            }}>
                <Penguin direction={penguinDirection} />
            </div>
            
            {/* Title and button */}
            <div style={{ 
                textAlign: 'center', 
                position: 'relative', 
                zIndex: 10 
            }}>
                <h1 style={{
                    fontSize: '3.75rem',
                    fontWeight: 'bold',
                    color: 'white',
                    marginBottom: '2rem',
                    textShadow: '0 4px 6px rgba(0,0,0,0.3)'
                }}>
                    No me gusta la lluvia
                </h1>
                
                {/* Start button */}
                <button
                    onClick={onStart}
                    style={{
                        backgroundColor: '#2563eb',
                        color: 'white',
                        fontSize: '1.5rem',
                        padding: '1rem 2rem',
                        borderRadius: '0.5rem',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                        transition: 'background-color 0.2s'
                    }}
                    // Hover effect
                    onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
                >
                    Jugar
                </button>
            </div>
        </div>
    );
};
