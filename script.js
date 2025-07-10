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

function getHumanChoice()
{
    let human = prompt("Enter your choice:","rock,paper,scissors");

    return human;
}

function playRound()
{
    let comp = getComputerChoice();
    let human = (getHumanChoice()).toLowerCase();

    console.log(`You played ${human}`);

    if (comp==="rock" && human==="scissors")
    {
        console.log("Computer played Rock. You lost.");
        compScore++;
    }
    else if (comp === "scissors" && human === "rock")
    {
        console.log("Computer played Scissors. You won.");
        humanScore++;
    }

    else if (comp === "rock" && human === "paper")
    {
        console.log("Computer played Rock. You won.");
        humanScore++;
    }

    else if (comp === "paper" && human === "rock")
    {
        console.log("Computer played Paper. You lost.");
        compScore++;
    }

    else if (comp==="paper" && human==="scissors")
    {
        console.log("Computer played Paper. You won.");
        humanScore++;
    }

    else if (comp === "scissors" && human==="paper")
    {
        console.log("Computer played Scissors. You lost.");
        compScore++;
    }

    else if (comp==="scissors" && human==="rock")
    {
        console.log("Computer played Scissors. You won.");
        humanScore++;
    }

    else if (comp === "rock" && human==="scissors")
    {
        console.log("Computer played Rock. You lost.");
        compScore++;
    }

    else if ((comp === "rock" && human==="rock") || (comp === "paper" && human==="paper") || (comp === "scissors" && human==="scissors"))
    {
        console.log(`Computer played ${comp}. Tie!`);
    }

    else
    {
        console.log("Surely you haven't mistyped it, have you?");
    }
}

function playGame()
{
    for (let i=0; i<5;i++)
    {
        playRound();
    }

    console.log("Computer Score:",compScore);
    console.log("Human Score:",humanScore);

    if (compScore > humanScore)
    {
        console.log("Computer won!");
    }

    else if (compScore < humanScore)
    {
        console.log("Human won!");
    }

    else
    {
        console.log("Tie! Ain't that nice~~");
    }
}

playGame();