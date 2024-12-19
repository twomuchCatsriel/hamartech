// vars 
const ans_buttonList = document.getElementsByClassName("ans");
const quizSect = document.getElementById("quiz");
const resultSect = document.getElementById("result");
const resField = document.getElementById("res");
const quest = document.getElementById("quest");
const questnum = document.getElementById("questnum");

const spanRight = document.getElementById("right");

// code 
let questionNumber = 0;
let correctPoints = 0;
const correctOrder = "abdbc";

function setQuestionText(){ // changes button and question text 
    if(questionNumber < 5){
        quest.innerHTML = questions[questionNumber];
        questnum.innerHTML = questionNumber + 1; 
        for(let i = 0; i < ans_buttonList.length; i++){
            ans_buttonList[i].innerHTML = choices[questionNumber][i];
        }
    }
}

for(let i = 0; i < ans_buttonList.length; i++){
    ans_buttonList[i].onclick = function(){
        // clicked 
        if(ans_buttonList[i].id === correctOrder[questionNumber]){ // check if the player presses the right buttonx
            correctPoints += 1; // correct 
        } else{
            console.log("fail"); //incorrect
        }

        if(questionNumber == 4){ // end quiz after 5 questions
            quizSect.style.display = "none";
            spanRight.innerHTML = correctPoints // set points
            
            if(correctPoints === 5){
                resField.innerHTML = "Du svarte alt riktig! Du er med på trekningen av en Datamaskin fra InfinityTech Systems!"
            } else{
                resField.innerHTML = "Du kvalifiserte ikke til å bli med på trekningen av en datamaskin. Men, det er ikke over!"
            }
            resultSect.style.display = "inline";
            resultSect.style.margin = "50px";

            localStorage.setItem("v", correctPoints);
        }

        questionNumber += 1;

        setQuestionText();

    }
}

document.body.onload = function(){
    setQuestionText();

    if(localStorage.getItem("v") !== null){
        quizSect.style.display = "none";

        spanRight.innerHTML = localStorage.getItem("v");
        
        if(parseInt(localStorage.getItem("v")) === 5){
            resField.innerHTML = "Du svarte alt riktig! Du er med på trekningen av en Datamaskin fra InfinityTech Systems!"
        } else{
            resField.innerHTML = "Du kvalifiserte ikke til å bli med på trekningen av en datamaskin. Men, det er ikke over!"
        }
        
        resultSect.style.margin = "50px";
        resultSect.style.display = "inline";

    }
}