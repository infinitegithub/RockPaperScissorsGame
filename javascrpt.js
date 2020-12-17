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
    pcmove.setAttribute('style', 'display: flex;grid-column:3/4;margin:auto; grid-row:2/3;transform: rotate(180deg); justify-content: center; align-items: center');
    
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
           
             playerscore++;
    }   else  if ( computerplay == choices[1] && playerChoice == choices[0]){
        winmsg.textContent="you have lost! Paper beats Rock!  "
  
            computerscore++;
   } else  if ( computerplay == choices[1] && playerChoice == choices[2 ]){
                  winmsg.textContent="you won! Scissors cut Paper"
                  playerscore++;
     }  else  if ( computerplay == choices[2] && playerChoice == choices[1]){
        winmsg.textContent="you lost! Scissors cut Paper"
        computerscore++;
} else  if ( computerplay == choices[2] && playerChoice == choices[0]){
        winmsg.textContent="you have  won! Rock beats Scissors! "
             playerscore++;
    }  else  if ( computerplay == choices[0] && playerChoice == choices[2]){
        winmsg.textContent="you have  lost! Rock beats Scissors! "
            computerscore++;
    } 
    
    let pcscore = document.querySelector('.computer-score');

         pcscore.textContent= " "+ computerscore;

    let plyerscore = document.querySelector('.player-score');
         
        plyerscore.textContent= " "+ playerscore;
}
