// js/components/GameOver.jsx

import React from 'react';

/**
 * Game Over overlay component
 * @param {Object} props - Component properties
 * @param {boolean} props.gameWon - True if player won
 * @param {number} props.score - Final score
 * @param {Function} props.onRestart - Function to call to restart
 */
export const GameOver = ({ gameWon, score, onRestart }) => {
    return (
        <div style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.7)', // Semi-transparent black overlay
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '2rem',
                borderRadius: '0.5rem',
                textAlign: 'center'
            }}>
                {/* Win or lose message */}
                <h2 style={{
                    fontSize: '1.875rem',
                    fontWeight: 'bold',
                    marginBottom: '1rem'
                }}>
                    {gameWon ? '¡Felicidades! 🎉' : '¡Juego Terminado! 😿'}
                </h2>
                
                {/* Flavor text */}
                <p style={{
                    fontSize: '1.25rem',
                    marginBottom: '1.5rem'
                }}>
                    {gameWon 
                        ? '¡Llegaste a casa sano y salvo!' 
                        : '¡Al pingüino no le gusta la lluvia!'}
                </p>
                
                {/* Final score */}
                <p style={{
                    fontSize: '1.125rem',
                    marginBottom: '1.5rem'
                }}>
                    Puntuación Final: {score}/100
                </p>
                
                {/* Restart button */}
                <button
                    onClick={onRestart}
                    style={{
                        backgroundColor: '#2563eb',
                        color: 'white',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.5rem',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'}
                    onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}
                >
                    Jugar de Nuevo
                </button>
            </div>
        </div>
    );
};
