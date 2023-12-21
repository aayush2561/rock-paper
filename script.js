const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay=document.getElementById('user-choice')
const resultDisplay=document.getElementById('result')
let userChoice
let computerChoice

const possibleChoices=document.querySelectorAll('button')

possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener('click',(e) => {
    userChoice=e.target.id
    userChoiceDisplay.innerHTML =userChoice
    generateComputerChoice()
}))

function generateComputerChoice(){
    const randomNumber=Math.floor(Math.random()*3)+1
    if(randomNumber===1)
    {
        computerChoice="rock"
    }

    if(randomNumber===2)
    {
        computerChoice="paper"
    }

    if(randomNumber===3)
    {
        computerChoice="scissor"
    }
computerChoiceDisplay.innerHTML=computerChoice
}