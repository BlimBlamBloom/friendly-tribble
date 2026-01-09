// js/utils/gameHelpers.js

/**
 * Calculate how fast drops should fall based on score
 * @param {number} score - Current score
 * @returns {number} - Speed multiplier
 */
export const getCurrentSpeed = (score) => {
    // Every 10 points, increase speed by 0.03
    const speedIncrease = Math.floor(score / 10) * 0.03;
    return 0.12 + speedIncrease; // Base speed + increase
};

/**
 * Calculate how often new drops should spawn based on score
 * @param {number} score - Current score
 * @returns {number} - Milliseconds between spawns
 */
export const getSpawnInterval = (score) => {
    // First 30 points: spawn slowly (every 5 seconds)
    if (score < 30) {
        return 5000;
    }
    
    // After 30 points: gradually speed up
    const level = Math.floor((score - 30) / 10);
    return Math.max(1600, 4000 - (level * 300)); // Fastest: 1.6 seconds
};

/**
 * Check if two drops match (pronoun + conjugation with same pronoun)
 * @param {Object} drop1 - First drop
 * @param {Object} drop2 - Second drop
 * @returns {boolean} - True if they match
 */
export const checkMatch = (drop1, drop2) => {
    // Can't match if same type
    if (drop1.type === drop2.type) return false;
    
    // Figure out which is which
    const pronounDrop = drop1.type === 'pronoun' ? drop1 : drop2;
    const conjugationDrop = drop1.type === 'conjugation' ? drop1 : drop2;
    
    // Check if the pronoun in the conjugation matches the pronoun drop
    return conjugationDrop.matchData.pronoun === pronounDrop.matchData.pronoun;
};
