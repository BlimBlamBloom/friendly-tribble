# No Me Gusta La Lluvia 🐧☔

A Spanish verb conjugation learning game where players match pronouns with their correct verb conjugations by clicking falling raindrops before they hit the ground.

## 🎮 How to Play

- **Objective**: Match 100 pronoun-conjugation pairs before missing 3 raindrops
- **Controls**: Click on raindrops to select them
- **Matching**: Click a pronoun (yo, tú, ella, etc.) then click its matching conjugation
- **Challenge**: Drops fall faster as your score increases!

## 📁 Project Structure
```
no-me-gusta-la-lluvia/
├── index.html                 # Main HTML file (entry point)
├── css/
│   └── styles.css            # All styling and animations
└── js/
    ├── main.js               # Application entry point
    ├── data/
    │   └── verbs.js          # Verb conjugation data (3 sets)
    ├── components/
    │   ├── Game.js           # Main game controller
    │   ├── TitleScreen.js    # Title/menu screen
    │   ├── GameScreen.js     # Playing screen
    │   ├── Raindrop.js       # Single raindrop component
    │   ├── Penguin.js        # Penguin character SVG
    │   └── GameOver.js       # End game overlay
    ├── hooks/
    │   ├── useGameLogic.js   # Game state (score, matching, win/lose)
    │   ├── usePenguin.js     # Penguin movement logic
    │   └── useRaindrops.js   # Raindrop spawning and falling
    └── utils/
        ├── dropHelpers.js    # Helper functions for drops
        └── gameHelpers.js    # Game mechanics helpers
```

## 🛠️ Technology Stack

- **React 18** - UI library (loaded via CDN)
- **ES6 Modules** - Native browser module support
- **Vanilla CSS** - Custom styling with animations
- **No build tools required** - Runs directly in browser!

## 🎯 Quick Customization Guide

### Adjust Raindrop Speed
**File:** `js/utils/gameHelpers.js`  
**Function:** `getCurrentSpeed` (line 3)
```javascript
return 0.12 + speedIncrease;  // Change 0.12 (higher = faster)
```

### Adjust Spawn Frequency
**File:** `js/utils/gameHelpers.js`  
**Function:** `getSpawnInterval` (line 11)
```javascript
if (score < 30) {
    return 5000;  // Milliseconds between spawns (5000 = 5 seconds)
}
return Math.max(1600, 4000 - (level * 300));  // Difficulty progression
```

### Adjust Raindrop Spacing
**File:** `js/utils/dropHelpers.js`  
**Function:** `findValidPosition` (lines 16-17)
```javascript
x = Math.random() * 70 + 10;  // Horizontal spread (70 = 70% of screen)
y = -10 - Math.random() * 20; // Vertical stagger (20 = spawn range)
```

**Minimum distance between drops:**
```javascript
export const findValidPosition = (existingDrops, minDistance = 15) {
    // Change 15 to larger (further apart) or smaller (closer together)
```

### Add More Verbs
**File:** `js/data/verbs.js`

Add new verbs to any verb set:
```javascript
export const verbSets = {
    'Verbos 1': {
        hablar: { yo: 'hablo', tú: 'hablas', ... },
        // Add your new verb here:
        caminar: { yo: 'camino', tú: 'caminas', ... }
    },
    // ...
};
```

### Change Win/Lose Conditions
**File:** `js/hooks/useGameLogic.js`

**Change winning score** (line 48):
```javascript
if (newScore >= 100) {  // Change 100 to your desired target
    setGameWon(true);
}
```

**Change number of allowed misses** (line 60):
```javascript
if (newMisses >= 3) {  // Change 3 to allow more/fewer misses
    setGameOver(true);
}
```

## 📚 File Descriptions

### Core Files

**`index.html`**
- Loads React and ReactDOM from CDN
- Sets up the root div where game renders
- Imports main.js as an ES6 module

**`js/main.js`**
- Entry point for JavaScript
- Renders the Game component into the DOM

**`css/styles.css`**
- Global styles and resets
- Animation keyframes (bounce, pulse)
- No component-specific styles (those are inline)

### Data Layer

**`js/data/verbs.js`**
- Contains 3 verb sets (Verbos 1, 2, 3)
- Exports `verbSets` object and `pronouns` array
- Easy to add more verbs or create new sets

### Components

**`js/components/Game.js`**
- Top-level orchestrator
- Manages screen state (title vs game)
- Coordinates all hooks and child components
- Handles game start/restart logic

**`js/components/TitleScreen.js`**
- Displays game title and penguin
- Shows decorative raindrops
- Verb set selection buttons (Verbos 1/2/3)
- "Jugar" button to start game

**`js/components/GameScreen.js`**
- Displays score and misses counters
- Renders all interactive raindrops
- Shows penguin at bottom
- Conditionally shows GameOver overlay

**`js/components/Raindrop.js`**
- Renders a single raindrop
- Two modes: title (decorative) and game (interactive)
- Handles click events and hover effects
- Changes color when selected

