// js/components/GameScreen.jsx

import React from 'react';
import { Penguin } from './Penguin.jsx';
import { Raindrop } from './Raindrop.jsx';
import { GameOver } from './GameOver.jsx';

/**
 * Main gameplay screen component
 * @param {Object} props - Component properties
 */
export const GameScreen = ({ 
    score,              // Current score
    misses,             // Current misses
    drops,              // Array of raindrops
    onDropClick,        // Function when drop is clicked
    penguinPos,         // Penguin position
    penguinDirection,   // Penguin direction
    gameOver,           // Is game over?
    gameWon,            // Did player win?
    onRestart           // Function to restart
}) => {
    return (
        <>
            {/* Score display (top left) */}
            <div style={{
                position: 'absolute',
                top: '1rem',
                left: '1rem',
                color: 'white',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                backgroundColor: 'rgba(0,0,0,0.5)',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem'
            }}>
                Puntos: {score}/100
            </div>
            
            {/* Misses display (top right) */}
            <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                color: 'white',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                backgroundColor: 'rgba(0,0,0,0.5)',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem'
            }}>
                Errores: {misses}/3
            </div>

            {/* Render all game raindrops */}
            {drops.map(drop => (
                <Raindrop
                    key={drop.id}
                    drop={drop}
                    onClick={() => onDropClick(drop)}
                    isTitle={false} // Game drops (with text, interactive)
                />
            ))}

            {/* Penguin at bottom */}
            <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: `${penguinPos}%`,
                transform: 'translateX(-50%)', // Center penguin on position
                transition: 'all 0.3s ease-linear'
            }}>
                <Penguin direction={penguinDirection} />
            </div>

            {/* Game over overlay (only shows if game ended) */}
            {(gameOver || gameWon) && (
                <GameOver 
                    gameWon={gameWon}
                    score={score}
                    onRestart={onRestart}
                />
            )}
        </>
    );
};
