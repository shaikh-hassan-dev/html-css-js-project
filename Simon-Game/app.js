let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "green", "purple"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("game is started");
        started = true;

        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250)
}

function userFlash(btn) {
    btn.classList.add("gflash");
    setTimeout(function() {
        btn.classList.remove("gflash");
    },250)
}

function levelUp() {
    userSeq = [];
    level ++;
    h2.innerText = `level ${level}`;

    let randomIdx = Math.floor(Math.random()*4);
    let randomColor = btns[randomIdx];
    let randBtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns() {
        let idx = userSeq.length - 1;

        if (userSeq[idx] === gameSeq[idx]){
            if(userSeq.length == gameSeq.length){
                setTimeout(levelUp,1000);
            }
        } else {
            h2.innerHTML = `Game Over! your score was <b>${level}</b> Press any key to start`;
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function() {
                document.querySelector("body").style.background = "white";
            },2000);
            restart();
        }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for(allBtn of allBtns) {
    allBtn.addEventListener("click", btnPress);
}

function restart() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}