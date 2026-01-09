// js/components/TitleScreen.js

import { Penguin } from './Penguin.js';
import { Raindrop } from './Raindrop.js';

const { createElement: e, useState } = React;

export const TitleScreen = ({ onStart, penguinPos, penguinDirection, titleRaindrops, selectedVerbSet, onVerbSetChange }) => {
    
    // Function to get button style based on whether it's selected
    const getButtonStyle = (verbSet, isHovered) => {
        const isSelected = selectedVerbSet === verbSet;
        
        return {
            backgroundColor: isSelected ? '#1e40af' : (isHovered ? '#1d4ed8' : '#2563eb'),
            color: 'white',
            fontSize: '1.125rem',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            border: isSelected ? '3px solid #fbbf24' : '3px solid transparent',
            cursor: 'pointer',
            boxShadow: isSelected ? '0 6px 12px rgba(0,0,0,0.4)' : '0 4px 6px rgba(0,0,0,0.3)',
            transition: 'all 0.2s',
            fontWeight: isSelected ? 'bold' : 'normal',
            transform: isSelected ? 'scale(1.05)' : 'scale(1)'
        };
    };

    return e('div',
        {
            style: {
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
            }
        },
        ...titleRaindrops.map(drop => 
            e(Raindrop, { key: drop.id, drop: drop, isTitle: true })
        ),
        e('div',
            {
                style: {
                    transition: 'all 0.3s ease-linear',
                    marginBottom: '2rem',
                    position: 'relative',
                    zIndex: 10,
                    left: `${penguinPos - 50}%`
                }
            },
            e(Penguin, { direction: penguinDirection })
        ),
        e('div',
            {
                style: {
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 10
                }
            },
            e('h1',
                {
                    style: {
                        fontSize: '3.75rem',
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: '2rem',
                        textShadow: '0 4px 6px rgba(0,0,0,0.3)'
                    }
                },
                'No me gusta la lluvia'
            ),
            // Verb selection buttons
            e('div',
                {
                    style: {
                        display: 'flex',
                        gap: '1rem',
                        marginBottom: '2rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap'
                    }
                },
                ...['Verbos 1', 'Verbos 2', 'Verbos 3'].map(verbSet => {
                    return e(VerbButton, {
                        key: verbSet,
                        verbSet: verbSet,
                        isSelected: selectedVerbSet === verbSet,
                        onClick: () => {
                            console.log('Clicked:', verbSet); // Debug log
                            onVerbSetChange(verbSet);
                        }
                    });
                })
            ),
            // Start button
            e('button',
                {
                    onClick: onStart,
                    style: {
                        backgroundColor: '#16a34a',
                        color: 'white',
                        fontSize: '1.5rem',
                        padding: '1rem 2rem',
                        borderRadius: '0.5rem',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                        transition: 'background-color 0.2s'
                    },
                    onMouseOver: (ev) => ev.target.style.backgroundColor = '#15803d',
                    onMouseOut: (ev) => ev.target.style.backgroundColor = '#16a34a'
                },
                'Jugar'
            )
        )
    );
};

// Separate component for verb buttons with hover state
const VerbButton = ({ verbSet, isSelected, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return e('button',
        {
            onClick: onClick,
            onMouseEnter: () => setIsHovered(true),
            onMouseLeave: () => setIsHovered(false),
            style: {
                backgroundColor: isSelected ? '#1e40af' : (isHovered ? '#1d4ed8' : '#2563eb'),
                color: 'white',
                fontSize: '1.125rem',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                border: isSelected ? '3px solid #fbbf24' : '3px solid transparent',
                cursor: 'pointer',
                boxShadow: isSelected ? '0 6px 12px rgba(0,0,0,0.4)' : '0 4px 6px rgba(0,0,0,0.3)',
                transition: 'all 0.2s',
                fontWeight: isSelected ? 'bold' : 'normal',
                transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                minWidth: '120px'
            }
        },
        verbSet
    );
};
