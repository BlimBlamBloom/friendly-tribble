// js/utils/gameHelpers.js

export const getCurrentSpeed = (score) => {
    const speedIncrease = Math.floor(score / 10) * 0.03;
    return 0.20 + speedIncrease;
};

export const getSpawnInterval = (score) => {
    if (score < 30) {
        return 5000;
    }
    const level = Math.floor((score - 30) / 10);
    return Math.max(1600, 4000 - (level * 300));
};

export const checkMatch = (drop1, drop2) => {
    if (drop1.type === drop2.type) return false;
    
    const pronounDrop = drop1.type === 'pronoun' ? drop1 : drop2;
    const conjugationDrop = drop1.type === 'conjugation' ? drop1 : drop2;
    
    return conjugationDrop.matchData.pronoun === pronounDrop.matchData.pronoun;
};
