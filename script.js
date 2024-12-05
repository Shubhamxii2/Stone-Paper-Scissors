let option = document.querySelectorAll(".option");
let stone = document.querySelector("#stone");
let msg = document.querySelector(".msg");
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#CompScore");
let CompScore = 0;
let UserScore = 0;
let checkWinner = (userChoice)=>{
    let win = ["stone", "paper", "scissor"];
    let compChoice = win[Math.floor((Math.random() * 3))];
    console.log(`Your choice is ${userChoice} & Computer Choice is ${compChoice}`);
    if(userChoice == compChoice){
        console.log("Draw");
        msg.innerText = "Draw";
        msg.style = "background-color : #FFF8DC";
    }
    else{
        if(userChoice === "stone" && compChoice === "paper"){
            CompScore++;
            compScore.innerText = CompScore;
            msg.innerText = "Lose";
            msg.style = "background-color : red";
        }
        else if(userChoice === "stone" && compChoice === "scissor"){
            UserScore++;
            userScore.innerText = UserScore;
            msg.innerText = "Win";
            msg.style = "background-color : green";
        }
        
        else if(userChoice === "paper" && compChoice === "stone"){
            UserScore++;
            userScore.innerText = UserScore;
            msg.innerText = "Win";
            msg.style = "background-color : green";
        }
        else if(userChoice === "paper" && compChoice === "scissor"){
            CompScore++;
            compScore.innerText = CompScore;
            msg.innerText = "Lose";
            msg.style = "background-color : red";
        }
        else if(userChoice === "scissor" && compChoice === "stone"){
            CompScore++;
            compScore.innerText = CompScore;
            msg.innerText = "Lose";
            msg.style = "background-color : red";
        }
        else if(userChoice === "scissor" && compChoice === "paper"){
            UserScore++;
            userScore.innerText = UserScore;
            msg.innerText = "Win";
            msg.style = "background-color : green";
        }
        else{
            msg.innerText = "Hi";
            
        }

    }
}
option.forEach(op => {
    op.addEventListener("click", ()=>{
        let userChoice = op.getAttribute("id");
        checkWinner(userChoice);
    })
});
