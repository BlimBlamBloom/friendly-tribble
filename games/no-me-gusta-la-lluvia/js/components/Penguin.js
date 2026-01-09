// js/components/Penguin.js

const { createElement: e } = React;

export const Penguin = ({ direction = 1 }) => {
    return e('svg', 
        { 
            width: 140, 
            height: 120, 
            viewBox: '0 0 140 120',
            style: { transform: direction === 1 ? 'scaleX(1)' : 'scaleX(-1)' }
        },
        e('ellipse', { cx: 70, cy: 112, rx: 30, ry: 6, fill: '#000', opacity: 0.2 }),
        e('ellipse', { cx: 70, cy: 75, rx: 35, ry: 42, fill: '#2c3e50' }),
        e('ellipse', { cx: 72, cy: 78, rx: 26, ry: 35, fill: '#ecf0f1' }),
        e('ellipse', { cx: 45, cy: 65, rx: 8, ry: 22, fill: '#2c3e50' }),
        e('ellipse', { cx: 85, cy: 50, rx: 18, ry: 16, fill: '#2c3e50' }),
        e('ellipse', { cx: 88, cy: 52, rx: 14, ry: 12, fill: '#ecf0f1' }),
        e('circle', { cx: 92, cy: 50, r: 6, fill: '#000' }),
        e('circle', { cx: 93, cy: 49, r: 2, fill: '#fff' }),
        e('path', { d: 'M 100 58 L 108 60 L 106 64 L 100 62 Z', fill: '#ff8c42' }),
        e('path', { d: 'M 102 60 L 106 61 L 105 63 L 102 62 Z', fill: '#ffa500' }),
        e('ellipse', { cx: 58, cy: 105, rx: 16, ry: 8, fill: '#ff8c42', className: 'animate-bounce', style: { animationDuration: '0.4s' } }),
        e('path', { d: 'M 50 105 L 45 110 L 52 108 Z', fill: '#ffa500' }),
        e('path', { d: 'M 58 105 L 54 110 L 60 108 Z', fill: '#ffa500' }),
        e('path', { d: 'M 66 105 L 63 110 L 68 108 Z', fill: '#ffa500' }),
        e('ellipse', { cx: 82, cy: 105, rx: 16, ry: 8, fill: '#ff8c42', className: 'animate-bounce', style: { animationDuration: '0.4s', animationDelay: '0.2s' } }),
        e('path', { d: 'M 74 105 L 69 110 L 76 108 Z', fill: '#ffa500' }),
        e('path', { d: 'M 82 105 L 78 110 L 84 108 Z', fill: '#ffa500' }),
        e('path', { d: 'M 90 105 L 87 110 L 92 108 Z', fill: '#ffa500' }),
        e('ellipse', { cx: 72, cy: 90, rx: 8, ry: 10, fill: '#fff', opacity: 0.3 })
    );
};
