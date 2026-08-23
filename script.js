let userScore=0;
let comScore=0;

const choices =document.querySelectorAll(".choice")

const msg =document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const comScorePara =document.querySelector("#comp-score");


//computer choice 


const genComchoice=() => {
    let options=["rock", "paper", "scissor"]
    let rndIdx = Math.floor(Math.random()*3)
    return options[rndIdx];
    
}
const showwinner =(userwin, userChoice, comChoice) => {
    
    if ( userwin){
        
        userScore++;
        userScorePara.innerText= userScore;
        msg.innerText = "you win "
        msg.style.backgroundColor = "green";

    }else {
        
        comScore++;
        comScorePara.innerText = comScore;
        msg.innerText = "you lose"
        msg.style.backgroundColor = "red"
    }

}

const playGame=( userChoice ) => {
    //gencomchoice 
    const comChoice = genComchoice()

    
    if (userChoice === comChoice){
        //it's a draw game
        msg.innerText="game was draw.play again"
        msg.style.backgroundColor = "rgb(29, 29, 61)"

    }else {
        let userWin = true;
        if (userChoice === "rock")
            //paper ,scissor
            userWin = comChoice ==="paper"?false:true;
        else if ( userChoice ==="paper"){
            //rock , scissor 
            userWin= comChoice==="scissor"?false :true;
        }else {
            userWin= comChoice=== "rock"? false:true;
            
        }
        showwinner(userWin, userChoice , comChoice);
    }

};






// you are getting user choice 
choices.forEach((choice) => {
    
    choice.addEventListener("click",() => {
        const userChoice =choice.getAttribute("id")
        playGame(userChoice)
    });
});
























