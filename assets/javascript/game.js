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

    function assignCrystalNumbers() {
        $('.crystal').each(function() {
            $(this).attr('data-number', Math.floor(Math.random() * 12) + 1)
            $(this).on('click', function() {
                console.log($(this).attr('data-number'))
                let crystalNum = parseInt($(this).attr('data-number'))
                scoreDisplay.html('Your Crystal Value: ' + (playerScore += crystalNum));
                gameOver();    
            })
        })
    }
    // game reset function
    function resetGame() {
        playerScore = 0;
        scoreDisplay.html('Your crystal Value ' + playerScore);
        goalNumber = Math.floor(Math.random() * 120) + 19;
        randomNumberDisplay.html('Goal Crystal Value: ' + goalNumber);
        $('.crystal').off();
        assignCrystalNumbers();

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
     
    // display scores
    $('#playerLosses').html('Losses ' + playerLosses)
    $('#playerWins').html('Wins ' + playerWins)
    assignCrystalNumbers();
    scoreDisplay.html('Your Crystal Value: ' + playerScore);
    randomNumberDisplay.html('Goal Crystal Value: ' + goalNumber);
    console.log(goalNumber)
});