/*
Name: Alexis Brum
Date Created:2018-10-01
Most recent revision: 2018-10-01
*/


function rollDice(){
  var roll;
  roll = Math.floor(Math.random()*6)+1;
  return roll;
}


function playGame(){
  var startingBet = Number(document.forms["luckySeven"]["startingBet"].value);
  var totalRolls = 0;
  var highestAmount = startingBet;
  var highRollCount = 0;
  var winningRoll = 4;
  var losingRoll = 1;
  var die1;
  var die2;
//  var score = new Array();
//  score.push(startingBet);

  if (startingBet == "" || isNaN(startingBet) || startingBet <= 0) {
      alert("Starting bet must be filled in with a positive number.");
      document.forms["luckySeven"]["startingBet"]
         .parentElement.className = "form-group has-error";
      document.forms["luckySeven"]["startingBet"].focus();
      return false;
  }


  document.getElementById("startBet").innerText = startingBet;

  do{
    die1 = rollDice();
    die2 = rollDice();
    totalRolls ++;

    if(die1+die2 == 7){
      startingBet = startingBet + winningRoll;

    } else{
      startingBet = startingBet - losingRoll;
    }

    if(highestAmount < startingBet){
      highestAmount = startingBet;
      highRollCount = totalRolls;
    }

//    score.push(startingBet);

  }while(startingBet > 0)

  document.getElementById("resultTable").style.display = "block";
  document.getElementById("submitButton").innerText = "Play Again";
  document.getElementById("totalRolls").innerText = totalRolls;
  document.getElementById("highestAmount").innerText = highestAmount;
  document.getElementById("highRollCount").innerText = highRollCount;
  document.forms["luckySeven"]["startingBet"].value = "";
  document.forms["luckySeven"]["startingBet"].focus();

//  document.getElementById("score").innerText = score;


  return false;

}
