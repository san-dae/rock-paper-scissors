/*Starting ANEW!*/

const textElement = document.querySelector('.commentary p');
let textToType = "Do you dare to play? ";
let charIndex = 0;

function typeWriter() 
{
    if (charIndex < textToType.length) {
        textElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100); // Adjust typing speed here (milliseconds)a
    }
}

typeWriter();

function removeWriter(callback) {
    if (charIndex > 0) {
        charIndex--;
        textElement.textContent = textToType.substring(0, charIndex);
        setTimeout(() => removeWriter(callback), 30);
    } else {
        if (callback) callback(); // Only start typing when removal is fully done
    }
}

function showTextAfterRemoval(newText) {
    removeWriter(() => {
        textToType = newText;
        charIndex = 0;
        typeWriter();
    });
}

/*make the score appear and the game start after clicking play*/

playButton = document.querySelector(".play");
scoreDiv = document.querySelector(".score");

let gameFlag = true;

function value(event)
{
    let human = event.currentTarget.id;

    playRound(human);
}

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


playButton.addEventListener("click", () => 
{
    rock.addEventListener("click", value);
    paper.addEventListener("click",value);
    scissors.addEventListener("click",value);
    
    playButton.remove();
    removeWriter();        
    setTimeout(() => 
    {
        textToType = "Pick your choice.";
        charIndex = 0;
        typeWriter();
    }, textToType.length * 40 + 100); 

    scoreDiv.style.cssText = "display: block;";
});

const actualScore = document.querySelector("#two");

let humanScore = 0;
let compScore = 0;

function getComputerChoice()
{
    let vari = Math.floor(Math.random() * 3); // apparently gives int between 0, 1 or 2

    let compChoice;
    if (vari === 0)
    {
        compChoice = "rock";
    }
    else if (vari === 1)
    {
        compChoice = "paper";
    }
    else
    {
        compChoice = "scissors";
    }

    return compChoice;
}

function playRound(human)
{
    if (gameFlag == false)
    {
        return;
    }
    
    let comp = getComputerChoice();

    if (comp==="rock" && human==="scissors")
    {
        showTextAfterRemoval("Rock.");
        compScore++;
    }

    else if (comp === "scissors" && human === "rock")
    {
        showTextAfterRemoval("Scissors.");
        humanScore++;
    }

    else if (comp === "rock" && human === "paper")
    {
        showTextAfterRemoval("Rock.");
        humanScore++;
    }

    else if (comp === "paper" && human === "rock")
    {
        showTextAfterRemoval("Paper.");
        compScore++;
    }

    else if (comp==="paper" && human==="scissors")
    {
        showTextAfterRemoval("Paper.");
        humanScore++;
    }

    else if (comp === "scissors" && human==="paper")
    {
        showTextAfterRemoval("Scissors.");
        compScore++;
    }

    else if (comp==="scissors" && human==="rock")
    {
        showTextAfterRemoval("Scissors.");
        humanScore++;
    }

    else if (comp === "rock" && human==="scissors")
    {
        showTextAfterRemoval("Rock.");
        compScore++;
    }

    else if ((comp === "rock" && human==="rock") || (comp === "paper" && human==="paper") || (comp === "scissors" && human==="scissors"))
    {
        showTextAfterRemoval(`Tie. ${comp}.`);        
    }

    else
    {
        console.log("");
    }

    actualScore.textContent = `${humanScore} - ${compScore}`;

    if (humanScore == 5 || compScore == 5) 
    {
        gameFlag = false;
        
        rock.removeEventListener("click", value);
        paper.removeEventListener("click", value);
        scissors.removeEventListener("click", value);

        if (compScore > humanScore) {
            showTextAfterRemoval("A disappointing yet predictable loss.");
        } else {
            showTextAfterRemoval("You sold your soul to win, didn't you?");
        } 
        
        return;
    }
}
