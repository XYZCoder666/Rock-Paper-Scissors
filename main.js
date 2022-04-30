const playerScore = document.getElementById("playerScore");
const playerChoice = document.getElementById("playerChoice");

const computerScore = document.getElementById("computerScore");
const computerChoice = document.getElementById("computerChoice");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");

const resultText = document.getElementById("resultText");

const allGameImg = document.querySelectorAll('img');

const selections = {
    Rock: { name:'Rock' , defeat:'Scissors'},
    Paper: { name:'Paper' , defeat:'Rock'},
    Scissors: { name:'Scissors' , defeat:'Paper'}
};

let computerSelect = '';
let playerScoreNumber = 0;
let computerScoreNumber = 0;

// update Score
function updateScore(playerSelect){
    console.log(playerSelect, computerSelect);
    const select = selections[playerSelect]
    if(playerSelect === computerSelect){
        resultText.textContent = "It's a tie";
        document.body.style.backgroundColor = "white";
    }
    else if(select.defeat.indexOf(computerSelect) > -1){
        resultText.textContent = "You Won!";
        document.body.style.backgroundColor = "green";
        playerScoreNumber++;
        playerScore.textContent = playerScoreNumber;

    }
    else{
        resultText.textContent = "You Lost";
        document.body.style.backgroundColor = "red";
        computerScoreNumber++;
        computerScore.textContent = computerScoreNumber;
    }
}

// Random Computer Choice
function computerRandomSelect(){
    const computerSelectNumber = Math.random();
   
    if(computerSelectNumber < 0.3){
        computerSelect = 'Rock';
    }
    else if(computerSelect <= 0.7){
        computerSelect = 'Paper';
    }
    else{
        computerSelect = 'Scissors'
    }
    displayComputerSelect(computerSelect)
}

// passing Computer selection and styling buttons
function displayComputerSelect(computerSelect){

     // styling the computerSelection
     switch(computerSelect){
        case 'Rock':
            computerRock.classList.add('selected');
            computerChoice.textContent = '--- Rock';
            break;
        case 'Paper':
            computerPaper.classList.add('selected');
            computerChoice.textContent = '--- Paper';
            break;
        case 'Scissors':
            computerScissors.classList.add('selected');
            computerChoice.textContent = '--- Scissors';  
            break;
        default:
            break;
    }
}

// Reset selected
function resetSelected(){
    allGameImg.forEach((img) => {
        img.classList.remove('selected')
    })
}


// passing player selection
function select(playerSelect){
    resetSelected()
 
    // styling the playerSelection
    switch(playerSelect){
        case 'Rock':
            playerRock.classList.add('selected');
            playerChoice.textContent = '--- Rock';
            break;
        case 'Paper':
            playerPaper.classList.add('selected');
            playerChoice.textContent = '--- Paper';
            break;
        case 'Scissors':
            playerScissors.classList.add('selected');
            playerChoice.textContent = '--- Scissors';  
            break;
        default:
            break;
    }
    computerRandomSelect();
    updateScore(playerSelect);
}