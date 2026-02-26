// Game State
const gameState = {
    player1Name: '',
    player2Name: '',
    currentRound: 0,
    totalRounds: 12,
    player1Score: 0,
    player2Score: 0,
    player1Choice: null,
    player2Choice: null,
    player1Justification: '',
    player2Justification: '',
    player1Submitted: false,
    player2Submitted: false,
    dilemmas: [
        {
            question: "Would you rather have the ability to read minds OR the ability to become invisible?",
            optionA: "Read minds",
            optionB: "Become invisible"
        },
        {
            question: "Would you rather live in a world without music OR a world without movies?",
            optionA: "World without music",
            optionB: "World without movies"
        },
        {
            question: "Would you rather always know when someone is lying OR always get away with lying?",
            optionA: "Know when someone is lying",
            optionB: "Get away with lying"
        },
        {
            question: "Would you rather be able to speak all human languages OR be able to speak to animals?",
            optionA: "Speak all human languages",
            optionB: "Speak to animals"
        },
        {
            question: "Would you rather have unlimited wealth but only 20 years to live OR modest income but live to 200?",
            optionA: "Unlimited wealth, 20 years",
            optionB: "Modest income, 200 years"
        },
        {
            question: "Would you rather relive the same perfect day forever OR continue living new, unpredictable days?",
            optionA: "Same perfect day forever",
            optionB: "New unpredictable days"
        },
        {
            question: "Would you rather eliminate all human suffering OR discover the meaning of life?",
            optionA: "Eliminate all suffering",
            optionB: "Discover meaning of life"
        },
        {
            question: "Would you rather have perfect memory of everything OR the ability to forget anything at will?",
            optionA: "Perfect memory",
            optionB: "Forget at will"
        },
        {
            question: "Would you rather travel 500 years into the past OR 500 years into the future?",
            optionA: "500 years into past",
            optionB: "500 years into future"
        },
        {
            question: "Would you rather be famous during your lifetime but forgotten after death OR unknown during life but remembered for centuries?",
            optionA: "Famous now, forgotten later",
            optionB: "Unknown now, remembered forever"
        },
        {
            question: "Would you rather have the power to stop time OR the power to rewind time by 10 minutes?",
            optionA: "Stop time completely",
            optionB: "Rewind time by 10 minutes"
        },
        {
            question: "Would you rather always know the truth about everything OR live blissfully ignorant but happy?",
            optionA: "Know the truth always",
            optionB: "Live blissfully ignorant"
        },
        {
            question: "Would you rather have the ability to fly OR the ability to breathe underwater?",
            optionA: "Ability to fly",
            optionB: "Breathe underwater"
        }
    ]
};

// Screen Navigation
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

// Start Game
function startGame() {
    const p1Name = document.getElementById('player1Name').value.trim() || 'Player 1';
    const p2Name = document.getElementById('player2Name').value.trim() || 'Player 2';
    
    gameState.player1Name = p1Name;
    gameState.player2Name = p2Name;
    gameState.currentRound = 0;
    gameState.player1Score = 0;
    gameState.player2Score = 0;
    
    // Update all player name displays
    document.querySelectorAll('#p1Name, #p1ScoreName, #r1Name, #standingP1Name').forEach(el => {
        el.textContent = p1Name;
    });
    document.querySelectorAll('#p2Name, #p2ScoreName, #r2Name, #standingP2Name').forEach(el => {
        el.textContent = p2Name;
    });
    
    nextRound();
}

