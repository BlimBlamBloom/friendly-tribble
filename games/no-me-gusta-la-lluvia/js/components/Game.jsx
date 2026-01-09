// js/components/Game.jsx

// Import React and useState (for managing which screen to show)
import React, { useState } from 'react';

// Import our screen components
import { TitleScreen } from './TitleScreen.jsx';
import { GameScreen } from './GameScreen.jsx';

// Import our custom hooks (the reusable logic we created)
import { usePenguin } from '../hooks/usePenguin.js';
import { useGameLogic } from '../hooks/useGameLogic.js';
import { useRaindrops, useTitleRaindrops } from '../hooks/useRaindrops.js';

/**
 * Main Game Component - orchestrates everything
 * This is the "conductor" that brings all pieces together
 */
export const Game = () => {
    // ==========================================
    // SECTION 1: SCREEN STATE
    // ==========================================
    // This decides which screen the player sees
    // true = title screen, false = game screen
    const [showTitle, setShowTitle] = useState(true);
    
    // ==========================================
    // SECTION 2: PENGUIN MOVEMENT
    // ==========================================
    // We need TWO penguins because they move independently:
    // - One for title screen
    // - One for game screen
    
    // Title penguin (active when showTitle is true)
    const titlePenguin = usePenguin(showTitle);
    
    // Game penguin (active when showTitle is false)
    const gamePenguin = usePenguin(!showTitle);
    
    // What does this give us?
    // titlePenguin = { penguinPos, penguinDirection, reset }
    // gamePenguin = { penguinPos, penguinDirection, reset }
    
    // ==========================================
    // SECTION 3: TITLE SCREEN RAIN (decorative)
    // ==========================================
    // Simple raindrops that fall on the title screen
    const { titleRaindrops, reset: resetTitleRain } = useTitleRaindrops(showTitle);
    
    // What does this give us?
    // titleRaindrops = array of simple drops with {id, x, y}
    // resetTitleRain = function to clear them
    
    // ==========================================
    // SECTION 4: GAME LOGIC
    // ==========================================
    // All the game rules: scoring, matching, win/lose
    const {
        score,              // Current score (number)
        misses,             // How many drops missed (number)
        selectedDrop,       // Currently selected drop (object or null)
        gameOver,           // Lost? (boolean)
        gameWon,            // Won? (boolean)
        handleDropClick,    // Function to call when player clicks drop
        handleMiss,         // Function to call when drop reaches bottom
        reset: resetGameLogic  // Function to reset all game state
    } = useGameLogic();
    
    // ==========================================
    // SECTION 5: GAME RAINDROPS (interactive)
    // ==========================================
    // The falling raindrops players click on
    const { drops, setDrops, reset: resetDrops } = useRaindrops({
        // Configuration object we pass to the hook:
        isPlaying: !showTitle && !gameOver && !gameWon,  // Only spawn when actually playing
        score,              // Current score (affects speed)
        onMiss: handleMiss, // Function to call when drops miss
        onWin: () => {}     // Not used (win is handled in useGameLogic)
    });
    
    // What does this give us?
    // drops = array of game drops with {id, text, type, x, y, selected, etc}
    // setDrops = function to update the drops array
    // resetDrops = function to clear all drops

    // ==========================================
    // SECTION 6: GAME ACTIONS (functions we pass to child components)
    // ==========================================
    
    /**
     * Start the game - transition from title to game
     * Called when player clicks "Jugar" button
     */
    const startGame = () => {
        setShowTitle(false);    // Hide title, show game
        resetGameLogic();       // Reset score, misses, etc to 0
        resetDrops();           // Clear any existing drops
    };

    /**
     * Reset everything - go back to title screen
     * Called when player clicks "Jugar de Nuevo" after game over
     */
    const restartGame = () => {
        setShowTitle(true);         // Show title screen
        titlePenguin.reset();       // Reset title penguin to start position
        gamePenguin.reset();        // Reset game penguin to start position
        resetTitleRain();           // Clear title raindrops
        resetGameLogic();           // Reset score/misses/etc
        resetDrops();               // Clear game drops
    };

    // ==========================================
    // SECTION 7: RENDER (what shows on screen)
    // ==========================================
    return (
        // Main container - fills entire viewport
        <div style={{
            width: '100%',
            height: '100vh',
            background: 'linear-gradient(to bottom, #475569, #64748b, #6b7280)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* CONDITIONAL RENDERING: Show one screen at a time */}
            {showTitle ? (
                // ====== TITLE SCREEN ======
                <TitleScreen
                    onStart={startGame}                             // Pass startGame function
                    penguinPos={titlePenguin.penguinPos}           // Pass penguin position
                    penguinDirection={titlePenguin.penguinDirection} // Pass penguin direction
                    titleRaindrops={titleRaindrops}                // Pass array of raindrops
                />
            ) : (
                // ====== GAME SCREEN ======
                <GameScreen
                    score={score}                                   // Pass current score
                    misses={misses}                                 // Pass current misses
                    drops={drops}                                   // Pass array of game drops
                    onDropClick={(drop) => handleDropClick(drop, drops, setDrops)} // Pass click handler
                    penguinPos={gamePenguin.penguinPos}            // Pass penguin position
                    penguinDirection={gamePenguin.penguinDirection} // Pass penguin direction
                    gameOver={gameOver}                             // Pass game over status
                    gameWon={gameWon}                               // Pass game won status
                    onRestart={restartGame}                         // Pass restart function
                />
            )}
        </div>
    );
};
