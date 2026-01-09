// js/hooks/useRaindrops.js

import { useState, useEffect, useRef } from 'react';
import { createDrop, createTitleDrop, hasMatchingPair } from '../utils/dropHelpers.js';
import { getCurrentSpeed, getSpawnInterval } from '../utils/gameHelpers.js';

/**
 * Custom hook to manage game raindrops (spawning, falling, matching)
 * @param {Object} gameState - Current game state
 * @returns {Object} - { drops, setDrops, reset }
 */
export const useRaindrops = (gameState) => {
    const { isPlaying, score, onMiss, onWin } = gameState;
    
    // STATE
    const [drops, setDrops] = useState([]);
    
    // REFS: useRef creates a value that persists but doesn't trigger re-renders
    // Think of it like a box that holds a value
    const dropIdRef = useRef(0);           // Counter for unique IDs
    const spawnTimerRef = useRef(null);    // Reference to spawn interval
    const checkTimerRef = useRef(null);    // Reference to check interval

    // EFFECT 1: Spawn new drops
    useEffect(() => {
        if (!isPlaying) return; // Only spawn when game is active

        let firstDropRef = null; // Temporary storage for first drop

        /**
         * Function to spawn a pair of matching drops
         */
        const spawnDrop = () => {
            // Create first drop
            setDrops(prev => {
                const newDrop = createDrop(dropIdRef, null, null, prev);
                firstDropRef = newDrop; // Remember this drop
                return [...prev, newDrop]; // Add to array
            });
            
            // After 1-3 seconds, create matching drop
            setTimeout(() => {
                setDrops(prev => {
                    if (!firstDropRef) return prev; // Safety check
                    
                    // Create opposite type with same pronoun
                    const matchType = firstDropRef.type === 'pronoun' ? 'conjugation' : 'pronoun';
                    const matchDrop = createDrop(dropIdRef, matchType, firstDropRef.matchData.pronoun, prev);
                    
                    firstDropRef = null; // Clear reference
                    return [...prev, matchDrop]; // Add to array
                });
            }, 1000 + Math.random() * 2000); // Random delay 1-3 seconds
        };

        // Spawn first pair immediately
        spawnDrop();
        
        // Set up interval to spawn more pairs
        // Interval gets faster as score increases (via getSpawnInterval)
        spawnTimerRef.current = setInterval(spawnDrop, getSpawnInterval(score));

        // CLEANUP: Clear interval when component unmounts or dependencies change
        return () => {
            if (spawnTimerRef.current) clearInterval(spawnTimerRef.current);
        };
    }, [isPlaying, score]); // Re-run when playing status or score changes

    // EFFECT 2: Ensure matches exist (so game is always winnable)
    useEffect(() => {
        if (!isPlaying) return;

        /**
         * Check if drops near middle have matches, spawn one if not
         */
        const ensureMatchExists = () => {
            setDrops(prev => {
                // Find drops between 50-55% down screen
                const dropsAtHalf = prev.filter(d => d.y >= 50 && d.y < 55);
                
                // Check each drop at this level
                for (let drop of dropsAtHalf) {
                    // If no matching pair exists, create one
                    if (!hasMatchingPair(drop, prev)) {
                        const matchType = drop.type === 'pronoun' ? 'conjugation' : 'pronoun';
                        const matchDrop = createDrop(dropIdRef, matchType, drop.matchData.pronoun, prev);
                        return [...prev, matchDrop];
                    }
                }
                return prev; // No changes needed
            });
        };

        // Check every 100ms
        checkTimerRef.current = setInterval(ensureMatchExists, 100);

        // CLEANUP
        return () => {
            if (checkTimerRef.current) clearInterval(checkTimerRef.current);
        };
    }, [isPlaying, drops]); // Re-run when drops array changes

    // EFFECT 3: Move drops down the screen
    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setDrops(prev => {
                // Move each drop down by current speed
                const updated = prev.map(drop => ({
                    ...drop,
                    y: drop.y + getCurrentSpeed(score)
                }));

                // Check for drops that reached bottom (95% down)
                const landed = updated.filter(d => d.y >= 95);
                
                if (landed.length > 0) {
                    // Call miss handler (increases miss count)
                    onMiss(landed.length);
                    // Remove landed drops
                    return updated.filter(d => d.y < 95);
                }

                return updated; // Return updated positions
            });
        }, 50); // Update every 50ms (smooth animation)

        // CLEANUP
        return () => clearInterval(interval);
    }, [isPlaying, score, onMiss]); // Re-run when these change

    /**
     * Reset drops to empty
     */
    const reset = () => {
        setDrops([]);
        dropIdRef.current = 0;
    };

    // Return values for other components to use
    return { 
        drops,      // Array of all drops
        setDrops,   // Function to update drops
        reset       // Function to reset
    };
};

/**
 * Separate hook for title screen raindrops (simpler, decorative only)
 * @param {boolean} isActive - Whether title screen is showing
 * @returns {Object} - { titleRaindrops, reset }
 */
export const useTitleRaindrops = (isActive) => {
    const [titleRaindrops, setTitleRaindrops] = useState([]);
    const titleDropIdRef = useRef(0);

    useEffect(() => {
        if (!isActive) return;

        // Spawn new drop every 300ms
        const rainInterval = setInterval(() => {
            setTitleRaindrops(prev => [...prev, createTitleDrop(titleDropIdRef)]);
        }, 300);

        // Move drops down and remove off-screen ones
        const updateRain = setInterval(() => {
            setTitleRaindrops(prev => 
                prev
                    .map(d => ({ ...d, y: d.y + 0.3 }))  // Move down
                    .filter(d => d.y < 110)               // Remove if past 110%
            );
        }, 50);

        // CLEANUP
        return () => {
            clearInterval(rainInterval);
            clearInterval(updateRain);
        };
    }, [isActive]);

    /**
     * Reset title raindrops
     */
    const reset = () => {
        setTitleRaindrops([]);
        titleDropIdRef.current = 0;
    };

    return { titleRaindrops, reset };
};