// Load Next Round
function nextRound() {
    if (gameState.currentRound >= gameState.totalRounds) {
        showFinalResults();
        return;
    }
    
    gameState.currentRound++;
    gameState.player1Choice = null;
    gameState.player2Choice = null;
    gameState.player1Justification = '';
    gameState.player2Justification = '';
    gameState.player1Submitted = false;
    gameState.player2Submitted = false;
    
    const dilemma = gameState.dilemmas[gameState.currentRound - 1];
    
    // Update round display
    document.getElementById('currentRound').textContent = gameState.currentRound;
    document.getElementById('totalRounds').textContent = gameState.totalRounds;
    
    // Update dilemma
    document.getElementById('dilemmaQuestion').textContent = dilemma.question;
    document.querySelectorAll('#optionA1, #optionA2').forEach(el => {
        el.textContent = dilemma.optionA;
    });
    document.querySelectorAll('#optionB1, #optionB2').forEach(el => {
        el.textContent = dilemma.optionB;
    });
    
    // Reset UI
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('selected'));
    document.getElementById('p1Justification').value = '';
    document.getElementById('p2Justification').value = '';
    document.getElementById('p1CharCount').textContent = '0';
    document.getElementById('p2CharCount').textContent = '0';
    
    document.querySelectorAll('.player-panel').forEach(panel => panel.classList.remove('submitted'));
    document.querySelectorAll('.submitted-indicator').forEach(ind => ind.classList.remove('show'));
    document.querySelectorAll('.btn-submit').forEach(btn => {
        btn.disabled = false;
        btn.style.display = 'block';
    });
    document.getElementById('waitingMessage').classList.remove('show');
    
    // Update scores
    document.getElementById('player1Score').textContent = gameState.player1Score;
    document.getElementById('player2Score').textContent = gameState.player2Score;
    
    showScreen('gameScreen');
}

// Option Button Click Handlers
document.addEventListener('DOMContentLoaded', () => {
    // Setup option buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const player = this.dataset.player;
            const option = this.dataset.option;
            
            // Deselect other options for this player
            document.querySelectorAll(`[data-player="${player}"]`).forEach(b => {
                b.classList.remove('selected');
            });
            
            // Select this option
            this.classList.add('selected');
            
            // Store choice
            if (player === '1') {
                const dilemma = gameState.dilemmas[gameState.currentRound - 1];
                gameState.player1Choice = option === 'A' ? dilemma.optionA : dilemma.optionB;
            } else {
                const dilemma = gameState.dilemmas[gameState.currentRound - 1];
                gameState.player2Choice = option === 'A' ? dilemma.optionA : dilemma.optionB;
            }
        });
    });
    
    // Character counters
    document.getElementById('p1Justification').addEventListener('input', function() {
        document.getElementById('p1CharCount').textContent = this.value.length;
        gameState.player1Justification = this.value;
    });
    
    document.getElementById('p2Justification').addEventListener('input', function() {
        document.getElementById('p2CharCount').textContent = this.value.length;
        gameState.player2Justification = this.value;
    });
});

// Submit Answer
function submitAnswer(player) {
    const choice = player === 1 ? gameState.player1Choice : gameState.player2Choice;
    const justification = player === 1 ? gameState.player1Justification : gameState.player2Justification;
    
    if (!choice) {
        alert('Please select an option first!');
        return;
    }
    
    if (!justification || justification.trim().length < 10) {
        alert('Please provide a more detailed justification (at least 10 characters)!');
        return;
    }
    
    // Mark as submitted
    if (player === 1) {
        gameState.player1Submitted = true;
        document.querySelector('.player1-panel').classList.add('submitted');
        document.getElementById('p1SubmitBtn').style.display = 'none';
        document.getElementById('p1Submitted').classList.add('show');
    } else {
        gameState.player2Submitted = true;
        document.querySelector('.player2-panel').classList.add('submitted');
        document.getElementById('p2SubmitBtn').style.display = 'none';
        document.getElementById('p2Submitted').classList.add('show');
    }
    
    // Check if both submitted
    if (gameState.player1Submitted && gameState.player2Submitted) {
        setTimeout(() => {
            evaluateRound();
        }, 500);
    } else {
        document.getElementById('waitingMessage').classList.add('show');
    }
}

