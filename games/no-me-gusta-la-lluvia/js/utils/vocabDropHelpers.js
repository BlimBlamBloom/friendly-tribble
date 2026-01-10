// js/utils/vocabDropHelpers.js

import { vocabularySets } from '../data/vocabulary.js';
import { findValidPosition } from './dropHelpers.js';

export const createVocabDrop = (dropIdRef, type = null, matchWord = null, existingDrops = [], selectedVocabSet = 'Animals') => {
    const vocabSet = vocabularySets[selectedVocabSet];
    const words = Object.keys(vocabSet);
    let text, dropType, matchData;

    if (type === 'spanish' || (!type && Math.random() > 0.5)) {
        // Spanish word drop
        const word = matchWord || words[Math.floor(Math.random() * words.length)];
        text = word;
        dropType = 'spanish';
        matchData = { word: word };
    } else {
        // Chinese translation drop
        const word = matchWord || words[Math.floor(Math.random() * words.length)];
        text = vocabSet[word];
        dropType = 'chinese';
        matchData = { word: word };
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

export const hasVocabMatchingPair = (drop, allDrops) => {
    return allDrops.some(otherDrop => {
        if (otherDrop.id === drop.id) return false;
        if (drop.type === otherDrop.type) return false;
        return drop.matchData.word === otherDrop.matchData.word;
    });
};
