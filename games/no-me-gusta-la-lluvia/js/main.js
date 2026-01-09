// js/main.js

import { Game } from './components/Game.js';

const { createElement } = React;

// Render the Game component into the #root div
ReactDOM.render(
    createElement(Game),
    document.getElementById('root')
);
