

let choices = ["rock", "paper", "scissors"];

// number of rounds the computer won
let computerscore = 0;

// number of rounds the player have won 
let playerscore = 0;

// a function that returns a random choice from the choices array
function getComputerChoice(){
    let randComChoice = choices[Math.floor( Math.random()* choices.length)];
    return randComChoice;
}
// ask for players name and storing it in the variable username
let username = prompt("what's your name ?");
// making the username case insensitive by making it lowercase
let playerName = username.toLowerCase();

// creating a function that  takes the users input and makes sure  it from within the array "choices[]"
// and if it is not it propmts the user to input his chosen choice again 
function getPlayerpick(){ 
    let choice = prompt("what's your choice " + playerName);
        choice = choice.toLowerCase();
//this where it checks if the item is in the array
    if(!choices.includes(choice)){
        alert("Wrong input!! try again");
 getPlayerpick();
    } 
    else {
       return choice;
    }
    }  
 
// function that plays one single round
function playRound(){

    let computerplay = getComputerChoice();
    //console.log(computerplay);
    let playerChoice = getPlayerpick();
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
     //console.log("the score of the player is "+playerscore);
     //console.log("the score of the computer is "+computerscore);
}
  
   
for (let index = 1; index <= 5; index++) {
    playRound();
    
}

if (playerscore > computerscore){
    
    alert("Congratulation  you have won!");
    //and regardless if win or lose you get the play again function
    playAgain();
}
else{
    alert("My sincere apologies  you lost! ");
    playAgain();
}
// to give the play the option to play again without the need to refresh the page
// and enter your name 
 function playAgain(){
     let anothergame = confirm("Would you like to play an other game?");
     if (anothergame == true){
         playRound();
     }
 }