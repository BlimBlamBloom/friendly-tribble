// js/hooks/usePenguin.js

import { useState, useEffect } from 'react';

/**
 * Custom hook to manage penguin movement
 * @param {boolean} isActive - Whether penguin should be moving
 * @returns {Object} - { penguinPos, penguinDirection, reset }
 */
export const usePenguin = (isActive) => {
    // STATE: "State" is data that can change over time
    // When state changes, React re-renders (updates) the screen
    
    // Position: where the penguin is (0-100, represents percentage)
    const [penguinPos, setPenguinPos] = useState(10);
    
    // Direction: which way penguin is moving (1 = right, -1 = left)
    const [penguinDirection, setPenguinDirection] = useState(1);

    // EFFECT: useEffect runs code when something changes
    // This one runs when isActive or penguinDirection changes
    useEffect(() => {
        // If not active, don't move
        if (!isActive) return;

        // Set up an interval (repeating timer) to move penguin
        const moveInterval = setInterval(() => {
            // Update position
            setPenguinPos(prev => {
                // Calculate next position
                // prev = previous position
                // penguinDirection * 1.2 = how much to move
                const next = prev + penguinDirection * 1.2;
                
                // If penguin hits edge (0-10% or 90-100%)
                if (next > 90 || next < 10) {
                    // Flip direction (multiply by -1)
                    setPenguinDirection(d => -d);
                    return prev; // Don't move this frame
                }
                
                return next; // Move to new position
            });
        }, 50); // Run every 50 milliseconds

        // CLEANUP: When component unmounts or dependencies change, clear interval
        return () => clearInterval(moveInterval);
    }, [isActive, penguinDirection]); // Re-run when these change

    // Reset function to return penguin to start
    const reset = () => {
        setPenguinPos(10);
        setPenguinDirection(1);
    };

    // Return values that other components can use
    return { 
        penguinPos,        // Current position
        penguinDirection,  // Current direction
        reset              // Function to reset
    };
};
