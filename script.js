let player1Score = 0;
let player2Score = 0;
let rounds = 0;
const maxRounds = 5;

const rollSound = document.getElementById("roll-sound"); // Get roll sound element

function startGame() {
    const player1Name = document.getElementById("player1-name").value || "Player 1";
    const player2Name = document.getElementById("player2-name").value || "Player 2";
    
    document.getElementById("player1-display").innerText = player1Name;
    document.getElementById("player2-display").innerText = player2Name;
    document.getElementById("roll-btn").disabled = false;
    document.getElementById("reset-btn").disabled = false;

    document.getElementById("winner").innerText = "";
}

function roll() {
    // Stop and reset roll sound if it's already playing
    if (!rollSound.paused) {
        rollSound.pause();
        rollSound.currentTime = 0;
    }
    rollSound.play(); // Play the roll sound

    // Show loading animations for both players
    document.getElementById("player1-result").innerHTML = "<img src='image/loader.gif' alt='Loading...'/>"; 
    document.getElementById("player2-result").innerHTML = "<img src='image/loader.gif' alt='Loading...'/>"; 
    document.getElementById("winner").innerHTML = ""; // Clear previous winner message

    setTimeout(function () {
        // Generate random dice rolls for both players
        const player1Roll = Math.floor(Math.random() * 6) + 1;
        const player2Roll = Math.floor(Math.random() * 6) + 1;

        // Update results for both players
        document.getElementById("player1-result").innerHTML = "<img src='image/" + player1Roll + ".png' alt='Dice " + player1Roll + "'/>";
        document.getElementById("player2-result").innerHTML = "<img src='image/" + player2Roll + ".png' alt='Dice " + player2Roll + "'/>";

        // Update scores
        if (player1Roll > player2Roll) {
            player1Score++;
            document.getElementById("winner").innerText = document.getElementById("player1-display").innerText + " Wins This Round!";
            document.getElementById("win-sound").play();
        } else if (player1Roll < player2Roll) {
            player2Score++;
            document.getElementById("winner").innerText = document.getElementById("player2-display").innerText + " Wins This Round!";
            document.getElementById("loss-sound").play();
        } else {
            document.getElementById("winner").innerText = "It's a Tie!";
        }

        // Update scores in UI
        document.getElementById("player1-score").innerText = "Score: " + player1Score;
        document.getElementById("player2-score").innerText = "Score: " + player2Score;

        // Check for max rounds
        rounds++;
        if (rounds >= maxRounds) {
            document.getElementById("roll-btn").disabled = true;
            declareFinalWinner();
        }
    }, 1000); // 1-second delay for rolling dice
}

function declareFinalWinner() {
    if (player1Score > player2Score) {
        document.getElementById("winner").innerText = document.getElementById("player1-display").innerText + " Wins the Game!";
    } else if (player1Score < player2Score) {
        document.getElementById("winner").innerText = document.getElementById("player2-display").innerText + " Wins the Game!";
    } else {
        document.getElementById("winner").innerText = "The Game is a Tie!";
    }
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    rounds = 0;
    document.getElementById("player1-score").innerText = "Score: 0";
    document.getElementById("player2-score").innerText = "Score: 0";
    document.getElementById("player1-result").innerHTML = "";
    document.getElementById("player2-result").innerHTML = "";
    document.getElementById("winner").innerText = "";
    document.getElementById("roll-btn").disabled = false;
}


// show alert message for won the game

function declareFinalWinner() {
    if (player1Score > player2Score) {
        const winnerName = document.getElementById("player1-display").innerText;
        document.getElementById("winner").innerText = winnerName + " Wins the Game!";
        alert( winnerName + " Wins the Game! ♥"); // Show alert with the winner's name
    } else if (player1Score < player2Score) {
        const winnerName = document.getElementById("player2-display").innerText;
        document.getElementById("winner").innerText = winnerName + " Wins the Game!";
        alert(winnerName + " Wins the Game! ♥"); // Show alert with the winner's name
    } else {
        document.getElementById("winner").innerText = "The Game is a Tie!";
        alert("The Game is a Tie! 🤝"); // Show alert for a tie
    }
}

