// js/main.js

import { Game } from './components/Game.js';

const { createElement: e } = React;
const { render } = ReactDOM;

// Render the Game component into the #root div
render(
    e(Game),
    document.getElementById('root')
);
```
