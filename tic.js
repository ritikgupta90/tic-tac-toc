let userscore = 0;
let compscore = 0;
alert('__WELCOME TO GAME WORD..!__')
 //const choices=document.querySelectorAll(".choices");

const choices = document.querySelectorAll (".choice");
 const msg = document.querySelector ("#msg");

 const userscorePara = document.querySelector("#user-score");
 const compscorePara = document.querySelector("#comp-score");


const gencompchoice =()=>{
    const options =["ROCK","PAPER","SCISSORS"];
    const randIdx =Math.floor(Math.random( )* 3);
    //console.log(options[randIdx]);
    return options[randIdx];
};
const drowGame =()=>{
    console.log("game was drow");
    msg.innerText = "Game is Drow.";
     msg.style.backgroundColor = "#081b31";
};
const showwinner = (userwin, userchoice, compchoice)=>{
    if(userwin){
        userscore++;
        userchoice;
        userscorePara.innerText=userscore;
        console.log(" ---YOU WIN !---");
        msg.innerText = `---YOU WIN !__  you  ${userchoice}  beats  ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
         compscore++;
         compchoice;
         compscorePara.innerText=compscore;
        console.log(" ---YOU loss !-- - ");
        msg.innerText = `---YOU loss ! . ${compchoice}  beats  you   ${userchoice}` ;
        msg.style.backgroundColor = "red";
    }
};
 const playGame =(userchoice)=>{
   console.log("user choice=",userchoice);
    // generate computer choise
     const compchoice = gencompchoice();
    console.log("comp choice=",compchoice);

   //logic wind by sowmil coder
     if(userchoice === compchoice){

         drowGame();
    }
    else{
        let userwin=true;
        if(userchoice === "ROCK"){
            userwin = compchoice === "PAPER" ? false : true;
        }
        else if(userchoice === "PAPER"){
             userwin = compchoice === "SCISSORS" ? false : true;
        }
     else{
             userwin = compchoice === "ROCK" ? false : true;
        }
    
        showwinner(userwin, userchoice, compchoice);
    }
};

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{ 
        const userchoice=choice.getAttribute("id");
       // console.log("choices is click",userchoice);
       // console.log("choices is click",userchoicechoice);
         playGame(userchoice);
    });
});

