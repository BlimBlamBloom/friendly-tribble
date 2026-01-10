// js/components/ModeSelection.js

import { Penguin } from './Penguin.js';

const { createElement: e } = React;

export const ModeSelection = ({ onSelectMode }) => {
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
        e('div',
            {
                style: {
                    marginBottom: '2rem',
                    position: 'relative',
                    zIndex: 10
                }
            },
            e(Penguin, { direction: 1 })
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
                        marginBottom: '3rem',
                        textShadow: '0 4px 6px rgba(0,0,0,0.3)'
                    }
                },
                'Juegos de Español'
            ),
            e('div',
                {
                    style: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem',
                        alignItems: 'center'
                    }
                },
                e('button',
                    {
                        onClick: () => onSelectMode('verbs'),
                        style: {
                            backgroundColor: '#2563eb',
                            color: 'white',
                            fontSize: '1.5rem',
                            padding: '1.5rem 3rem',
                            borderRadius: '0.5rem',
                            border: 'none',
                            cursor: 'pointer',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                            transition: 'background-color 0.2s',
                            minWidth: '350px'
                        },
                        onMouseOver: (ev) => ev.target.style.backgroundColor = '#1d4ed8',
                        onMouseOut: (ev) => ev.target.style.backgroundColor = '#2563eb'
                    },
                    '🔤 Conjugación de Verbos'
                ),
                e('button',
                    {
                        onClick: () => onSelectMode('vocab'),
                        style: {
                            backgroundColor: '#16a34a',
                            color: 'white',
                            fontSize: '1.5rem',
                            padding: '1.5rem 3rem',
                            borderRadius: '0.5rem',
                            border: 'none',
                            cursor: 'pointer',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
                            transition: 'background-color 0.2s',
                            minWidth: '350px'
                        },
                        onMouseOver: (ev) => ev.target.style.backgroundColor = '#15803d',
                        onMouseOut: (ev) => ev.target.style.backgroundColor = '#16a34a'
                    },
                    '📚 Vocabulario Español-中文'
                )
            )
        )
    );
};
