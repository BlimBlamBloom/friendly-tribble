// js/components/GameOver.js

const { createElement: e } = React;

export const GameOver = ({ gameWon, score, onRestart }) => {
    return e('div',
        {
            style: {
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.7)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }
        },
        e('div',
            {
                style: {
                    backgroundColor: 'white',
                    padding: '2rem',
                    borderRadius: '0.5rem',
                    textAlign: 'center'
                }
            },
            e('h2',
                {
                    style: {
                        fontSize: '1.875rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem'
                    }
                },
                gameWon ? '¡Felicidades! 🎉' : '¡Juego Terminado! 😿'
            ),
            e('p',
                {
                    style: {
                        fontSize: '1.25rem',
                        marginBottom: '1.5rem'
                    }
                },
                gameWon ? '¡Llegaste a casa sano y salvo!' : '¡Al pingüino no le gusta la lluvia!'
            ),
            e('p',
                {
                    style: {
                        fontSize: '1.125rem',
                        marginBottom: '1.5rem'
                    }
                },
                `Puntuación Final: ${score}/100`
            ),
            e('button',
                {
                    onClick: onRestart,
                    style: {
                        backgroundColor: '#2563eb',
                        color: 'white',
                        padding: '0.75rem 1.5rem',
                        borderRadius: '0.5rem',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                    },
                    onMouseOver: (ev) => ev.target.style.backgroundColor = '#1d4ed8',
                    onMouseOut: (ev) => ev.target.style.backgroundColor = '#2563eb'
                },
                'Jugar de Nuevo'
            )
        )
    );
};
