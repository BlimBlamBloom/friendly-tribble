// js/components/VocabTitleScreen.js

import { Penguin } from './Penguin.js';
import { Raindrop } from './Raindrop.js';
import { vocabularySets } from '../data/vocabulary.js';

const { createElement: e, useState } = React;

export const VocabTitleScreen = ({ onStart, penguinPos, penguinDirection, titleRaindrops, selectedVocabSet, onVocabSetChange }) => {
    
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
                        fontSize: '3rem',
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: '2rem',
                        textShadow: '0 4px 6px rgba(0,0,0,0.3)'
                    }
                },
                'Vocabulario Español-中文'
            ),
            // Vocab set selection buttons
            e('div',
                {
                    style: {
                        display: 'flex',
                        gap: '0.75rem',
                        marginBottom: '2rem',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        maxWidth: '600px'
                    }
                },
                ...Object.keys(vocabularySets).map(setName => {
                    return e(VocabSetButton, {
                        key: setName,
                        setName: setName,
                        isSelected: selectedVocabSet === setName,
                        onClick: () => onVocabSetChange(setName)
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

const VocabSetButton = ({ setName, isSelected, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return e('button',
        {
            onClick: onClick,
            onMouseEnter: () => setIsHovered(true),
            onMouseLeave: () => setIsHovered(false),
            style: {
                backgroundColor: isSelected ? '#15803d' : (isHovered ? '#16a34a' : '#22c55e'),
                color: 'white',
                fontSize: '1rem',
                padding: '0.5rem 1rem',
                borderRadius: '0.5rem',
                border: isSelected ? '3px solid #fbbf24' : '3px solid transparent',
                cursor: 'pointer',
                boxShadow: isSelected ? '0 6px 12px rgba(0,0,0,0.4)' : '0 4px 6px rgba(0,0,0,0.3)',
                transition: 'all 0.2s',
                fontWeight: isSelected ? 'bold' : 'normal',
                transform: isSelected ? 'scale(1.05)' : 'scale(1)',
                minWidth: '100px'
            }
        },
        setName
    );
};
