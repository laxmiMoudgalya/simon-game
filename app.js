let gamesequence=[];
let usersequence=[];
let btn=["yellow","red","green","purple"];

let started=false;
let level=0;

let h2=document.querySelector('h2');




document.addEventListener("keypress",function (){
    if(started==false){
        started=true;
        console.log("game started");}
        levelUp();
});



function gameFlash(el){
    el.classList.add("gameflash");
    setTimeout(() => {
        el.classList.remove("gameflash");
    },250);
};

function userFlash(el){
    el.classList.add("userflash");
    setTimeout(() => {
        el.classList.remove("userflash");
    },250);
};

function check(idx){
    
    if(usersequence[idx] === gamesequence[idx]){
        if(usersequence.length == gamesequence.length){
            setTimeout(levelUp,1000);
        }    
    }else{
        h2.innerHTML=`GAME OVER!!!Your score was <b>${level}<b><br>Press any key to start again`;
        reset();
    }
}

function levelUp(){
    usersequence=[];
    level++;
    h2.innerText=`Level ${level}`;

    let btnIdx=Math.floor(Math.random()*4);
    let randomClr=btn[btnIdx];
    let randombtn=document.querySelector(`.${randomClr}`);
    gamesequence.push(randomClr);
    console.log(`gamesequence:${gamesequence}`);
    gameFlash(randombtn);
    
   
};

function btnpress(){
    let btn=this;
    userFlash(btn);
    usercolor=btn.getAttribute('id');
    usersequence.push(usercolor);
    console.log(`usersequence: ${usersequence}`);
    check(usersequence.length - 1);
    
};


let allBtns=document.querySelectorAll(".box");
for(btnn of allBtns){
    btnn.addEventListener("click",btnpress);
};

function reset(){
    started=false;
    gamesequence=[];
    usersequence=[];
    level=0;
}