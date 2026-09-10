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
    //These control the ol of each game
    const resultsList = document.querySelector(".results-list")
    //This shows the result after 5 games
    const resultMatch = document.querySelector(".result-match")
    const resultWinner = document.querySelector(".result-winner")
function playRound(humanChoice, computerChoice) {
  //Okay i need to write basic logic for rock.paper,scissors, i guess i'll keep it simple and use ifs(This is bad design i feel like)
  //v2. i guess these console logs, need to be DOM methods?
    
    //Per game elements
    const newListItem = document.createElement("li");
    const listText = document.createElement("span");

    newListItem.appendChild(listText);

  if(humanChoice === "Rock" && computerChoice === "Scissors"){
    humanScore++;
    //How to change this to display in results div?
    //console.log(`You win, ${humanChoice} beats ${computerChoice}`);
    listText.textContent = `You win, ${humanChoice} beats ${computerChoice}`
  }
  else if(humanChoice === "Paper" && computerChoice === "Rock"){
    humanScore++;
    //console.log(`You win, ${humanChoice} beats ${computerChoice}`);
    listText.textContent = `You win, ${humanChoice} beats ${computerChoice}`
  }
  else if(humanChoice === "Scissors" && computerChoice === "Paper"){
    humanScore++;
    //console.log(`You win, ${humanChoice} beats ${computerChoice}`);
    listText.textContent = `You win, ${humanChoice} beats ${computerChoice}`
  }
  else if (humanChoice === computerChoice){
    //console.log("Same Choice, Tie");
    listText.textContent = "Same Choice, Tie"
  }
  else if(computerChoice === "Rock" && humanChoice === "Scissors"){
    computerScore++;
    //console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
    listText.textContent = `You lose, ${computerChoice} beats ${humanChoice}`
  }
  else if (computerChoice === "Paper" && humanChoice === "Rock"){
    computerScore++;
    //console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
    listText.textContent = `You lose, ${computerChoice} beats ${humanChoice}`
  }
  else if(computerChoice === "Scissors" && humanChoice === "Paper"){
    computerScore++;
    //console.log(`You lose, ${computerChoice} beats ${humanChoice}`);
    listText.textContent = `You lose, ${computerChoice} beats ${humanChoice}`
  }
  else{
    //Could be a computer win else, but i'll keep for error stuff
    console.log("Something went wrong!")
    listText.textContent = "Error!"
  }

  //Puts item in results list, should i erase items after 5?
  resultsList.appendChild(newListItem)

  resultMatch.textContent = `Score: You: ${humanScore} vs Com: ${computerScore}`
  resultWinner.textContent = "playing games..."
  
    if(humanScore >= 5){
        resultWinner.textContent = "You Win"
        disableButtons()
    }
    if(computerScore >= 5){
        resultWinner.textContent = "You lose"
        disableButtons()
    }
  }


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
function disableButtons(){
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorButton.disabled = true;
}



