function getComputerChoice(){
    //Need a way to randomize choice to 1,2
    let choice = Math.floor(Math.random() * 3);

    if (choice === 1){
        return "Rock";
    }
    else if (choice === 2){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper, Scissors?");
    choice = choice.toLowerCase();
    
    if(choice === "rock"){
        return "Rock";
    }
    else if (choice === "paper"){
        return "Paper";
    }
    else if (choice === "scissors"){
        return "Scissors";
    }
    else{
        return "No options for that";
    }
}

    let humanScore = 0;
    let computerScore = 0;
    let gamesPlayed = 0;
    const results = document.querySelector(".results")
    //const resultMatch = Document
function playRound(humanChoice, computerChoice) {
  //Okay i need to write basic logic for rock.paper,scissors, i guess i'll keep it simple and use ifs(This is bad design i feel like)
  //v2. i guess these console logs, need to be DOM methods?



  if(humanChoice === "Rock" && computerChoice === "Scissors"){
    humanScore++;
    //How to change this to display in results div?
    //console.log(`You win, ${humanChoice} beats ${computerChoice}`);
    results.textContent = `You win, ${humanChoice} beats ${computerChoice}`
  }
  else if(humanChoice === "Paper" && computerChoice === "Rock"){
    humanScore++;
    //console.log(`You win, ${humanChoice} beats ${computerChoice}`);
    results.textContent = `You win, ${humanChoice} beats ${computerChoice}`
  }
  else if(humanChoice === "Scissors" && computerChoice === "Paper"){
    humanScore++;
    //console.log(`You win, ${humanChoice} beats ${computerChoice}`);
    results.textContent = `You win, ${humanChoice} beats ${computerChoice}`
  }
  else if (humanChoice === computerChoice){
    //console.log("Same Choice, Tie");
    results.textContent = "Same Choice, Tie"
  }
  else if(computerChoice === "Rock" && humanChoice === "Scissors"){
    computerScore++;
    //console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
    results.textContent = `You lose, ${computerChoice} beats ${humanChoice}`
  }
  else if (computerChoice === "Paper" && humanChoice === "Rock"){
    computerScore++;
    //console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
    results.textContent = `You lose, ${computerChoice} beats ${humanChoice}`
  }
  else if(computerChoice === "Scissors" && humanChoice === "Paper"){
    computerScore++;
    //console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
    results.textContent = `You lose, ${computerChoice} beats ${humanChoice}`
  }
  else{
    //Could be a computer win else, but i'll keep for error stuff
    console.log("Something went wrong!")
    results.textContent = "Error!"
  }

  gamesPlayed++;
  if (gamesPlayed >= 5){
    if(humanScore === computerScore){
        console.log("Same score, Tie")
    }
    else if(computerScore > humanScore){
        console.log("You lose")
    }
    else if(humanScore > computerScore){
        console.log("You win")
    }
    gamesPlayed = 0;
  }
}


/*
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let gamesPlayed = 0;
    
    //Commented out for new way
    function playRound(humanChoice, computerChoice) {
  //Okay i need to write basic logic for rock.paper,scissors, i guess i'll keep it simple and use ifs(This is bad design i feel like)
  if(humanChoice === "Rock" && computerChoice === "Scissors"){
    humanScore++;
    console.log(`You win, ${humanChoice} beats ${computerChoice}`);
  }
  else if(humanChoice === "Paper" && computerChoice === "Rock"){
    humanScore++;
    console.log(`You win, ${humanChoice} beats ${computerChoice}`);
  }
  else if(humanChoice === "Scissors" && computerChoice === "Paper"){
    humanScore++;
    console.log(`You win, ${humanChoice} beats ${computerChoice}`);
  }
  else if (humanChoice == computerChoice){
    console.log("Same Choice, Tie");
  }
  else if(computerChoice === "Rock" && humanChoice === "Scissors"){
    computerScore++;
    console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
  }
  else if (computerChoice === "Paper" && humanChoice === "Rock"){
    computerScore++;
    console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
  }
  else if(computerChoice === "Scissors" && humanChoice === "Paper"){
    computerScore++;
    console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
  }
  else{
    console.log("Something went wrong!")
  }
}
    //I guess i'll use a while loop
    
    //Commented out for revision
    //while(gamesPlayed < 5){
        //Added here so these selections get called through each iteration, using playRound to call them, won't recall them since they are techinically variables
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        playRound(humanSelection,computerSelection);
        gamesPlayed++;
    //}
    if(humanScore > computerScore){
        console.log("You win!")
    }
    else if(computerScore > humanScore){
        console.log("You lose")
    }
    else if(computerScore == humanScore){
        console.log("Same score, Tie")
    }
}*/


//playGame()

//Buttons for RPS

const rockButton = document.querySelector(".rock-button")
const paperButton = document.querySelector(".paper-button")
const scissorButton = document.querySelector(".scissors-button")

//Event Listeners
rockButton.addEventListener("click", (e) => {
    //Just called, for no propagation?
    e.preventDefault()
    playRound("Rock", getComputerChoice() )
})

paperButton.addEventListener("click", (e) => {
    //Just called, for no propagation?
    e.preventDefault()
    playRound("Paper", getComputerChoice() )
})

scissorButton.addEventListener("click", (e) => {
    //Just called, for no propagation?
    e.preventDefault()
    playRound("Scissors", getComputerChoice() )
})

//Should i add a div to the html or create it here?
//Ill make it in the html then reference it here, then dynamically change whatever needs to be changed, here




