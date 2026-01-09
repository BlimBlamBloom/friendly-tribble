// js/components/Game.js

import { TitleScreen } from './TitleScreen.js';
import { GameScreen } from './GameScreen.js';
import { usePenguin } from '../hooks/usePenguin.js';
import { useGameLogic } from '../hooks/useGameLogic.js';
import { useRaindrops, useTitleRaindrops } from '../hooks/useRaindrops.js';

const { createElement: e, useState } = React;

export const Game = () => {
    const [showTitle, setShowTitle] = useState(true);
    
    const titlePenguin = usePenguin(showTitle);
    const gamePenguin = usePenguin(!showTitle);
    
    const { titleRaindrops, reset: resetTitleRain } = useTitleRaindrops(showTitle);
    
    const {
        score,
        misses,
        selectedDrop,
        gameOver,
        gameWon,
        handleDropClick,
        handleMiss,
        reset: resetGameLogic
    } = useGameLogic();
    
    const { drops, setDrops, reset: resetDrops } = useRaindrops({
        isPlaying: !showTitle && !gameOver && !gameWon,
        score,
        onMiss: handleMiss,
        onWin: () => {}
    });

    const startGame = () => {
        setShowTitle(false);
        resetGameLogic();
        resetDrops();
    };

    const restartGame = () => {
        setShowTitle(true);
        titlePenguin.reset();
        gamePenguin.reset();
        resetTitleRain();
        resetGameLogic();
        resetDrops();
    };

    return e('div',
        {
            style: {
                width: '100%',
                height: '100vh',
                background: 'linear-gradient(to bottom, #475569, #64748b, #6b7280)',
                position: 'relative',
                overflow: 'hidden'
            }
        },
        showTitle 
            ? e(TitleScreen, {
                onStart: startGame,
                penguinPos: titlePenguin.penguinPos,
                penguinDirection: titlePenguin.penguinDirection,
                titleRaindrops: titleRaindrops
              })
            : e(GameScreen, {
                score: score,
                misses: misses,
                drops: drops,
                onDropClick: (drop) => handleDropClick(drop, drops, setDrops),
                penguinPos: gamePenguin.penguinPos,
                penguinDirection: gamePenguin.penguinDirection,
                gameOver: gameOver,
                gameWon: gameWon,
                onRestart: restartGame
              })
    );
};
