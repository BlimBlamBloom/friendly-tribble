// js/components/Game.js

import { VerbGame } from './VerbGame.js';
import { VocabGame } from './VocabGame.js';
import { ModeSelection } from './ModeSelection.js';

const { createElement: e, useState } = React;

export const Game = () => {
    const [gameMode, setGameMode] = useState(null); // null, 'verbs', 'vocab'
    
    const selectMode = (mode) => {
        setGameMode(mode);
    };
    
    const backToMenu = () => {
        setGameMode(null);
    };
    
    if (gameMode === null) {
        return e(ModeSelection, { onSelectMode: selectMode });
    } else if (gameMode === 'verbs') {
        return e(VerbGame, { onBackToMenu: backToMenu });
    } else if (gameMode === 'vocab') {
        return e(VocabGame, { onBackToMenu: backToMenu });
    }
};
