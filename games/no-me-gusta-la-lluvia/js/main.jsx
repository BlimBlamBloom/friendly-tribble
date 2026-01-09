// js/main.jsx

// Import React library
import React from 'react';

// Import ReactDOM (the bridge between React and the browser's DOM)
import ReactDOM from 'react-dom';

// Import our main Game component
import { Game } from './components/Game.jsx';

/**
 * Entry point - renders the Game component into the #root div
 * 
 * This is the FIRST JavaScript that runs when your page loads
 * It tells React: "Take the Game component and put it inside 
 * the HTML element with id='root'"
 */
ReactDOM.render(
    <Game />,                           // What to render (our Game component)
    document.getElementById('root')     // Where to render it (the #root div)
);
