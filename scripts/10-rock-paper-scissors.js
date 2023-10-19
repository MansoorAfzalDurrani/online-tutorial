let score=JSON.parse(localStorage.getItem('score'));

if(score === null){
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
}

updateScoreElement();


console.log(JSON.parse(localStorage.getItem('score')));
function playGame(playerMove){
 
  const computerMove = pickComputerMove();

   console.log(computerMove);

    let result = '';

    if (playerMove === `Scissor`){
        if(computerMove === 'Rock'){
          result='you Lose.';
          console.log(' Scissor-Lose');
        } else if( computerMove === 'Paper'){
          result ='you Win.';
          console.log(' Scissor-Win');
        } else if(computerMove === 'Scissor'){
          result ='Ties.';
          console.log(' Scissor-Ties');
        }
    } else if( playerMove === 'Paper'){
             if(computerMove === 'Rock'){
                result='you Win.';
                console.log('paper-Win');
              } else if( computerMove === 'Paper'){
                result ='Ties.';
                console.log('Paper-Ties');
              } else if(computerMove === 'Scissor'){
                result ='you Lose.';
                console.log('Paper-Lose');
              } 
          } else if(playerMove === 'Rock'){
                  if(computerMove === 'Rock'){
                  result='Ties.';
                  console.log('Rock- Ties');
                  } else if( computerMove === 'Paper'){
                  result ='you Lose.';
                  console.log('Rock- Lose');
                  } else if(computerMove === 'Scissor'){
                  result ='you Win.';
                  console.log('Rock- Wins');
                  }
                }
    if( result === 'you Win.'){
      score.wins += 1;
    }else if (result ==='you Lose.'){
      score.losses += 1;
    }else if( result === 'Ties.'){
      score.ties += 1;
    }

  localStorage.setItem('score',JSON.stringify(score));
  
  updateScoreElement();

  document.querySelector('.js-result').innerHTML=`Result:${result}`;

  document.querySelector('.js-moves').innerHTML=`  you
    <img src="images/${playerMove}-emoji.png" class="move-icon">
    <img src="images/${computerMove}-emoji.png" class="move-icon">
    computer`;
  
    //images/rock-emoji.png
  
  //updateResultElement();
 // updateMoveElement();

 /*  alert( `you picked ${playerMove}, Computer picked ${computerMove }. ${result}
  Wins: ${score.wins} , Losses: ${score.losses}, Ties:${score.ties}`);
  */
}

function updateScoreElement(){
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} , Losses: ${score.losses}, Ties:${score.ties}`;
}
/* function updateResultElement(){
  document.querySelector('.js-result').innerHTML=`Result:${result}`;
}
function updateMoveElement(){
  document.querySelector('.js-moves').innerHTML=`you picked ${playerMove}, Computer picked ${computerMove }`;
}*/




 function pickComputerMove(){
 const randumNumber = Math.random();
 let computerMove ='';
if(randumNumber>=0 && randumNumber<1/3){
  computerMove = 'Rock';
}else if(randumNumber>=1/3 && randumNumber<2/3){
  computerMove = 'Paper';
}else if(randumNumber>=2/3 && randumNumber<1){
  computerMove = 'Scissor';
} 
return computerMove;
}    
  /*

      Strategy for JavaScrip
      1- Think about what steps we need(algorithm)
      2-convert those steps into code.
      Algorithm
      When we click a button
      1- computer randomly selects a move.
      2-compare the move to get the result
      3- update a score.
      4. Display the result and score in a group.

      */
