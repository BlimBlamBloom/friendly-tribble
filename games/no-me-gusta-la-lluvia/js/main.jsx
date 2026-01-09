// js/main.js

const { createElement } = React;
const { render } = ReactDOM;

// Import our Game component
import { Game } from './components/Game.js';

// Render without JSX
render(
    createElement(Game),
    document.getElementById('root')
);
