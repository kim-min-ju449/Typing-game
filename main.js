const wordInput = document.querySelector("#word-input")
const currentWord = document.querySelector("#current-word")
const scoreDisplay = document.querySelector("#score")
const timeDisplay = document.querySelector("#time")
const messageDisplay = document.querySelector("#message")

const GAME_TIME = 5;

const API_URL = "https://random-word-api.herokuapp.com/word?number=100"
function l1(){
    alert("일반을 선택하였습니다");
    let words = ["banana", "key","car","javascript","scalper"];
    let score = 0;
    let time = 0;
    let timeInterval;
    let isPlaying = false;
    let isReady = false;

    init()



    async function init(){
        const res = await fetch(API_URL);
        const data = await res.json();
        words = data.filter(item=>{
            return item.length< 7
            isReady = true;
        })
        console.log(words)
    }

    const randomIndex = Math.floor(Math.random()*5);

    time=GAME_TIME;


    wordInput.addEventListener("input",e=>{
        const typedText = e.target.value;
        const currentText = currentWord.innerText;
        if(typedText.toUpperCase() === currentText.toUpperCase()){
            addScore()
            setNewWord()
        }
    
    })
    function countDown(){
        console.log(time)
        time = time -1;
        timeDisplay.innerText = time;
        if(time ===0){
            gameover();
        }
    }

    function gameover(){
        console.log("game over");
        isPlaying = false;
        time =0;
        clearInterval(timeInterval)
        timeInterval = null;
        messageDisplay.innerText = "GAME OVER!!"
        score = 0;
    }


    function setNewWord(){
        time = GAME_TIME;
        wordInput.value = "";
        messageDisplay.innerText = "Now Playing!!"
        const randomIndex = Math.floor(Math.random()*words.length);
        currentWord.innerText = words[randomIndex]

        if(!isPlaying){
            timeInterval = setInterval(countDown, 1000)
            isPlaying = true;
        }

        
    }

    function addScore(){
        score = score +1;
        
        scoreDisplay.innerText = score

    }
}
function l2(){
    alert("음식단어를 선택하였습니다");
    let words = ["banana", "steak","coffee","chocolate","bread","juice","noodle","chicken","seafood","spaghetti","avocado","bagel","bacon","doughnut","espresso","peas","cabbage","yogurt","cutlet","outmeal","cucumber","butter","salmon"];
    let score = 0;
    let time = 0;
    let timeInterval;
    let isPlaying = false;
    let isReady = false;

    const randomIndex = Math.floor(Math.random()*5);

    time=GAME_TIME;

    wordInput.addEventListener("input",e=>{
        const typedText = e.target.value;
        const currentText = currentWord.innerText;
        if(typedText.toUpperCase() === currentText.toUpperCase()){
            addScore()
            setNewWord()
        }
    
    })

    
    function countDown(){
        console.log(time)
        time = time -1;
        timeDisplay.innerText = time;
        if(time ===0){
            gameover();
        }
    }

    function gameover(){
        alert("게임오버 되었습니다 새로고침해서 다시 시작해 주세요");
        console.log("game over")
        isPlaying = false;
        time =0;
        clearInterval(timeInterval)
        timeInterval = null;
        messageDisplay.innerText = "GAME OVER!!"
        score = 0;
    }


    function setNewWord(){
        time = GAME_TIME;
        wordInput.value = "";
        messageDisplay.innerText = "Now Playing!!"
        const randomIndex = Math.floor(Math.random()*words.length);
        currentWord.innerText = words[randomIndex]

        if(!isPlaying){
            timeInterval = setInterval(countDown, 1000)
            isPlaying = true;
        }

        
    }

    function addScore(){
        score = score +1;
        
        scoreDisplay.innerText = score

    }
}
function l3(){
    alert("뜻좋은단어를 선택하였습니다");
    let words = ["miracle", "connet","adorable","mandy","mable","iris","cooing","treasure","heimish","delight","seraphic","azure","witty","elin","bliss","starry","mellow","eunoia","pitapat","sonorous","lucid","superb","illusion","flutter","cherish"];
    let score = 0;
    let time = 0;
    let timeInterval;
    let isPlaying = false;
    let isReady = false;

    const randomIndex = Math.floor(Math.random()*5);

    time=GAME_TIME;

    wordInput.addEventListener("input",e=>{
        const typedText = e.target.value;
        const currentText = currentWord.innerText;
        if(typedText.toUpperCase() === currentText.toUpperCase()){
            addScore()
            setNewWord()
        }
    
    })

    
    function countDown(){
        console.log(time)
        time = time -1;
        timeDisplay.innerText = time;
        if(time ===0){
            gameover();
        }
    }

    function gameover(){
        alert("게임오버 되었습니다 새로고침해서 다시 시작해 주세요");
        isPlaying = false;
        time =0;
        clearInterval(timeInterval)
        timeInterval = null;
        messageDisplay.innerText = "GAME OVER!!"
        score = 0;
    }


    function setNewWord(){
        time = GAME_TIME;
        wordInput.value = "";
        messageDisplay.innerText = "Now Playing!!"
        const randomIndex = Math.floor(Math.random()*words.length);
        currentWord.innerText = words[randomIndex]

        if(!isPlaying){
            timeInterval = setInterval(countDown, 1000)
            isPlaying = true;
        }

        
    }

    function addScore(){
        score = score +1;
        
        scoreDisplay.innerText = score

    }
}