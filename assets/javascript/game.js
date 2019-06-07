// prep document
$(document).ready(function () {

    // set the globe vars for game
    let prompter = $('#prompter')
    let scoreDisplay = $('#score')
    let randomNumberDisplay = $('#randomNumber')
    let playerScore = 0;
    let playerLosses = 0;
    let playerWins = 0;

    // random number values
    let goalNumber = Math.floor(Math.random() * 120) + 19;
    let firstCrystal = Math.floor(Math.random() * 12) + 1;
    let secondCrystal = Math.floor(Math.random() * 12) + 1;
    let thirdCrystal = Math.floor(Math.random() * 12) + 1;
    let fourthCrystal = Math.floor(Math.random() * 12) + 1;

    // game reset function
    function resetGame() {
        scoreDisplay.empty();
        scoreDisplay.html('Your crystal Value ' + playerScore);
        playerScore = 0;
        goalNumber = Math.floor(Math.random() * 120) + 19;
        goalNumber = 0;
        firstCrystal = 0;
        firstCrystal = Math.floor(Math.random() * 12) + 1;
        secondCrystal = 0;
        secondCrystal = Math.floor(Math.random() * 12) + 1;
        thirdCrystal = 0;
        thirdCrystal = Math.floor(Math.random() * 12) + 1;
        fourthCrystal = 0;
        fourthCrystal = Math.floor(Math.random() * 12) + 1;

    }

    // game over function
    function gameOver() {
        if (playerScore > goalNumber) {
            prompter.html('You Lose...');
            $('#playerLosses').html('Losses ' + (playerLosses = playerLosses + 1));
            resetGame();
        } else if (playerScore === goalNumber) {
            prompter.html('You Win!!')
            $('#playerWins').html('Wins ' + (playerWins = playerWins + 1));
            resetGame();
        } 
    }

    // click function on crystals
    $('#crystal1').on('click', function () {
        console.log(firstCrystal)
        scoreDisplay.html('Your Crystal Value: ' + (playerScore = playerScore + firstCrystal));
        gameOver();
    });
    $('#crystal2').on('click', function () {
        console.log(secondCrystal)
        scoreDisplay.html('Your Crystal Value: ' + (playerScore = playerScore + secondCrystal));
        gameOver();
    });
    $('#crystal3').on('click', function () {
        console.log(thirdCrystal)
        scoreDisplay.html('Your Crystal Value: ' + (playerScore = playerScore + thirdCrystal));
        gameOver();
    });
    $('#crystal4').on('click', function () {
        console.log(fourthCrystal)
        scoreDisplay.html('Your Crystal Value: ' + (playerScore = playerScore + fourthCrystal));
        gameOver();
    });

    // display scores
    $('#playerLosses').html('Losses ' + playerLosses)
    $('#playerWins').html('Wins ' + playerWins)

    scoreDisplay.html('Your Crystal Value: ' + playerScore);
    randomNumberDisplay.html('Goal Crystal Value: ' + goalNumber);
    console.log(goalNumber)
});