// Evaluate Round
function evaluateRound() {
    const p1Just = gameState.player1Justification;
    const p2Just = gameState.player2Justification;
    
    // Evaluate Player 1
    const p1Scores = evaluateArgument(p1Just);
    
    // Evaluate Player 2
    const p2Scores = evaluateArgument(p2Just);
    
    // Update round display
    document.getElementById('resultsRound').textContent = gameState.currentRound;
    
    // Player 1 results
    document.getElementById('r1Choice').textContent = gameState.player1Choice;
    document.getElementById('r1Justification').textContent = p1Just;
    document.getElementById('r1Clarity').textContent = `${p1Scores.clarity}/3`;
    document.getElementById('r1Examples').textContent = `${p1Scores.examples}/3`;
    document.getElementById('r1Creativity').textContent = `${p1Scores.creativity}/2`;
    document.getElementById('r1Effort').textContent = `${p1Scores.effort}/2`;
    document.getElementById('r1Total').textContent = p1Scores.total;
    
    // Player 2 results
    document.getElementById('r2Choice').textContent = gameState.player2Choice;
    document.getElementById('r2Justification').textContent = p2Just;
    document.getElementById('r2Clarity').textContent = `${p2Scores.clarity}/3`;
    document.getElementById('r2Examples').textContent = `${p2Scores.examples}/3`;
    document.getElementById('r2Creativity').textContent = `${p2Scores.creativity}/2`;
    document.getElementById('r2Effort').textContent = `${p2Scores.effort}/2`;
    document.getElementById('r2Total').textContent = p2Scores.total;
    
    // Feedback
    displayFeedback('r1Feedback', p1Scores.feedback);
    displayFeedback('r2Feedback', p2Scores.feedback);
    
    // Update total scores
    gameState.player1Score += p1Scores.total;
    gameState.player2Score += p2Scores.total;
    
    // Display standings
    document.getElementById('standingP1Score').textContent = gameState.player1Score;
    document.getElementById('standingP2Score').textContent = gameState.player2Score;
    
    // Round winner
    const winnerEl = document.getElementById('roundWinner');
    if (p1Scores.total > p2Scores.total) {
        winnerEl.textContent = `🏆 ${gameState.player1Name} wins this round!`;
    } else if (p2Scores.total > p1Scores.total) {
        winnerEl.textContent = `🏆 ${gameState.player2Name} wins this round!`;
    } else {
        winnerEl.textContent = `🤝 It's a tie! Both arguments were equally compelling!`;
    }
    
    // Update button text
    const nextBtn = document.getElementById('nextRoundBtn');
    if (gameState.currentRound >= gameState.totalRounds) {
        nextBtn.textContent = 'See Final Results';
    } else {
        nextBtn.textContent = 'Next Round';
    }
    
    showScreen('resultsScreen');
}

// AI Evaluation Function
function evaluateArgument(justification) {
    const scores = {
        clarity: 0,
        examples: 0,
        creativity: 0,
        effort: 0,
        total: 0,
        feedback: []
    };
    
    const lowerJust = justification.toLowerCase();
    const wordCount = justification.split(/\s+/).length;
    const sentenceCount = justification.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
    
    // 1. Effort (0-2 points)
    if (wordCount >= 50) {
        scores.effort = 2;
    } else if (wordCount >= 20) {
        scores.effort = 1;
    }
    
    // 2. Clarity and Logic (0-3 points)
    const clarityWords = ['because', 'since', 'therefore', 'thus', 'so', 'which means', 'this allows', 'as a result', 'consequently', 'hence'];
    const clarityCount = clarityWords.filter(word => lowerJust.includes(word)).length;
    
    if (clarityCount >= 3 || sentenceCount >= 4) {
        scores.clarity = 3;
        scores.feedback.push('✓ Excellent logical structure and reasoning');
    } else if (clarityCount >= 2 || sentenceCount >= 3) {
        scores.clarity = 2;
        scores.feedback.push('✓ Clear logical reasoning');
    } else if (clarityCount >= 1 || sentenceCount >= 2) {
        scores.clarity = 1;
    }
    
    // 3. Examples and Details (0-3 points)
    const exampleWords = ['for example', 'like', 'such as', 'imagine', 'if', 'would allow', 'could', 'for instance', 'specifically', 'in particular'];
    const exampleCount = exampleWords.filter(word => lowerJust.includes(word)).length;
    const hasNumbers = /\d/.test(justification);
    
    if (exampleCount >= 3 || (exampleCount >= 2 && hasNumbers)) {
        scores.examples = 3;
        scores.feedback.push('✓ Rich with specific examples and details');
    } else if (exampleCount >= 2) {
        scores.examples = 2;
        scores.feedback.push('✓ Good use of examples');
    } else if (exampleCount >= 1) {
        scores.examples = 1;
    }
    
    // 4. Creativity (0-2 points)
    const uniqueWords = new Set(justification.toLowerCase().match(/\b\w+\b/g) || []).size;
    const vocabularyRichness = uniqueWords / wordCount;
    
    if (vocabularyRichness > 0.7 && wordCount >= 30) {
        scores.creativity = 2;
        scores.feedback.push('✓ Unique and creative perspective');
    } else if (vocabularyRichness > 0.6 || wordCount >= 40) {
        scores.creativity = 1;
    }
    
    // Bonus feedback
    if (wordCount >= 60) {
        scores.feedback.push('✓ Thorough and detailed argument');
    }
    
    if (sentenceCount >= 5) {
        scores.feedback.push('✓ Well-structured response');
    }
    
    scores.total = scores.clarity + scores.examples + scores.creativity + scores.effort;
    
    return scores;
}

