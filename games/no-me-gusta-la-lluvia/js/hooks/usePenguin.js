// js/hooks/usePenguin.js

const { useState, useEffect } = React;

export const usePenguin = (isActive) => {
    const [penguinPos, setPenguinPos] = useState(10);
    const [penguinDirection, setPenguinDirection] = useState(1);

    useEffect(() => {
        if (!isActive) return;

        const moveInterval = setInterval(() => {
            setPenguinPos(prev => {
                const next = prev + penguinDirection * 1.2;
                if (next > 90 || next < 10) {
                    setPenguinDirection(d => -d);
                    return prev;
                }
                return next;
            });
        }, 50);

        return () => clearInterval(moveInterval);
    }, [isActive, penguinDirection]);

    const reset = () => {
        setPenguinPos(10);
        setPenguinDirection(1);
    };

    return { penguinPos, penguinDirection, reset };
};
