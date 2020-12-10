let choices = ["rock", "paper", "scissors"];
let computerplay;

const playerchoice = document.querySelector('.playerchoices')   
 playerchoice.addEventListener('click', (e) => {
       playerChoice = e.target.alt;         
      // console.log(e.target.alt);
        computerplay = getComputerChoice();  
       playRound();
})
function getComputerChoice(){
    let randomChoice = choices[Math.floor( Math.random()* choices.length)];
     //console.log(randomChoice);
    return randomChoice;
}

 function displaypcchoice(){
    let pcmove = document.querySelector('#'+computerplay);
    pcmove.style.cssText = 'display: flex; justify-content: center; align-content: center; align-items: center;'

    setTimeout(() => {pcmove.style.cssText = "display: none;"
        
    }, 2000);
 }
 let computerscore = 0; 
 let playerscore = 0;

function playRound(){
   
    const winmsg =document.querySelector('.winmsg');
       displaypcchoice();   
     if (computerplay === playerChoice){
        winmsg.textContent=" it's a draw!!!";
    }  else  if ( computerplay == choices[0] && playerChoice == choices[1]){
                 winmsg.textContent="you have Won! Paper beats Rock!  "
           
             playerscore += 1;
    }   else  if ( computerplay == choices[1] && playerChoice == choices[0]){
        winmsg.textContent="you have lost! Paper beats Rock!  "
  
            computerscore+= 1;
   } else  if ( computerplay == choices[1] && playerChoice == choices[2 ]){
                  winmsg.textContent="you won! Scissors cut Paper"
                  playerscore += 1;
     }  else  if ( computerplay == choices[2] && playerChoice == choices[1]){
        winmsg.textContent="you lost! Scissors cut Paper"
        computerscore += 1;
} else  if ( computerplay == choices[2] && playerChoice == choices[0]){
        winmsg.textContent="you have  won! Rock beats Scissors! "
             playerscore += 1;
    }  else  if ( computerplay == choices[0] && playerChoice == choices[2]){
        winmsg.textContent="you have  lost! Rock beats Scissors! "
            computerscore += 1;
    } 
    
    let pcscore = document.querySelector('.computer-score');

         pcscore.textContent= " "+ computerscore;

    let plyerscore = document.querySelector('.player-score');
         
        plyerscore.textContent= " "+ playerscore;
}















































    

 /*(){
     let anothergame = confirm("Would you like to play an other game?");
     if (anothergame == true){
         playRound();
     }
 } */