// Display Feedback
function displayFeedback(elementId, feedbackArray) {
    const container = document.getElementById(elementId);
    container.innerHTML = '';
    
    feedbackArray.forEach(feedback => {
        const div = document.createElement('div');
        div.className = 'feedback-item';
        div.textContent = feedback;
        container.appendChild(div);
    });
}

// Show Final Results
function showFinalResults() {
    const p1Score = gameState.player1Score;
    const p2Score = gameState.player2Score;
    
    let winner, loser, winnerScore, loserScore;
    
    if (p1Score > p2Score) {
        winner = gameState.player1Name;
        loser = gameState.player2Name;
        winnerScore = p1Score;
        loserScore = p2Score;
        document.getElementById('winnerAnnouncement').textContent = 
            `🎉 ${winner} is the Debate Champion! 🎉`;
    } else if (p2Score > p1Score) {
        winner = gameState.player2Name;
        loser = gameState.player1Name;
        winnerScore = p2Score;
        loserScore = p1Score;
        document.getElementById('winnerAnnouncement').textContent = 
            `🎉 ${winner} is the Debate Champion! 🎉`;
    } else {
        document.getElementById('winnerAnnouncement').textContent = 
            `🤝 It's a Perfect Tie! Both players are equally masterful debaters! 🤝`;
        winner = gameState.player1Name;
        loser = gameState.player2Name;
        winnerScore = p1Score;
        loserScore = p2Score;
    }
    
    document.getElementById('finalWinnerName').textContent = winner;
    document.getElementById('finalWinnerScore').textContent = winnerScore;
    document.getElementById('finalLoserName').textContent = loser;
    document.getElementById('finalLoserScore').textContent = loserScore;
    
    // Show/hide crown based on tie
    if (p1Score === p2Score) {
        document.querySelector('.crown').style.display = 'none';
        document.getElementById('finalLoserCard').classList.add('winner-card');
    } else {
        document.querySelector('.crown').style.display = 'block';
        document.getElementById('finalLoserCard').classList.remove('winner-card');
    }
    
    // Game summary
    const pointDiff = Math.abs(p1Score - p2Score);
    let summary = '';
    
    if (pointDiff === 0) {
        summary = `<p>An incredibly close match! Both players demonstrated exceptional argumentation skills.</p>`;
    } else if (pointDiff <= 10) {
        summary = `<p>What a close match! ${winner} won by just ${pointDiff} points!</p>`;
    } else if (pointDiff <= 20) {
        summary = `<p>${winner} showed strong debate skills, winning by ${pointDiff} points!</p>`;
    } else {
        summary = `<p>${winner} dominated the debate with superior argumentation, winning by ${pointDiff} points!</p>`;
    }
    
    summary += `<p>Total rounds: ${gameState.totalRounds}</p>`;
    document.getElementById('gameSummary').innerHTML = summary;
    
    showScreen('finalScreen');
}

// Reset Game
function resetGame() {
    showScreen('startScreen');
}
