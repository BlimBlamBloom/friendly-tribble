// js/hooks/useGameLogic.js

import { checkMatch } from '../utils/gameHelpers.js';

const { useState } = React;

export const useGameLogic = () => {
    const [score, setScore] = useState(0);
    const [misses, setMisses] = useState(0);
    const [selectedDrop, setSelectedDrop] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [gameWon, setGameWon] = useState(false);

    const handleDropClick = (drop, drops, setDrops) => {
        if (gameOver || gameWon) return;

        if (!selectedDrop) {
            setSelectedDrop(drop);
            setDrops(prev => prev.map(d => 
                d.id === drop.id ? { ...d, selected: true } : d
            ));
        } else {
            if (selectedDrop.id === drop.id) {
                setSelectedDrop(null);
                setDrops(prev => prev.map(d => 
                    d.id === drop.id ? { ...d, selected: false } : d
                ));
                return;
            }

            if (selectedDrop.type === drop.type) {
                setSelectedDrop(drop);
                setDrops(prev => prev.map(d => {
                    if (d.id === drop.id) return { ...d, selected: true };
                    if (d.id === selectedDrop.id) return { ...d, selected: false };
                    return d;
                }));
                return;
            }

            if (checkMatch(selectedDrop, drop)) {
                setDrops(prev => prev.filter(d => 
                    d.id !== selectedDrop.id && d.id !== drop.id
                ));
                setScore(s => {
                    const newScore = s + 1;
                    if (newScore >= 100) {
                        setGameWon(true);
                    }
                    return newScore;
                });
                setSelectedDrop(null);
            } else {
                setSelectedDrop(null);
                setDrops(prev => prev.map(d => ({ ...d, selected: false })));
            }
        }
    };

    const handleMiss = (count) => {
        setMisses(m => {
            const newMisses = m + count;
            if (newMisses >= 3) {
                setGameOver(true);
            }
            return newMisses;
        });
    };

    const reset = () => {
        setScore(0);
        setMisses(0);
        setSelectedDrop(null);
        setGameOver(false);
        setGameWon(false);
    };

    return {
        score,
        misses,
        selectedDrop,
        gameOver,
        gameWon,
        handleDropClick,
        handleMiss,
        reset
    };
};
