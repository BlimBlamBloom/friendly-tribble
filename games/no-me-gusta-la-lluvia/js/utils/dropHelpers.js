// js/utils/dropHelpers.js

import { verbs, pronouns } from '../data/verbs.js';

export const isPositionTooClose = (x, y, existingDrops, minDistance = 15) => {
    return existingDrops.some(drop => {
        const distance = Math.sqrt(Math.pow(drop.x - x, 2) + Math.pow(drop.y - y, 2));
        return distance < minDistance;
    });
};

export const findValidPosition = (existingDrops, minDistance = 15) => {
    let attempts = 0;
    let x, y;
    do {
        x = Math.random() * 70 + 20;
        y = -10 - Math.random() * 40;
        attempts++;
    } while (isPositionTooClose(x, y, existingDrops, minDistance) && attempts < 100);
    return { x, y };
};

export const createDrop = (dropIdRef, type = null, matchPronoun = null, existingDrops = []) => {
    let text, dropType, matchData;

    if (type === 'pronoun' || (!type && Math.random() > 0.5)) {
        text = matchPronoun || pronouns[Math.floor(Math.random() * pronouns.length)];
        dropType = 'pronoun';
        matchData = { pronoun: text };
    } else {
        const verbKeys = Object.keys(verbs);
        const verb = verbKeys[Math.floor(Math.random() * verbKeys.length)];
        const pronoun = matchPronoun || pronouns[Math.floor(Math.random() * pronouns.length)];
        text = verbs[verb][pronoun];
        dropType = 'conjugation';
        matchData = { verb, pronoun, conjugation: text };
    }

    const position = findValidPosition(existingDrops, 15);

    return {
        id: dropIdRef.current++,
        text,
        type: dropType,
        matchData,
        x: position.x,
        y: position.y,
        selected: false
    };
};

export const createTitleDrop = (titleDropIdRef) => {
    return {
        id: titleDropIdRef.current++,
        x: Math.random() * 90 + 5,
        y: -10
    };
};

export const hasMatchingPair = (drop, allDrops) => {
    return allDrops.some(otherDrop => {
        if (otherDrop.id === drop.id) return false;
        if (drop.type === otherDrop.type) return false;
        return drop.matchData.pronoun === otherDrop.matchData.pronoun;
    });
};
