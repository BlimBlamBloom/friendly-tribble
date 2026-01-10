// js/hooks/useVocabRaindrops.js

import { createVocabDrop, hasVocabMatchingPair } from '../utils/vocabDropHelpers.js';
import { getCurrentSpeed, getSpawnInterval } from '../utils/gameHelpers.js';

const { useState, useEffect, useRef } = React;

export const useVocabRaindrops = (gameState) => {
    const { isPlaying, score, onMiss, selectedVocabSet } = gameState;
    const [drops, setDrops] = useState([]);
    const dropIdRef = useRef(0);
    const spawnTimerRef = useRef(null);
    const checkTimerRef = useRef(null);

    useEffect(() => {
        if (!isPlaying) return;

        let firstDropRef = null;

        const spawnDrop = () => {
            setDrops(prev => {
                const newDrop = createVocabDrop(dropIdRef, null, null, prev, selectedVocabSet);
                firstDropRef = newDrop;
                return [...prev, newDrop];
            });
            
            setTimeout(() => {
                setDrops(prev => {
                    if (!firstDropRef) return prev;
                    const matchType = firstDropRef.type === 'spanish' ? 'chinese' : 'spanish';
                    const matchDrop = createVocabDrop(dropIdRef, matchType, firstDropRef.matchData.word, prev, selectedVocabSet);
                    firstDropRef = null;
                    return [...prev, matchDrop];
                });
            }, 1000 + Math.random() * 2000);
        };

        spawnDrop();
        spawnTimerRef.current = setInterval(spawnDrop, getSpawnInterval(score));

        return () => {
            if (spawnTimerRef.current) clearInterval(spawnTimerRef.current);
        };
    }, [isPlaying, score, selectedVocabSet]);

    useEffect(() => {
        if (!isPlaying) return;

        const ensureMatchExists = () => {
            setDrops(prev => {
                const dropsAtHalf = prev.filter(d => d.y >= 50 && d.y < 55);
                
                for (let drop of dropsAtHalf) {
                    if (!hasVocabMatchingPair(drop, prev)) {
                        const matchType = drop.type === 'spanish' ? 'chinese' : 'spanish';
                        const matchDrop = createVocabDrop(dropIdRef, matchType, drop.matchData.word, prev, selectedVocabSet);
                        return [...prev, matchDrop];
                    }
                }
                return prev;
            });
        };

        checkTimerRef.current = setInterval(ensureMatchExists, 100);

        return () => {
            if (checkTimerRef.current) clearInterval(checkTimerRef.current);
        };
    }, [isPlaying, drops, selectedVocabSet]);

    useEffect(() => {
        if (!isPlaying) return;

        const interval = setInterval(() => {
            setDrops(prev => {
                const updated = prev.map(drop => ({
                    ...drop,
                    y: drop.y + getCurrentSpeed(score)
                }));

                const landed = updated.filter(d => d.y >= 95);
                if (landed.length > 0) {
                    onMiss(landed.length);
                    return updated.filter(d => d.y < 95);
                }

                return updated;
            });
        }, 50);

        return () => clearInterval(interval);
    }, [isPlaying, score, onMiss]);

    const reset = () => {
        setDrops([]);
        dropIdRef.current = 0;
    };

    return { drops, setDrops, reset };
};
