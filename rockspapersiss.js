
console.log("Hello World");


function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3);
    let choice = "";
    if(randomNumber === 0){
        choice = "scissors";

    } else if(randomNumber === 1){
        choice = "paper";


    }else{
        choice = "rock";

    }

    return choice;

}




function getHumanChoice(){
     let sign = prompt("What's your sign? rock, paper, or scisors ?");
    return sign;
}




let humanScore = 0;

let computerScore = 0;

function playRound(humanChoice, computerChoice) {
        let refinedHumanChoice = humanChoice.toLowerCase();
        let result = "";

        if (refinedHumanChoice === computerChoice) {
            result = "It's a tie!";
            console.log(`Tie! Both chose ${humanChoice}`);
        } else if (
            (refinedHumanChoice === "rock" && computerChoice === "scissors") ||
            (refinedHumanChoice === "paper" && computerChoice === "rock") ||
            (refinedHumanChoice === "scissors" && computerChoice === "paper")
        ) {
            result = "Human wins";
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        } else {
            result = "Computer wins";
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        }

        
}


;



function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
   playRound(humanSelection,computerSelection);

}

playGame();

playGame();

playGame();

playGame();

playGame();

if(humanScore === computerScore){
    console.log("Tie after 5 games");

}else if(humanScore < computerScore) {
    console.log("computer wonn the event");
}else{
     console.log("Congrats you won unnbelievable well done");

}