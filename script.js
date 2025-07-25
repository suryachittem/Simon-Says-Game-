let gameSeq=[];
let userSeq=[];
let btns=["yellow","red","purple","green"];
let highestScore=0;
let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress",function()
{
    if(started==false)
    {
        console.log("game is started");
        started=true;
    }
    levelup();
});

function levelup()
{
    userSeq=[];
    level++;
    h2.innerText=`level ${level}`;
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function gameFlash(btn)
{
    btn.classList.add("flash");
    setTimeout(function()
{
    btn.classList.remove("flash");
},250);
}

function userFlash(btn)
{
    btn.classList.add("userflash");
    setTimeout(function()
{
    btn.classList.remove("userflash");
},250);
}


function btnPress()
{
    
    let btn=this;
    userFlash(btn);

    let userColor=btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}

function checkAns(idx)
{
    if(userSeq[idx]===gameSeq[idx])
    {
    if(userSeq.length==gameSeq.length)
    {
        setTimeout(levelup,1000);
    }
}
    else{
        if(highestScore<level)
        {
            highestScore=level;
        }
        h2.innerHTML=`Game Over! <b> your score was ${level}</b> <br> please press any key to start the Game.<br> your highest score was ${highestScore}`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
    },150);
        reset();
    }
}

function reset()
{
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}
