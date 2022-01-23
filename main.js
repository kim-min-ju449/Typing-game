const wordInput = document.querySelector("#word-input")
const currentWord = document.querySelector("#current-word")
const scoreDisplay = document.querySelector("#score")
const timeDisplay = document.querySelector("#time")
const messageDisplay = document.querySelector("#message")

let words = ["banana", "key","car","javascript","scalper"];
let score = 0;


const randomIndex = Math.floor(Math.random()*5);


wordInput.addEventListener("input",e=>{
    const typedText = e.target.value;
    const currentText = currentWord.innerText;
    if(typedText.toUpperCase() === currentText.toUpperCase()){
        addScore()
        setNewWord()
    }
   
})

function setNewWord(){
    wordInput.value = "";
    messageDisplay.innerText = "Now Playing!!"
    const randomIndex = Math.floor(Math.random()*words.length);
    currentWord.innerText = words[randomIndex]
}

function addScore(){
    score = score +1;
    
    scoreDisplay.innerText = score

}