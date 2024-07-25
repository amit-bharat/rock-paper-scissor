console.log("hello game");
let humanScore=0;
let computerScore=0;

let win=0;
let lose=0;
let draw=0;

//function to get computer choice
function getComputerChoice(){
    const choice=["rock","paper","scissors"];
    let random_number=Math.floor(Math.random()*3);
    return choice[random_number];
}

//function to get user input
function getHumanChoice(){
    let user_input=prompt('Enter input from  "rock" "paper" or "scissors"');
    user_input=user_input.toLowerCase();  //make input case-insensitive
    if(user_input ==="rock" || user_input==="paper" || user_input==="scissors"){
        return user_input;
    }
    else{
        console.log("user enter a wrong choice, Enter correct choice again");
        getHumanChoice();
    }
        
    }

 //function to play a round of game
 function playRound(humanChoice,computerChoice){
    if(humanChoice === computerChoice){
        console.log("both choose same! so this round is Draw");
        draw++;
    }
    else if((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock") )
        {
            humanScore++;
            // win++;
            console.log(`you win! ${humanChoice} beats ${computerChoice}`);
        } 
    else{
        computerScore++;
        // lose++;
        console.log(`you lose! ${computerChoice} beats ${humanChoice}`);
    }    

 }   

 //function to play game (where the other functions are called to play)
 function playGame(){
    let humanChoice;
    let computerChoice;
    for(let i=1;i<=5;i++){
        humanChoice=getHumanChoice();        //get computer choice
        computerChoice=getComputerChoice();  //get human choice  
        playRound(humanChoice,computerChoice);
    }
    if(draw===5){
        console.log("all 5 rounds are draw so game is draw! please play again");
    }
    else if(humanScore>computerScore){
        console.log(`you win:${humanScore} rounds out of 5 rounds! so you win the Game`)
    }
    else if(humanScore === computerScore){
        console.log(`Game is Draw with you win:${humanScore} and lose:${computerScore}`);
    }
    else{
        console.log(`you lose:${computerScore} out of 5 rounds! so you lose the Game`);
    }
 } 
 playGame();
