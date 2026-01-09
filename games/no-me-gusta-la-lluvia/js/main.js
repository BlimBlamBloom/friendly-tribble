// js/main.js
import { Game } from './components/Game.js';

// Create a wrapper that uses global React
const mountApp = () => {
    const root = document.getElementById('root');
    ReactDOM.render(React.createElement(Game), root);
};

// Mount when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mountApp);
} else {
    mountApp();
}
