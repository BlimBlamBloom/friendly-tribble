// js/components/GameScreen.js

import { Penguin } from './Penguin.js';
import { Raindrop } from './Raindrop.js';
import { GameOver } from './GameOver.js';

const { createElement: e } = React;

export const GameScreen = ({ 
    score, 
    misses, 
    drops, 
    onDropClick, 
    penguinPos, 
    penguinDirection, 
    gameOver, 
    gameWon, 
    onRestart 
}) => {
    const elements = [
        e('div',
            {
                key: 'score',
                style: {
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    color: 'white',
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem'
                }
            },
            `Puntos: ${score}/100`
        ),
        e('div',
            {
                key: 'misses',
                style: {
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    color: 'white',
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    padding: '0.5rem 1rem',
                    borderRadius: '0.5rem'
                }
            },
            `Errores: ${misses}/3`
        ),
        ...drops.map(drop =>
            e(Raindrop, {
                key: drop.id,
                drop: drop,
                onClick: () => onDropClick(drop),
                isTitle: false
            })
        ),
        e('div',
            {
                key: 'penguin',
                style: {
                    position: 'absolute',
                    bottom: '2rem',
                    left: `${penguinPos}%`,
                    transform: 'translateX(-50%)',
                    transition: 'all 0.3s ease-linear'
                }
            },
            e(Penguin, { direction: penguinDirection })
        )
    ];

    if (gameOver || gameWon) {
        elements.push(
            e(GameOver, {
                key: 'gameover',
                gameWon: gameWon,
                score: score,
                onRestart: onRestart
            })
        );
    }

    return e(React.Fragment, null, ...elements);
};
