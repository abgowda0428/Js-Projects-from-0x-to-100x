// Rock-Paper-Scissor Game.

const prompt = require('prompt-sync')();

function Game(ChoiceOfUser){

    let Choice = ["Rock","Paper","Scissor"];
    let UserChoice = Choice[ChoiceOfUser];
    let ComputerChoice = Choice[Math.floor(Math.random()*Choice.length)];
    
    if(UserChoice === ComputerChoice){
        console.log("Draw");
    }
    else if(UserChoice === "Rock" && ComputerChoice === "Paper"){
        console.log("User Won");
    }
    else if(UserChoice === "Scissor" && ComputerChoice === "Paper"){
        console.log("User Won");
    }
    else if(UserChoice === "Paper" && ComputerChoice === "Rock"){
        console.log("User Won");
    }
    else{
        console.log("Computer Won");
    }
};

let AskUser = prompt("Chossse ('0' For Rock && '1' For Paper && '2' For Scissor.)");

Game(AskUser);