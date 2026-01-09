// js/hooks/useGameLogic.js

import { useState } from 'react';
import { checkMatch } from '../utils/gameHelpers.js';

/**
 * Custom hook to manage game logic (score, matching, win/lose)
 * @returns {Object} - Game state and handler functions
 */
export const useGameLogic = () => {
    // GAME STATE
    const [score, setScore] = useState(0);              // Current score
    const [misses, setMisses] = useState(0);            // How many drops missed
    const [selectedDrop, setSelectedDrop] = useState(null); // Currently selected drop
    const [gameOver, setGameOver] = useState(false);    // Lost the game?
    const [gameWon, setGameWon] = useState(false);      // Won the game?

    /**
     * Handle when player clicks a raindrop
     * @param {Object} drop - The drop that was clicked
     * @param {Array} drops - All current drops
     * @param {Function} setDrops - Function to update drops
     */
    const handleDropClick = (drop, drops, setDrops) => {
        // Don't allow clicks if game is over
        if (gameOver || gameWon) return;

        // CASE 1: No drop selected yet - select this one
        if (!selectedDrop) {
            setSelectedDrop(drop);
            // Mark this drop as selected (visual feedback)
            setDrops(prev => prev.map(d => 
                d.id === drop.id ? { ...d, selected: true } : d
            ));
        } 
        // CASE 2: Clicked the same drop again - deselect it
        else {
            if (selectedDrop.id === drop.id) {
                setSelectedDrop(null);
                setDrops(prev => prev.map(d => 
                    d.id === drop.id ? { ...d, selected: false } : d
                ));
                return;
            }

            // CASE 3: Clicked same type (pronoun + pronoun or conjugation + conjugation)
            // Switch selection to new drop
            if (selectedDrop.type === drop.type) {
                setSelectedDrop(drop);
                setDrops(prev => prev.map(d => {
                    if (d.id === drop.id) return { ...d, selected: true };
                    if (d.id === selectedDrop.id) return { ...d, selected: false };
                    return d;
                }));
                return;
            }

            // CASE 4: Clicked different type - check if they match!
            if (checkMatch(selectedDrop, drop)) {
                // CORRECT MATCH! Remove both drops
                setDrops(prev => prev.filter(d => 
                    d.id !== selectedDrop.id && d.id !== drop.id
                ));
                
                // Increase score
                setScore(s => {
                    const newScore = s + 1;
                    // Check for win condition
                    if (newScore >= 100) {
                        setGameWon(true);
                    }
                    return newScore;
                });
                
                setSelectedDrop(null); // Clear selection
            } else {
                // WRONG MATCH - deselect both
                setSelectedDrop(null);
                setDrops(prev => prev.map(d => ({ ...d, selected: false })));
            }
        }
    };

    /**
     * Handle when drops reach the bottom (miss)
     * @param {number} count - How many drops were missed
     */
    const handleMiss = (count) => {
        setMisses(m => {
            const newMisses = m + count;
            // Check for lose condition
            if (newMisses >= 3) {
                setGameOver(true);
            }
            return newMisses;
        });
    };

    /**
     * Reset all game state
     */
    const reset = () => {
        setScore(0);
        setMisses(0);
        setSelectedDrop(null);
        setGameOver(false);
        setGameWon(false);
    };

    // Return everything other components need
    return {
        score,              // Current score
        misses,             // Current misses
        selectedDrop,       // Currently selected drop
        gameOver,           // Is game over?
        gameWon,            // Did player win?
        handleDropClick,    // Function to handle clicks
        handleMiss,         // Function to handle misses
        reset               // Function to reset game
    };
};