**`js/components/Penguin.js`**
- SVG penguin character
- Accepts direction prop to flip horizontally
- Includes bounce animation on feet

**`js/components/GameOver.js`**
- Overlay shown when game ends
- Different messages for win/lose
- Shows final score
- "Jugar de Nuevo" restart button

### Hooks (Custom React Hooks)

**`js/hooks/usePenguin.js`**
- Manages penguin position and direction
- Automatically moves penguin back and forth
- Only active when `isActive` is true
- Provides reset function

**`js/hooks/useGameLogic.js`**
- Tracks score, misses, selected drop
- Handles drop click logic and matching
- Determines win/lose conditions
- Provides all game state and handlers

**`js/hooks/useRaindrops.js`**
- Spawns matching pairs of drops
- Moves drops down screen over time
- Ensures drops always have potential matches
- Handles miss detection
- Separate hook for title screen rain

### Utilities

**`js/utils/dropHelpers.js`**
- `isPositionTooClose()` - Prevents overlap
- `findValidPosition()` - Finds spawn location
- `createDrop()` - Creates game raindrop object
- `createTitleDrop()` - Creates decorative raindrop
- `hasMatchingPair()` - Checks if drop has a match

**`js/utils/gameHelpers.js`**
- `getCurrentSpeed()` - Calculates fall speed based on score
- `getSpawnInterval()` - Calculates spawn rate based on score
- `checkMatch()` - Validates if two drops match

## 🎨 Game Mechanics

### Difficulty Progression

**First 30 points:**
- Slow speed (0.12 base)
- Slow spawn rate (5 seconds)
- Easy learning phase

**After 30 points:**
- Speed increases every 10 points
- Spawn rate increases progressively
- Maximum difficulty caps at specific values

### Matching System

1. Player clicks first drop (turns yellow, pulses)
2. Player clicks second drop
3. System checks:
   - Are they different types? (pronoun + conjugation)
   - Do they share the same pronoun?
4. If match: Both disappear, score +1
5. If no match: Both deselect

### Drop Spawning

- Drops spawn in matching pairs
- First drop spawns immediately
- Matching drop spawns 1-3 seconds later
- System ensures drops halfway down always have matches
- Prevents impossible situations

## 🚀 Deployment

### Local Testing
1. Open `index.html` in any modern browser
2. No server required for local testing

### Web Hosting
1. Upload entire folder to web server
2. Ensure folder structure is maintained
3. Access via `https://yourdomain.com/path/to/index.html`

### GitHub Pages
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
Enable GitHub Pages in repository settings.

## 🐛 Troubleshooting

### Blank Screen
1. Press F12 and check Console for errors
2. Verify all files uploaded correctly
3. Check Network tab - all files should load (status 200)
4. Ensure accessing via http:// or https:// (not file://)

### Drops Don't Fall
- Check console for JavaScript errors
- Verify `useRaindrops.js` is loaded
- Check that `isPlaying` state is true

### Verb Selection Doesn't Work
- Verify `Game.js` has `selectedVerbSet` state
- Check `TitleScreen.js` receives props correctly
- Look for console errors

### React Not Defined
- Check that React CDN scripts load before main.js
- Verify internet connection (CDN scripts need to download)

## 📝 Code Style

### React createElement Pattern
Since we don't use JSX, components use `React.createElement`:
```javascript
const { createElement: e } = React;

// Instead of: <div>Hello</div>
// We write: e('div', null, 'Hello')

// Pattern: e(element, props, ...children)
```

### Import/Export Pattern
```javascript
// Export
export const myFunction = () => { ... };
export const myVariable = 10;

// Import
import { myFunction, myVariable } from './file.js';
```

### Hooks Pattern
```javascript
// Custom hooks start with 'use'
export const useMyHook = (params) => {
    const [state, setState] = useState(initial);
    
    useEffect(() => {
        // Side effects
    }, [dependencies]);
    
    return { state, setState };
};
```

## 🎓 Educational Value

This game teaches:
- **Spanish conjugation** - Regular AR verbs and common irregulars
- **Pronoun recognition** - yo, tú, ella, nosotros, vosotros, ellos
- **Pattern matching** - Quick recognition under time pressure
- **Speed and accuracy** - Gaming mechanics enhance learning

## 🔮 Future Enhancement Ideas

- [ ] Add sound effects
- [ ] Add particle effects when drops match
- [ ] Leaderboard/high scores
- [ ] More verb tenses (preterite, imperfect, etc.)
- [ ] Difficulty selection (easy/medium/hard)
- [ ] Mobile touch optimization
- [ ] Power-ups (slow time, reveal matches, etc.)
- [ ] Multiple language support
- [ ] Progress tracking/statistics

## 📄 License

This is an educational project. Feel free to use and modify for learning purposes.

## 🙋 Support

For questions about the code structure or customization, refer to this README or consult the inline comments in each file.

---

**Made with ❤️ for Spanish learners**
