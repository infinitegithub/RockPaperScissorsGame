let playerchoice = document.querySelector('.playerchoices')
let playerChoice;
    
playerchoice.addEventListener('click', (e) => {
       playerChoice = e.target.alt;         
       
       playRound()
})

let choices = ["rock", "paper", "scissors"];
// number of rounds the computer won

function getComputerChoice(){
    let randComChoice = choices[Math.floor( Math.random()* choices.length)];
    return randComChoice;
}
function playRound(){
          let computerscore = 0; 
          let playerscore = 0;
          let computerplay = getComputerChoice();
        console.log(computerplay);
        
     if (computerplay == playerChoice){
             alert(" it's a draw!!!");
    }  else  if ( computerplay == choices[0] && playerChoice == choices[1]){
             alert("you have Won! Paper beats Rock!  ")
            // adding 1 to the score if the condition is met
            //the same goes for computerscore it gets incremented by 1 each time the condition is met
             playerscore += 1;
     }  else  if ( computerplay == choices[1] && playerChoice == choices[2 ]){
             alert("you won! Scissors cut Paper")
             playerscore += 1;
     }  else  if ( computerplay == choices[2] && playerChoice == choices[0]){
             alert("you have  won! Rock beats Scissors! ")
             playerscore += 1;
    }  else {
             alert("You Lose!")
             computerscore += 1;
    }
         console.log("the score of the player is "+playerscore);
         console.log("the score of the computer is "+computerscore);
}

















































    

 /*(){
     let anothergame = confirm("Would you like to play an other game?");
     if (anothergame == true){
         playRound();
     }
 } */