let userScore = 0;
let compScore = 0;
let draw = 0;

const user_score = document.querySelector("#user_score")
const computer_score = document.querySelector("#computer_score")
const draw_game = document.querySelector("#draw_score")

const choice = document.querySelectorAll(".choice");
const result = document.querySelector("#result")

const gencompuchoice = () => {
    const options = ["rock", "paper", "scissor"]
    const randomIdx = Math.floor(Math.random()*3)
    return options[randomIdx];
    
}

const DrawGame = (userchoice, compuChoice) => {
    console.log("Game was draw"); 
    result.innerText = `Game draw, 
    
    ==>> Your choice = ${userchoice}, Computer choice = ${compuChoice} <<===
    
    Try again.`
    result.style.backgroundColor =  "yellow";
    result.style.color =  "black";
    draw++;
    draw_game.innerText = draw;
}

const showWinner = (userWin, userchoice, compuChoice) => {
    if (userWin){
        console.log("you win");
        result.innerText = `you Win!  

        ===>> your choice = ${userchoice}, Computer choice = ${compuChoice} <<=== 

          ${userchoice} beats ${compuChoice} `
        result.style.backgroundColor =  "green"
        result.style.color =  "white"
        userScore++;
        user_score.innerText = userScore
    }
    else{
        console.log("you loose");
        result.innerText = `you loose! 

        ===>> your choice = ${userchoice}, Computer choice = ${compuChoice} <<===

          ${compuChoice} beats ${userchoice} `
        result.style.backgroundColor =  "red"
        result.style.color =  "white"
        compScore++;
        computer_score.innerText = compScore
    }
}

const playGame = (userchoice) => {
     console.log("User Choice was", userchoice);

    const compuChoice = gencompuchoice();
    console.log("computer choice was", compuChoice );
    
    if (userchoice === compuChoice){
        DrawGame(userchoice, compuChoice);
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = compuChoice === "paper" ? false : true;
        }
        else if (userchoice === "paper"){
            userwin = compuChoice === "scissor" ? false : true ;
        }
        else{
            userwin = compuChoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compuChoice);
    }
}


choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playGame(userchoice);

    })
})

const reset = document.querySelector("#reset");

reset.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    draw = 0;
    draw_game.innerText = draw;
    user_score.innerText = userScore;
    computer_score.innerText = compScore;
    result.innerText = 'Select your Choice.'
    result.style.backgroundColor = 'Black'
    result.style. color = 'white'
    
    
})


