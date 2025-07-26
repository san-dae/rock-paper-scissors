/*Starting ANEW!*/

const textElement = document.querySelector('.commentary p');
let textToType = "Do you dare to play? ";
let charIndex = 0;

function typeWriter() {
    if (charIndex < textToType.length) {
        textElement.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, 100); // Adjust typing speed here (milliseconds)a
    }
}

// Call the function to start the effect
typeWriter();

function removeWriter()
{
    if (charIndex > 0) {
        charIndex--;
        textElement.textContent = textToType.substring(0, charIndex);
        setTimeout(removeWriter, 30);
    }
}

function showTextAfterRemoval(newText) {
    let delay = textToType.length * 30 + 80;
    removeWriter();
    setTimeout(() => {
        textToType = newText;
        charIndex = 0;
        typeWriter();
    }, delay);
}

/*make the score appear and the game start after clicking play*/

playButton = document.querySelector(".play");
scoreDiv = document.querySelector(".score");

function value(event)
{
    let human = event.currentTarget.id;

    console.log(human);
    playRound(human);
}

const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissors = document.querySelector("#scissors");


playButton.addEventListener("click", () => {
    rock.addEventListener("click", value);

    paper.addEventListener("click",value);

    scissors.addEventListener("click",value);
    
    playButton.remove();
    removeWriter();        
    setTimeout(() => {
        textToType = "Pick your choice.";
        charIndex = 0;
        typeWriter();
    }, textToType.length * 40 + 100); // Wait till old text is removed

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
    let comp = getComputerChoice();
    

    if (comp==="rock" && human==="scissors")
    {
        showTextAfterRemoval("Computer played Rock.");
        compScore++;
    }
    else if (comp === "scissors" && human === "rock")
    {
        showTextAfterRemoval("Computer played Scissors.");
        humanScore++;
    }

    else if (comp === "rock" && human === "paper")
    {
        showTextAfterRemoval("Computer played Rock.");
        humanScore++;
    }

    else if (comp === "paper" && human === "rock")
    {
        showTextAfterRemoval("Computer played Paper.");
        compScore++;
    }

    else if (comp==="paper" && human==="scissors")
    {
        showTextAfterRemoval("Computer played Paper.");
        humanScore++;
    }

    else if (comp === "scissors" && human==="paper")
    {
        showTextAfterRemoval("Computer played Scissors.");
        compScore++;
    }

    else if (comp==="scissors" && human==="rock")
    {
        showTextAfterRemoval("Computer played Scissors.");
        humanScore++;
    }

    else if (comp === "rock" && human==="scissors")
    {
        showTextAfterRemoval("Computer played Rock.");
        compScore++;
    }

    else if ((comp === "rock" && human==="rock") || (comp === "paper" && human==="paper") || (comp === "scissors" && human==="scissors"))
    {
        showTextAfterRemoval(`Computer played ${comp}. Tie.`);        
    }

    else
    {
        console.log("");
    }

    actualScore.textContent = `${humanScore} - ${compScore}`;

    if (humanScore == 5 || compScore == 5) 
    {
        setTimeout(() => 
        {
            rock.removeEventListener("click", value);
            paper.removeEventListener("click", value);
            scissors.removeEventListener("click", value);

            if (compScore > humanScore) {
                showTextAfterRemoval("A disappointing yet predictable loss.");
            } else {
                showTextAfterRemoval("You sold your soul to win, didn't you?");
            } 
        }, textToType.length * 140 + 150); 
    }
}