#!/bin/bash

# Would You Rather: Debate Edition - Quick Deploy Script

echo "🎭 Would You Rather: Debate Edition - Deployment Helper"
echo "========================================================"
echo ""

# Check if files exist
if [ ! -f "index.html" ] || [ ! -f "styles.css" ] || [ ! -f "script.js" ]; then
    echo "❌ Error: Required files not found!"
    echo "   Make sure you're in the project directory."
    exit 1
fi

echo "✅ All required files found!"
echo ""
echo "Choose your deployment method:"
echo ""
echo "1. 🖥️  Test Locally (Python Server)"
echo "2. 📦 Deploy to Netlify (drag & drop)"
echo "3. 🚀 Deploy to Vercel"
echo "4. 📘 Deploy to GitHub Pages"
echo "5. ℹ️  Show deployment instructions"
echo ""

read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Starting local server..."
        echo "📍 Open your browser to: http://localhost:8000"
        echo "⏹️  Press Ctrl+C to stop the server"
        echo ""
        python3 -m http.server 8000
        ;;
    2)
        echo ""
        echo "📦 Netlify Deployment:"
        echo "1. Go to https://app.netlify.com/drop"
        echo "2. Drag and drop this folder"
        echo "3. Your site will be live instantly!"
        echo ""
        echo "Tip: All files (index.html, styles.css, script.js) are in:"
        echo "     $(pwd)"
        ;;
    3)
        echo ""
        echo "🚀 Vercel Deployment:"
        if ! command -v vercel &> /dev/null; then
            echo "Installing Vercel CLI..."
            npm i -g vercel
        fi
        echo "Deploying to Vercel..."
        vercel --prod
        ;;
    4)
        echo ""
        echo "📘 GitHub Pages Deployment:"
        echo ""
        echo "1. Create a new repository on GitHub"
        echo "2. Run these commands:"
        echo ""
        echo "   git init"
        echo "   git add ."
        echo "   git commit -m 'Initial commit: Would You Rather Debate Game'"
        echo "   git branch -M main"
        echo "   git remote add origin YOUR_REPO_URL"
        echo "   git push -u origin main"
        echo ""
        echo "3. Go to your repo Settings → Pages"
        echo "4. Select 'main' branch as source"
        echo "5. Your game will be live at: https://yourusername.github.io/repo-name"
        ;;
    5)
        echo ""
        echo "📚 Deployment Instructions:"
        echo ""
        echo "This is a static web application with no backend dependencies."
        echo "You can deploy it to ANY static hosting service!"
        echo ""
        echo "Popular Options:"
        echo "  • Netlify (easiest) - https://netlify.com"
        echo "  • Vercel - https://vercel.com"
        echo "  • GitHub Pages - free with GitHub account"
        echo "  • Firebase Hosting - https://firebase.google.com"
        echo "  • Surge.sh - https://surge.sh"
        echo "  • Cloudflare Pages - https://pages.cloudflare.com"
        echo ""
        echo "All you need to upload:"
        echo "  ✓ index.html"
        echo "  ✓ styles.css"
        echo "  ✓ script.js"
        echo ""
        echo "That's it! No build process, no dependencies!"
        ;;
    *)
        echo "Invalid choice!"
        exit 1
        ;;
esac
