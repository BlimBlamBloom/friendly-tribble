// js/utils/dropHelpers.js

// Import the verb data we need
import { verbs, pronouns } from '../data/verbs.js';

/**
 * Check if a position is too close to existing drops
 * @param {number} x - X position to check
 * @param {number} y - Y position to check
 * @param {Array} existingDrops - Array of existing raindrops
 * @param {number} minDistance - Minimum distance required
 * @returns {boolean} - True if too close, false if okay
 */
export const isPositionTooClose = (x, y, existingDrops, minDistance = 15) => {
    // Check each existing drop
    return existingDrops.some(drop => {
        // Calculate distance using Pythagorean theorem: √((x2-x1)² + (y2-y1)²)
        const distance = Math.sqrt(
            Math.pow(drop.x - x, 2) + Math.pow(drop.y - y, 2)
        );
        return distance < minDistance;
    });
};

/**
 * Find a valid position that isn't too close to other drops
 * @param {Array} existingDrops - Array of existing raindrops
 * @param {number} minDistance - Minimum distance required
 * @returns {Object} - {x, y} coordinates
 */
export const findValidPosition = (existingDrops, minDistance = 15) => {
    let attempts = 0;
    let x, y;
    
    // Keep trying to find a good spot (max 100 tries)
    do {
        x = Math.random() * 70 + 10;  // Random X between 10-80%
        y = -10 - Math.random() * 20; // Random Y above screen
        attempts++;
    } while (isPositionTooClose(x, y, existingDrops, minDistance) && attempts < 100);
    
    return { x, y };
};

/**
 * Create a new raindrop with random verb/pronoun
 * @param {Object} dropIdRef - Reference to drop ID counter
 * @param {string} type - 'pronoun' or 'conjugation' or null (random)
 * @param {string} matchPronoun - If provided, use this pronoun
 * @param {Array} existingDrops - Array of existing drops to avoid overlap
 * @returns {Object} - New raindrop object
 */
export const createDrop = (dropIdRef, type = null, matchPronoun = null, existingDrops = []) => {
    let text, dropType, matchData;

    // Decide what type of drop to create
    if (type === 'pronoun' || (!type && Math.random() > 0.5)) {
        // Create a pronoun drop
        text = matchPronoun || pronouns[Math.floor(Math.random() * pronouns.length)];
        dropType = 'pronoun';
        matchData = { pronoun: text };
    } else {
        // Create a conjugation drop
        const verbKeys = Object.keys(verbs);
        const verb = verbKeys[Math.floor(Math.random() * verbKeys.length)];
        const pronoun = matchPronoun || pronouns[Math.floor(Math.random() * pronouns.length)];
        text = verbs[verb][pronoun];
        dropType = 'conjugation';
        matchData = { verb, pronoun, conjugation: text };
    }

    // Find a good position for this drop
    const position = findValidPosition(existingDrops, 15);

    // Return the complete drop object
    return {
        id: dropIdRef.current++,  // Unique ID
        text,                      // What shows on the drop
        type: dropType,            // 'pronoun' or 'conjugation'
        matchData,                 // Data needed to check matches
        x: position.x,             // Horizontal position
        y: position.y,             // Vertical position
        selected: false            // Is it currently selected?
    };
};

/**
 * Create a simple raindrop for the title screen (no text)
 * @param {Object} titleDropIdRef - Reference to title drop ID counter
 * @returns {Object} - Simple drop with just position
 */
export const createTitleDrop = (titleDropIdRef) => {
    return {
        id: titleDropIdRef.current++,
        x: Math.random() * 90 + 5,  // Random X position
        y: -10                       // Start above screen
    };
};

/**
 * Check if a drop has a matching pair in the array
 * @param {Object} drop - The drop to check
 * @param {Array} allDrops - All drops to search through
 * @returns {boolean} - True if a match exists
 */
export const hasMatchingPair = (drop, allDrops) => {
    return allDrops.some(otherDrop => {
        // Can't match with itself
        if (otherDrop.id === drop.id) return false;
        
        // Can't match with same type (pronoun can't match pronoun)
        if (drop.type === otherDrop.type) return false;
        
        // Check if pronouns match
        return drop.matchData.pronoun === otherDrop.matchData.pronoun;
    });
};
