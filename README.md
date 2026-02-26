# Would You Rather: Debate Edition

An interactive web-based two-player debate game where players face thought-provoking dilemmas, defend their choices, and compete for the title of Debate Champion!

![Game Banner](https://img.shields.io/badge/Status-Ready%20for%20Deployment-success)
![Version](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## Features

- **12 Thought-Provoking Dilemmas** - From mind-reading vs invisibility to time manipulation
-  **AI-Powered Evaluation** - Arguments scored on clarity, creativity, logic, and persuasiveness  
-  **Real-Time Scoring** - Track points throughout the game with beautiful visual indicators
-  **Modern UI Design** - Clean, responsive interface that works on mobile and desktop
-  **Smooth Transitions** - Engaging animations and visual feedback
-  **Competitive Gameplay** - Round-by-round winners with a final championship reveal

## Quick Start

### Option 1: Open Locally

Simply open `index.html` in any modern web browser:

```bash
# Navigate to the directory
cd would-you-rather

# Open in browser (Mac)
open index.html

# Open in browser (Linux)
xdg-open index.html

# Open in browser (Windows)
start index.html
```

### Option 2: Local Server

For the best experience, run a local web server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server -p 8000
```

Then visit: `http://localhost:8000`

## Deployment Options

### GitHub Pages

1. Create a new GitHub repository
2. Upload all files (`index.html`, `styles.css`, `script.js`)
3. Go to Settings → Pages
4. Select the main branch as source
5. Your game will be live at: `https://yourusername.github.io/repository-name`

### Netlify (Recommended)

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop the project folder
3. Your site is live in seconds!
4. Get a custom URL like: `your-game.netlify.app`

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts
4. Your game is deployed!

### Alternative Hosting

Works with any static hosting service:
- **Firebase Hosting**
- **Surge.sh**
- **Render**
- **Cloudflare Pages**
- **AWS S3**

##  How to Play

1. **Enter Names**: Both players enter their names
2. **Read Dilemma**: Each round presents a "Would You Rather" question
3. **Choose & Justify**: Each player independently selects an option and explains why
4. **AI Evaluation**: Arguments are scored on multiple criteria
5. **See Results**: Round winner announced with detailed score breakdown
6. **Final Champion**: After 11 rounds, the overall winner is crowned!

## Scoring System

Each argument is evaluated on a 10-point scale:

| Criteria | Points | What's Evaluated |
|----------|--------|------------------|
| **Clarity & Logic** | 0-3 | Logical structure, reasoning indicators (because, therefore, etc.) |
| **Examples & Details** | 0-3 | Specific examples, concrete scenarios, detailed explanations |
| **Creativity** | 0-2 | Unique perspective, vocabulary richness, original insights |
| **Effort** | 0-2 | Response length, thoroughness, depth of argument |

## Tips for Winning

✅ **Be specific** - Use concrete examples to support your choice  
✅ **Show logic** - Use words like "because," "therefore," "which means"  
✅ **Be creative** - Offer unique perspectives and unexpected insights  
✅ **Go deep** - Longer, thoughtful responses score better than quick answers  
✅ **Use numbers** - Specific data points add credibility  
✅ **Structure well** - Multiple sentences with clear flow earn more points

## Sample Dilemma

**Question:** Would you rather have the ability to read minds OR the ability to become invisible?

**Good Answer Example:**
> "I'd choose invisibility because it respects others' privacy while giving me freedom. For example, I could observe important meetings to learn negotiation strategies, or travel anywhere without restrictions. Reading minds would be ethically problematic since I'd know things people want to keep private, which would burden me with information I shouldn't have. Additionally, invisibility is more practical for real-world situations like avoiding danger."

**Score:** 8-9/10 points 

## Technical Details

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **No Dependencies**: No frameworks or libraries required
- **Mobile Responsive**: Works perfectly on all screen sizes
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **File Size**: < 50KB total
- **Load Time**: Instant

## Browser Compatibility

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Project Structure

```
would-you-rather/
├── index.html      # Main HTML structure
├── styles.css      # Modern, responsive styling
├── script.js       # Game logic and AI evaluation
├── game.py         # Python CLI version (optional)
└── README.md       # This file
```

## Contributing

Feel free to fork and customize! Some ideas:
- Add more dilemmas
- Enhance the AI scoring algorithm
- Add sound effects
- Create themed dilemma packs
- Add multiplayer online support

## License

MIT License - Feel free to use for any purpose!

## Share Your Game

Once deployed, share your link and challenge friends to debate!

**Example URLs:**
- `https://yourusername.github.io/debate-game`
- `https://debate-edition.netlify.app`
- `https://would-you-rather-debate.vercel.app`

---

**Ready to deploy?** Follow any of the deployment options above and you'll have a live, shareable game in minutes! 

**Have fun debating!** 
