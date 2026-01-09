// js/components/TitleScreen.js

import { Penguin } from './Penguin.js';
import { Raindrop } from './Raindrop.js';

const { createElement: e } = React;

export const TitleScreen = ({ onStart, penguinPos, penguinDirection, titleRaindrops }) => {
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
            e('button',
                {
                    onClick: onStart,
                    style: {
                        backgroundColor: '#2563eb',
                        color: 'white',
                        fontSize: '1.5rem',
                        padding: '1rem 2rem',
                        borderRadius: '0.5rem',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                        transition: 'background-color 0.2s'
                    },
                    onMouseOver: (ev) => ev.target.style.backgroundColor = '#1d4ed8',
                    onMouseOut: (ev) => ev.target.style.backgroundColor = '#2563eb'
                },
                'Jugar'
            )
        )
    );
};
